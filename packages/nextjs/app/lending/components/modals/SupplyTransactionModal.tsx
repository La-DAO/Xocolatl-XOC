import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ERC20ABI } from "@/app/components/abis/erc20";
import CONFIG from "@/config";
import useAccountAddress from "@/hooks/useAccount";
import useSupply from "@/hooks/useSupply";
import { useLendingStore } from "@/stores/lending-store";
import { ReserveData } from "@/types/types";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address, parseUnits } from "viem";
import { useChainId, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

const SupplyTransactionModal: React.FC<ModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const { address: walletAddress } = useAccountAddress();
  const { handleSupply, isError: supplyError, error, supplyHash } = useSupply();
  const { refreshComponents } = useLendingStore();

  // form state
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  // approval state
  const [requiresApproval, setRequiresApproval] = useState(false);
  const [assetAllowanceState, setAssetAllowanceState] = useState("0");

  // 1) read on-chain allowance, re-poll on every block
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

  // 2) approval tx hooks
  const {
    writeContract: approveERC20,
    isError: isApprovalError,
    isPending: isApprovalPending,
    data: approvalHash,
  } = useWriteContract();
  const { isLoading: isApprovalLoading, isSuccess: isApprovalSuccess } = useWaitForTransactionReceipt({
    hash: approvalHash,
  });

  // 3) user token balance
  const assetBalance = useBalanceOf({
    tokenAddress: reserve?.underlyingAsset as Address,
    walletAddress: walletAddress as Address,
  });

  // Transaction confirmation tracking for supply
  const {
    isLoading: isSupplyConfirming,
    isSuccess: isSupplyConfirmed,
    data: transactionReceipt,
  } = useWaitForTransactionReceipt({
    hash: supplyHash,
  });

  // when modal opens or reserve changes, re-fetch allowance
  useEffect(() => {
    if (isOpen && reserve && walletAddress) {
      refetchAllowance();
    }
  }, [isOpen, reserve, walletAddress, refetchAllowance]);

  // format allowance into a human string
  useEffect(() => {
    if (isAssetAllowanceError) {
      setAssetAllowanceState("0");
    } else if (!isAssetAllowanceLoading && assetAllowance != null && reserve) {
      // Ensure assetAllowance is a string
      const allowanceString = assetAllowance.toString();

      // Pick up the token's true decimals:
      const tokenDecimals = Number(reserve.decimals);

      // Convert the allowance from wei to decimal string
      const formatted = Number(allowanceString) / Math.pow(10, tokenDecimals);

      // Optionally round to 7 places for UI consistency:
      setAssetAllowanceState(formatted.toFixed(7));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assetAllowance, isAssetAllowanceError, isAssetAllowanceLoading, reserve?.decimals]);

  // re-fetch after approval lands
  useEffect(() => {
    if (isApprovalSuccess) {
      // Add a small delay to ensure blockchain state is updated
      const timer = setTimeout(() => {
        refetchAllowance();
        console.log("Approval successful, refetching allowance");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isApprovalSuccess, refetchAllowance]);

  // validate amount vs wallet
  useEffect(() => {
    const num = parseFloat(amount) || 0;
    if (num <= 0 || isNaN(num)) {
      setIsValid(false);
      setErrorMessage("Amount must be > 0");
    } else if (balance && num > parseFloat(balance)) {
      setIsValid(false);
      setErrorMessage("Exceeds your wallet balance");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
    setBalanceError(assetBalance && num > parseFloat(assetBalance) ? "Insufficient on-chain balance" : null);
  }, [amount, balance, assetBalance]);

  // decide if approval is still needed
  useEffect(() => {
    const num = parseFloat(amount) || 0;
    const needsApproval = num > parseFloat(assetAllowanceState);
    setRequiresApproval(needsApproval);
    console.log("Approval check:", {
      amount: num,
      allowance: assetAllowanceState,
      needsApproval,
      isApprovalSuccess,
    });
  }, [amount, assetAllowanceState, isApprovalSuccess]);

  // handle supply errors / success
  useEffect(() => {
    if (supplyError) {
      setIsError(true);
      setErrorMessage(error?.message || "Supply failed");
    } else if (supplyHash) {
      setData(supplyHash);
      setShowSuccessIcon(true);
    }
  }, [supplyError, supplyHash, error]);

  // Handle transaction confirmation and refresh store data
  useEffect(() => {
    if (isSupplyConfirmed && transactionReceipt) {
      // Transaction confirmed successfully with receipt, wait a bit then refresh all lending data
      const timer = setTimeout(() => {
        refreshComponents();
        // Also refresh earnings data to start tracking the newly supplied assets
        console.log(
          "Supply transaction confirmed with receipt, refreshing lending store data and earnings",
          transactionReceipt,
        );
      }, 2000); // Wait 2 seconds to ensure blockchain state is updated

      return () => clearTimeout(timer);
    }
  }, [isSupplyConfirmed, transactionReceipt, refreshComponents]);

  // —— event handlers ——
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    // proactively keep allowance fresh as user types
    refetchAllowance();
  };
  const handleApproval = async () => {
    if (!reserve || !walletAddress) return;

    const num = parseFloat(amount) || 0;
    // if user already has enough allowance, no need to approve
    if (num <= parseFloat(assetAllowanceState)) return;

    try {
      // Use the token's own decimals, not hard‐coded 18
      const tokenDecimals = Number(reserve.decimals);

      // Convert exactly the amount they want to approve
      const amountInWei = parseUnits(amount, tokenDecimals);

      await approveERC20({
        address: reserve.underlyingAsset as Address,
        abi: ERC20ABI,
        functionName: "approve",
        args: [CONFIG.POOL as Address, amountInWei],
      });
    } catch (err: any) {
      console.error("Approval error", err);
      setErrorMessage(`Failed to approve: ${err.message}`);
    }
  };

  const handleSupplyClick = async () => {
    if (!reserve || !walletAddress) return;

    // 1) figure out the real decimals (from your reserve metadata)
    //    most tokens expose this, e.g. reserve.decimals === 6 for USDC/MXNe
    const tokenDecimals = Number(reserve.decimals);

    // 2) turn the user string into the proper big‐int
    const amountInWei = parseUnits(amount || "0", tokenDecimals);

    if (requiresApproval) {
      await handleApproval();
    } else {
      handleSupply(reserve.underlyingAsset as Address, amountInWei, walletAddress as Address);
    }
  };
  const handleMaxClick = () => {
    if (balance !== undefined && balance !== null) {
      // Convert balance to a number, multiply by 100 to preserve two decimal places, floor it, then divide by 100
      const flooredBalance = Math.floor(Number(balance) * 100) / 100;
      setAmount(flooredBalance.toFixed(2));
    }
  };

  const handleCopyError = () => {
    if (error?.message) {
      navigator.clipboard.writeText(error.message);
    }
  };

  const handleClose = () => {
    setAmount("");
    setIsValid(false);
    setErrorMessage("");
    setData(null);
    setIsError(false);
    refetchAllowance();
    onClose();
  };

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${supplyHash}`;

  // Function to get buy URL for different tokens
  const getBuyTokenUrl = (tokenSymbol: string): string => {
    const buyUrls: Record<string, string> = {
      USDC: "https://app.uniswap.org/#/swap?outputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&exactField=output&exactAmount=1",
      WETH: "https://app.uniswap.org/#/swap?outputCurrency=0x4200000000000000000000000000000000000006&exactField=output&exactAmount=1",
      CBETH: "https://app.uniswap.org/#/swap?outputCurrency=0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
      XOC: "https://app.uniswap.org/#/swap?outputCurrency=0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf&exactField=output&exactAmount=1",
      MXNe: "https://aerodrome.finance/swap?from=0x833589fcd6edb6e08f4c7c32d4f71b54bda02913&to=0x269cae7dc59803e5c596c95756faeebb6030e0af&chain0=8453&chain1=8453",
      // Add more tokens as needed
    };

    return buyUrls[tokenSymbol] || "https://app.uniswap.org/";
  };

  const handleBuyToken = () => {
    if (reserve) {
      const buyUrl = getBuyTokenUrl(reserve.symbol);
      window.open(buyUrl, "_blank");
    }
  };

  if (!isOpen || !reserve) return null;

  return (
    <div className="modal-blur-background">
      <div className="modal-container general-text-color flex flex-col gap-6">
        <h2>
          {t("LendingSupplyModalTitle")} {reserve.symbol}
        </h2>
        <div className="table-border-top">
          {!data && !isError && (
            <div className="flex flex-col gap-4 mt-4 sm:gap-6 sm:mt-6">
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingSupplyModalLabel")}</label>
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
                  {t("LendingSupplyModalBalance")}: {balance}{" "}
                  <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span>
                </div>
                {balanceError && <p className="text-error text-xs">{balanceError}</p>}
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              </div>
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingSupplyModalTransactionOverview")}</label>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingSupplyModalTransactionSupplyAPY")}</span>
                  <span className="font-bold">{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingSupplyModalTransactionCollateral")}</span>
                  <span
                    className={`text-sm font-medium ${
                      reserve.usageAsCollateralEnabled ? "text-success" : "text-error"
                    }`}
                  >
                    {reserve.usageAsCollateralEnabled ? "Enabled" : "Disabled"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingSupplyModalTransactionSupplyCap")}</span>
                  <span className="font-bold">
                    {reserve.supplyCap ? `${Math.floor(Number(reserve.supplyCap)).toLocaleString("en-US")}` : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingSupplyModalTransactionAvailableLiquidity")}</span>
                  <span className="font-bold">
                    {reserve.availableLiquidity
                      ? (() => {
                          const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
                          const supplied = Number(reserve.availableLiquidity) / 10 ** decimals;
                          return supplied.toLocaleString("en-US");
                        })()
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">
                  {t("LendingSupplyModalNeedToken")} {reserve.symbol}?
                </label>
                <div className="flex justify-between items-center text-sm">
                  <span>
                    {t("LendingSupplyModalBuyToken")} {reserve.symbol} {t("LendingSupplyModalBuyOnADex")}
                  </span>
                  <button onClick={handleBuyToken} className="text-primary hover:underline font-medium">
                    {t("LendingSupplyModalBuyNow")} →
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                {requiresApproval ? (
                  isApprovalLoading ? (
                    <div className="w-full bg-warning text-base-100 text-center rounded-lg py-2 cursor-not-allowed">
                      Waiting for approval...
                    </div>
                  ) : isApprovalSuccess ? (
                    <button
                      className={`w-full ${isValid ? "primary-btn" : "disabled-btn"}`}
                      onClick={handleSupplyClick}
                      disabled={!isValid}
                    >
                      {t("LendingSupplyModalButton")}
                    </button>
                  ) : (
                    <button
                      className={`w-full ${isValid ? "primary-btn" : "disabled-btn"}`}
                      onClick={handleApproval}
                      disabled={!isValid || isApprovalPending}
                    >
                      {isApprovalPending ? "Processing..." : t("LendingSupplyModalApprove")}
                    </button>
                  )
                ) : (
                  <button
                    className={`w-full ${isValid ? "primary-btn" : "disabled-btn"}`}
                    onClick={handleSupplyClick}
                    disabled={!isValid}
                  >
                    {t("LendingSupplyModalButton")}
                  </button>
                )}
                <button onClick={handleClose} className="secondary-btn w-full">
                  {t("LendingSupplyModalClose")}
                </button>
              </div>
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
                {isSupplyConfirming ? (
                  <>
                    <h2 className="text-base sm:text-lg">Transaction Submitted!</h2>
                    <p className="text-xs sm:text-sm flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Waiting for confirmation...
                    </p>
                  </>
                ) : isSupplyConfirmed ? (
                  <>
                    <h2 className="text-base sm:text-lg">{t("LendingSupplyModalSuccessTitle")}</h2>
                    <p className="text-xs sm:text-sm">{t("LendingSupplyModalSuccessMessage")}</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-base sm:text-lg">Transaction Submitted!</h2>
                    <p className="text-xs sm:text-sm">Your supply transaction has been submitted to the network.</p>
                  </>
                )}
                <div className="pb-3"></div>
                {blockExplorerUrl && (
                  <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                    Open in Block Explorer
                  </a>
                )}
              </div>
              <button onClick={handleClose} className="primary-btn">
                Ok, {t("LendingSupplyModalClose")}
              </button>
            </div>
          )}
          {isApprovalError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="error-container text-center">
                <Image
                  src="/Open Doodles - Messy.svg"
                  alt="Error"
                  className="max-w-60 mx-auto mb-4"
                  width={250}
                  height={250}
                />
                <p className="text-xs sm:text-sm">
                  Oops! Something went wrong. Try again please.{" "}
                  {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
                </p>
                <span onClick={handleCopyError} className="cursor-pointer underline font-bold text-lg">
                  Copy the error.
                </span>
              </div>
              <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
                Close
              </button>
            </div>
          )}
          {isError && !isApprovalError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="error-container text-center">
                <Image
                  src="/Open Doodles - Messy.svg"
                  alt="Error"
                  className="max-w-60 mx-auto mb-4"
                  width={250}
                  height={250}
                />
                <p className="text-xs sm:text-sm">
                  Woops, you encountered an error.
                  {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
                </p>
                <span onClick={handleCopyError} className="cursor-pointer underline font-bold text-lg">
                  Copy the error
                </span>
              </div>
              <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
                {t("LendingSupplyModalClose")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplyTransactionModal;
