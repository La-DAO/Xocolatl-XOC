import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/context/LanguageContext";
import useAccountAddress from "@/hooks/useAccount";
import { useDynamicNetWorth } from "@/hooks/useDynamicNetWorth";
import BaseLogo from "@/public/Base-Logo.jpg";
import { useLendingStore } from "@/stores/lending-store";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useChainId } from "wagmi";

// Helper function to check if value is max uint256 (same as in lending store)
const isMaxUint256 = (value: any) => {
  const maxUintStr = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
  return (
    value === maxUintStr ||
    value === "1.157920892373162e+59" ||
    value === Number(maxUintStr) ||
    value === Number("1.157920892373162e+59")
  );
};

// Helper function to format health factor display (same as in BorrowTransactionModal)
const formatHealthFactorDisplay = (healthFactor: number | string) => {
  if (healthFactor === "∞" || isMaxUint256(healthFactor)) {
    return (
      <span className="flex items-center gap-1">
        <span>∞</span>
      </span>
    );
  }
  return typeof healthFactor === "number" ? healthFactor.toFixed(2) : healthFactor;
};

interface ProfileStatsProps {
  balance: number;
  ltv: number;
  healthFactor: number | string;
  totalCollateralBase: number;
  totalDebtBase: number;
  availableBorrowsBase: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({
  balance,
  ltv,
  healthFactor,
  totalCollateralBase,
  totalDebtBase,
  availableBorrowsBase,
}) => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const { address: walletAddress } = useAccountAddress();
  const { totalEarningsUSD } = useLendingStore();

  // Use dynamic net worth calculation
  const dynamicNetWorth = useDynamicNetWorth(balance);

  const data = {
    netWorth: dynamicNetWorth.toFixed(2),
    ltv: ltv,
    healthFactor: formatHealthFactorDisplay(healthFactor),
    totalCollateralBase: totalCollateralBase,
    totalDebtBase: totalDebtBase,
    availableBorrowsBase: availableBorrowsBase,
    totalEarnings: totalEarningsUSD,
  };

  // Function to get network error message based on chainId
  const getNetworkErrorMessage = () => {
    if (chainId !== 8453) {
      return t("WrongNetworkMessage");
    }
    return null;
  };

  const networkErrorMessage = getNetworkErrorMessage();

  // Check if wallet is connected
  const isWalletConnected = !!walletAddress;

  return (
    <header className="bg-inherit dark:bg-inherit flex flex-col space-y-1 md:space-y-2 w-full md:w-fit">
      <div>
        {networkErrorMessage ? (
          <div className="text-lg md:text-2xl text-red-600 font-bold">
            Wrong network, please change to the Base network!
          </div>
        ) : !isWalletConnected ? (
          <div className="text-left py-4 md:py-8">
            <div className="text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{t("LendingProfileWelcome")}</div>
            <div className="text-sm md:text-xl text-black">{t("LendingProfileWelcomeMessage")}</div>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-2 mb-1 md:mb-2">
              <div className="text-lg md:text-2xl">
                <Image src={BaseLogo} alt="Base Logo" className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div>
                <div className="text-lg md:text-2xl text-primary font-semibold">Base Market</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row items-start md:items-center gap-2 md:gap-0 md:space-x-4 lg:space-x-8">
              <div className="text">
                <div className="text-xs md:text-sm text-gray-400">
                  {t("LendingProfileNetWorth")}
                  <span className="tooltip tooltip-info" data-tip={t("LendingProfileNetWorthTooltip")}>
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="text-sm md:text-lg text-accent font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(dynamicNetWorth)}
                  <span className="text-xs text-success ml-1">●</span>
                </div>
              </div>
              <div className="text">
                <div className="text-xs md:text-sm text-gray-400">
                  {t("LendingProfileTotalDebt")}
                  <span className="tooltip tooltip-info" data-tip={t("LendingProfileTotalDebtTooltip")}>
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="text-sm md:text-lg text-accent font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(data.totalDebtBase)}
                </div>
              </div>
              <div className="text">
                <div className="text-xs md:text-sm text-gray-400">
                  {t("LendingProfileHealthFactor")}
                  <span className="tooltip tooltip-info" data-tip={t("LendingProfileHealthFactorTooltip")}>
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="text-sm md:text-lg text-accent font-semibold">{data.healthFactor}</div>
              </div>
              <div className="text">
                <div className="text-xs md:text-sm text-gray-400">
                  {t("LendingProfileAvailableBorrows")}
                  <span className="tooltip tooltip-info" data-tip={t("LendingProfileAvailableBorrowsTooltip")}>
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="text-sm md:text-lg text-accent font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(data.availableBorrowsBase)}
                </div>
              </div>
              <div className="text col-span-2 md:col-span-1">
                <div className="text-xs md:text-sm text-gray-400">
                  {t("LendingProfileProjectedEarnings")}
                  <span className="tooltip tooltip-info" data-tip={t("LendingProfileProjectedEarningsTooltip")}>
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="text-sm md:text-lg text-success font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(parseFloat(data.totalEarnings))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default ProfileStats;
