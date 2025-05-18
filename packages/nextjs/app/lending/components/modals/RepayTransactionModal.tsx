import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ERC20ABI } from "@/app/components/abis/erc20";
import CONFIG from "@/config";
import useAccountAddress from "@/hooks/useAccount";
import { ReserveData } from "@/types/types";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address, parseEther } from "viem";
import { useChainId, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";
import { useBalanceOf } from "~~/hooks/useBalanceOf";
import useRepay from "~~/hooks/useRepay";

interface RepayModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

const RepayTransactionModal: React.FC<RepayModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const { address: walletAddress } = useAccountAddress();

  // Local form and UI state
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  // Approval state
  const [requiresApproval, setRequiresApproval] = useState(false);
  const [assetAllowanceState, setAssetAllowanceState] = useState("0");

  // Hooks for on-chain actions
  const {
    writeContract: approveERC20,
    isError: isApprovalError,
    isPending: isApprovalPending,
    data: hash,
  } = useWriteContract();
  const { isLoading: isApprovalLoading, isSuccess: isApprovalSuccess } = useWaitForTransactionReceipt({ hash });

  const {
    data: assetAllowance,
    isError: isAssetAllowanceError,
    isLoading: isAssetAllowanceLoading,
    refetch: refetchAllowance,
  } = useReadContract({
    address: reserve?.underlyingAsset as Address,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [walletAddress, CONFIG.POOL],
  });

  const assetBalance = useBalanceOf({
    tokenAddress: reserve?.underlyingAsset as Address,
    walletAddress: walletAddress as Address,
  });

  const { handleRepay, isError: repayError, error, repayHash, isRepayPending } = useRepay();

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${repayHash}`;

  // Format on-chain allowance
  useEffect(() => {
    if (isAssetAllowanceError) {
      setAssetAllowanceState("0");
    } else if (!isAssetAllowanceLoading && assetAllowance != null) {
      const allowanceEther = (Number(assetAllowance) / 1e18).toFixed(7);
      setAssetAllowanceState(allowanceEther);
    }
  }, [assetAllowance, isAssetAllowanceError, isAssetAllowanceLoading]);

  // Re-fetch allowance after approval
  useEffect(() => {
    if (isApprovalSuccess) {
      refetchAllowance();
    }
  }, [isApprovalSuccess, refetchAllowance]);

  // Validate amount & balance
  useEffect(() => {
    const num = parseFloat(amount) || 0;
    if (num <= 0 || isNaN(num)) {
      setIsValid(false);
      setErrorMessage(t("LendingRepayModalErrorPositive"));
    } else if (parseFloat(balance) < num) {
      setIsValid(false);
      setErrorMessage(t("LendingRepayModalErrorBalance"));
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
    // balance-specific error for UI
    if (assetBalance && num > parseFloat(assetBalance)) {
      setBalanceError(t("LendingRepayModalErrorBalanceWallet"));
    } else {
      setBalanceError(null);
    }
  }, [amount, balance, assetBalance, t]);

  // Decide if approval is needed
  useEffect(() => {
    const num = parseFloat(amount) || 0;
    setRequiresApproval(num > parseFloat(assetAllowanceState));
  }, [amount, assetAllowanceState]);

  // Handle on-chain errors and success
  useEffect(() => {
    if (repayError) {
      setIsError(true);
      setErrorMessage(error?.message || t("LendingRepayModalErrorUnknown"));
    }
    if (repayHash) {
      setData(repayHash as string);
      setShowSuccessIcon(true);
    }
  }, [repayError, repayHash, error, t]);

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    refetchAllowance();
  };

  const handleApproval = async () => {
    const num = parseFloat(amount) || 0;
    if (num <= parseFloat(assetAllowanceState)) return;

    try {
      const amountInWei = BigInt(parseEther(amount));
      await approveERC20({
        address: reserve?.underlyingAsset as Address,
        abi: ERC20ABI,
        functionName: "approve",
        args: [CONFIG.POOL as Address, amountInWei],
      });
    } catch (err) {
      console.error("Approval error", err);
      setErrorMessage(t("LendingRepayModalErrorApprove"));
    }
  };

  const handleRepayClick = () => {
    if (requiresApproval) {
      handleApproval();
    } else {
      const amountInWei = parseEther(amount);
      handleRepay(
        reserve?.underlyingAsset as Address,
        amountInWei,
        2, // interest rate mode
        walletAddress as Address,
      );
      setAmount("");
    }
  };

  const handleCopyError = () => {
    if (error?.message) {
      navigator.clipboard.writeText(error.message);
      setShowSuccessIcon(true);
      setTimeout(() => setShowSuccessIcon(false), 1500);
    }
  };

  const handleMaxClick = () => {
    const debtBalance = parseFloat(balance); // Assuming 'balance' is the debt balance
    const currentAssetBalance = parseFloat(assetBalance || "0");
    const maxAmount = Math.min(debtBalance, currentAssetBalance);
    setAmount(maxAmount.toString());
  };

  const handleClose = () => {
    setAmount("");
    setIsValid(false);
    setErrorMessage("");
    setData(null);
    setIsError(false);
    setShowSuccessIcon(false);
    refetchAllowance();
    onClose();
  };

  if (!isOpen || !reserve) return null;

  return (
    <div className="modal-blur-background">
      <div className="modal-container general-text-color flex flex-col gap-6">
        <h2>
          {t("LendingRepayModalTitle")} {reserve.symbol}
        </h2>
        <div className="table-border-top">
          {!data && !isError && (
            <>
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingRepayModalLabel")}</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="without-borders"
                    placeholder="0.00"
                    value={amount}
                    onChange={handleChange}
                  />
                  <span className="font-bold">{reserve.symbol}</span>
                </div>
                <div className="text-xs">
                  {t("LendingRepayModalBalance")}: {balance}{" "}
                  <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span>
                </div>
                {balanceError && <p className="text-error text-xs">{balanceError}</p>}
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              </div>

              <div className="flex justify-between gap-4">
                {requiresApproval ? (
                  isApprovalLoading ? (
                    <div className="flex-grow basis-2/3 bg-warning text-base-100 text-center rounded-lg py-2 cursor-not-allowed">
                      {t("LendingRepayModalWaiting")}...
                    </div>
                  ) : (
                    <button
                      className={`flex-grow basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                      onClick={handleApproval}
                      disabled={!isValid || isApprovalPending}
                    >
                      {isApprovalPending ? t("LendingRepayModalProcessing") : t("LendingRepayModalApprove")}
                    </button>
                  )
                ) : (
                  <button
                    className={`flex-grow basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                    onClick={handleRepayClick}
                    disabled={!isValid || isRepayPending}
                  >
                    {isRepayPending ? t("LendingRepayModalProcessing") : t("LendingRepayModalButton")}
                  </button>
                )}
                <button onClick={handleClose} className="secondary-btn flex-grow basis-1/3">
                  {t("LendingRepayModalClose")}
                </button>
              </div>
            </>
          )}

          {isApprovalError && (
            <div className="error-container text-center mt-6">
              <Image src="/Open Doodles - Messy.svg" alt="Error" width={250} height={250} />
              <p className="text-xs">
                {t("LendingRepayModalErrorApprove")}{" "}
                {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="ml-2" />}
              </p>
              <span onClick={handleCopyError} className="underline cursor-pointer">
                {t("LendingRepayModalCopyError")}
              </span>
            </div>
          )}

          {data && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="success-container text-center">
                <Image
                  src="/Open Doodles - Meditating.svg"
                  alt="Meditating"
                  className="max-w-60 mx-auto mb-4"
                  width={250}
                  height={250}
                />
                <h2 className="text-base sm:text-lg">{t("LendingRepayModalSuccessTitle")}</h2>
                <p className="text-xs sm:text-sm">{t("LendingRepayModalSuccessMessage")}</p>
                <div className="pb-3"></div>
                {blockExplorerUrl && (
                  <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                    {t("LendingRepayModalExplore")}
                  </a>
                )}
              </div>
              <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
                Ok, close
              </button>
            </div>
          )}

          {isError && !isApprovalError && (
            <div className="error-container text-center mt-6">
              <Image src="/Open Doodles - Messy.svg" alt="Error" width={250} height={250} />
              <p className="text-xs sm:text-sm">
                {t("LendingRepayModalErrorGeneral")}{" "}
                {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="ml-2" />}
              </p>
              <span onClick={handleCopyError} className="underline cursor-pointer">
                {t("LendingRepayModalCopyError")}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepayTransactionModal;
