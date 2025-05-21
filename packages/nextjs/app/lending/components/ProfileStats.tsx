import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/context/LanguageContext";
import BaseLogo from "@/public/Base-Logo.jpg";
import { useChainId } from "wagmi";

interface ProfileStatsProps {
  balance: number;
  netAPY: number;
  healthFactor: number | string;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ balance, netAPY, healthFactor }) => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const data = {
    netWorth: balance.toFixed(2),
    netAPY: netAPY.toFixed(2),
    healthFactor: typeof healthFactor === "number" ? healthFactor.toFixed(2) : healthFactor,
  };

  // Function to get network error message based on chainId
  const getNetworkErrorMessage = () => {
    if (chainId !== 8453) {
      return t("WrongNetworkMessage");
    }
    return null;
  };

  const networkErrorMessage = getNetworkErrorMessage();

  return (
    <header className="bg-inherit dark:bg-inherit flex flex-col space-y-2 w-full md:w-fit">
      <div>
        {networkErrorMessage ? (
          <div className="text-2xl text-red-600 font-bold">Wrong network, please change to the Base network!</div>
        ) : (
          <div className="flex items-center space-x-2 mb-2">
            <div className="text-2xl">
              <Image src={BaseLogo} alt="Base Logo" className="h-8 w-8" />
            </div>
            <div>
              <div className="text-2xl text-primary font-semibold">Base Market</div>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text">
            <div className="text-sm text-gray-400">{t("LendingProfileNetWorth")}</div>
            <div className="text-lg text-accent font-semibold">${data.netWorth}</div>
          </div>
          {/* <div className="text">
        <div className="text-sm text-gray-400">Net APY</div>
        <div className="text-lg text-accent font-semibold">{data.netAPY}%</div>
        </div> */}
          <div className="text">
            <div className="text-sm text-gray-400">{t("LendingProfileHealthFactor")}</div>
            <div className="text-lg text-accent font-semibold">{data.healthFactor}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileStats;
