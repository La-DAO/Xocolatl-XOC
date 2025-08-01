import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMint from "@/hooks/useMint";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useAccount, useChainId, useReadContract } from "wagmi";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { houseOfCoinABI } from "~~/app/components/abis/houseofcoin";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";

interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: Address;
  assetContract: Address;
  houseOfCoinContract: Address;
  assetsAccountantContract: Address;
}

const MintModal: React.FC<MintModalProps> = ({
  isOpen,
  onClose,
  assetName,
  houseOfReserveContract,
  assetContract,
  houseOfCoinContract,
}) => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const { address } = useAccount();
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const { data: mintingPower } = useReadContract({
    address: houseOfCoinContract,
    abi: houseOfCoinABI,
    functionName: "checkRemainingMintingPower",
    args: [address, houseOfReserveContract],
  });

  const formattedMintingPower = mintingPower
    ? new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(Number(mintingPower) / 10 ** 18)
    : "$0.00";

  const { data: userHealthRatio } = useReadContract({
    address: houseOfCoinContract,
    abi: houseOfCoinABI,
    functionName: "computeUserHealthRatio",
    args: [address, houseOfReserveContract],
  });

  const formattedUserHealthRatio = userHealthRatio ? (Number(userHealthRatio) / 10 ** 18).toFixed(2) : "0.00";

  const { handleMint, isError: mintError, error, mintingHash } = useMint();

  useEffect(() => {
    validateAmount(amount);
  }, [amount]);

  useEffect(() => {
    if (mintError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (mintingHash) {
      setData(mintingHash);
    }
  }, [mintError, mintingHash, error]);

  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue <= 0) {
      setIsValid(false);
      setErrorMessage("Amount must be a positive number.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleMintClick = () => {
    if (amount) {
      try {
        handleMint(houseOfCoinContract, assetContract, houseOfReserveContract, amount);
      } catch (err) {
        console.error("Error during handleMint execution:", err);
      }
    } else {
      console.error("Amount is not valid.");
    }
  };

  const handleCopyError = () => {
    if (error?.message) {
      navigator.clipboard
        .writeText(error.message)
        .then(() => {
          console.log("Error copied to clipboard");
          setShowSuccessIcon(true);
          setTimeout(() => {
            setShowSuccessIcon(false);
          }, 1500);
        })
        .catch(err => {
          console.error("Failed to copy error to clipboard", err);
        });
    }
  };

  const handleClose = () => {
    setAmount("");
    setIsValid(false);
    setErrorMessage("");
    setData(null);
    setIsError(false);
    onClose();
  };

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${mintingHash}`;

  const getProgressClass = () => {
    const ratio = parseFloat(formattedUserHealthRatio);

    if (ratio >= 5) {
      return "progress-success";
    } else if (ratio >= 2) {
      return "progress-warning";
    } else {
      return "progress-error";
    }
  };

  const getProgressBarValue = () => {
    const healthRatio = parseFloat(formattedUserHealthRatio);
    if (healthRatio < 2) {
      return healthRatio * 5; // Maps health ratio to 0-100
    } else if (healthRatio >= 2 && healthRatio <= 5) {
      return healthRatio + 20; // Maps health ratio to 0-100 in the 2-5 range
    } else if (healthRatio >= 5 && healthRatio <= 10) {
      return healthRatio + 50;
    } else if (healthRatio > 10 && healthRatio <= 20) {
      return healthRatio + 70;
    } else {
      return 100; // Fully covered for health ratio > 5
    }
  };

  const getProgressEmoji = () => {
    const ratio = parseFloat(formattedUserHealthRatio);

    if (ratio < 2) {
      return "👎 Not looking too good, are we? Time to get back on track and repay some $XOC!";
    } else if (ratio >= 2 && ratio < 5) {
      return "🤔 Hmm, you're on the edge. Maybe a little less debt?";
    } else if (ratio >= 5 && ratio < 10) {
      return "👍 You're doing alright, but keep an eye on your position when the market gets volatile!";
    } else if (ratio >= 10 && ratio < 20) {
      return "😄 You're cruising! Keep it up, nothing to worry!";
    } else {
      return "🤩 You're fitter than a double-shot espresso on Monday morning!";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 dark:text-primary w-full max-w-md sm:max-w-lg md:max-w-2xl mx-4">
        <h2 className="text-lg sm:text-xl font-bold mb-4">{t("MintModalTitle")}</h2>
        <p className="mb-4 text-sm sm:text-base">
          {t("MintModalSubtitle")}: {assetName}
        </p>

        <div role="alert" className="alert mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-5 w-5 sm:h-6 sm:w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-xs sm:text-sm">{t("MintModalUnlockThePowerOfDigitalMXNPesosWithXOC")}</span>
        </div>

        {!data && !isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold text-sm sm:text-base">{t("MintModalAmount")}</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="without-borders w-full text-sm sm:text-base"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleChange}
                />
                <span className="font-bold ml-2">$XOC</span>
              </div>
              {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              <p className="text-sm font-bold">
                {t("MintModalMintedAmount")}
                <div
                  className="tooltip tooltip-primary hover:text-neutral  dark:hover:text-neutral"
                  data-tip="A 1.5% protocol fee will be incurred at minting. This fee goes directly to our DAO treasury to support ongoing development, maintenance, and security of the protocol."
                >
                  <InformationCircleIcon className="h-5 w-5 inline" />
                </div>
              </p>
              <div className="flex items-center">
                <div className="without-borders w-full text-sm sm:text-base">
                  {amount ? (parseFloat(amount) * 1.015).toFixed(2) : "0.00"}
                </div>
                <span className="font-bold ml-2">$XOC</span>
              </div>
            </div>
            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold text-sm sm:text-base">{t("MintModalPositionOverview")}</label>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span>{t("MintModalMintingPower")}:</span>
                <span className="font-bold">
                  <div
                    className="tooltip tooltip-primary hover:text-neutral  dark:hover:text-neutral"
                    data-tip={t("mintingPowerTooltip")}
                  >
                    <InformationCircleIcon className="h-5 w-5 inline" />
                  </div>
                  {formattedMintingPower}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span>{t("MintModalUserHealthRatio")}:</span>
                <span className="font-bold">
                  <div
                    className="tooltip tooltip-primary hover:text-neutral dark:hover:text-neutral"
                    data-tip={t("userHealthRatioTooltip")}
                  >
                    <InformationCircleIcon className="h-5 w-5 inline" />
                  </div>
                  {formattedUserHealthRatio}
                </span>
              </div>
              <progress
                className={`progress w-full ${getProgressClass()}`}
                value={getProgressBarValue()}
                max="100"
              ></progress>
              <span className="ml-2 text-2xl">{getProgressEmoji()}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button
                className={`flex-grow sm:basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                onClick={handleMintClick}
                disabled={!isValid}
              >
                {t("MintModalMint")}
              </button>
              <button onClick={handleClose} className="secondary-btn flex-grow sm:basis-1/3">
                {t("MintModalCancel")}
              </button>
            </div>
          </div>
        )}

        {isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="error-container text-center">
              <Image
                src="/Open Doodles - Messy.svg"
                alt="Meditating"
                className="max-w-60 mx-auto mb-4"
                width={250}
                height={250}
              />
              <p className="text-xs sm:text-sm">
                Oops! Something went wrong.{" "}
                {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
              </p>
              <span onClick={handleCopyError} className="cursor-pointer underline font-bold text-lg">
                {t("MintModalCopyTheError")}
              </span>
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              {t("MintModalClose")}
            </button>
          </div>
        )}

        {data && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="success-container text-center">
              <Image
                src="/Open Doodles - Dancing.svg"
                alt="Meditating"
                className="max-w-60 mx-auto mb-4"
                width={250}
                height={250}
              />
              <h2 className="text-base sm:text-lg">{t("MintModalSuccessTitle")}!</h2>
              <p className="text-xs sm:text-sm">{t("MintModalSuccessMessage")}</p>
              <div className="pb-3"></div>
              {blockExplorerUrl && (
                <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                  {t("MintModalOpenInBlockExplorer")}
                </a>
              )}
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              {t("MintModalOkClose")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MintModal;
