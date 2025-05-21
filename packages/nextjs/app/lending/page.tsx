"use client";

import React, { useState } from "react";
import { useTranslation } from "../context/LanguageContext";
import AssetsToBorrow from "./components/AssetsToBorrow";
import AssetsToSupply from "./components/AssetsToSupply";
import LendingInfo from "./components/LendingInfo";
import ProfileStats from "./components/ProfileStats";
import ReserveAssetInfo from "./components/ReserveAssetInfo";
import YourBorrows from "./components/YourBorrows";
import YourSupplies from "./components/YourSupplies";
import { fillerLoadingReserve } from "./constants";
import useAccountAddress from "@/hooks/useAccount";
// Importa el hook de la dirección
import useGetUserAccountData from "@/hooks/useGetUserAccountData";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { maxUint256 } from "viem";
import { useChainId } from "wagmi";
import { ReserveData } from "~~/types/types";

// Importa el hook de datos del usuario

const Lending = () => {
  const { t } = useTranslation();
  const [isYourSuppliesVisible, setIsYourSuppliesVisible] = useState(true);
  const [isAssetsToSupplyVisible, setIsAssetsToSupplyVisible] = useState(true);
  const [isYourBorrowsVissible, setIsYourBorrowsVissible] = useState(true);
  const [isAssetsToBorrowVisible, setIsAssetsToBorrowVisible] = useState(true);
  const [selectedReserveAsset, setSelectedReserveAsset] = useState<ReserveData>(fillerLoadingReserve);

  const [allBalancesZero, setAllBalancesZero] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const [suppliesTotalBalance, setSuppliesTotalBalance] = useState(0);
  const [borrowsTotalBalance, setBorrowsTotalBalance] = useState(0);

  const { address } = useAccountAddress(); // Obtén la dirección del usuario
  const { userAccountData, isLoading, isError } = useGetUserAccountData(address || ""); // Obtén los datos del usuario

  const chainId = useChainId();

  const refreshComponents = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  const handleReserveClick = (reserve: ReserveData) => {
    setSelectedReserveAsset(reserve);
  };

  // Calculate Net Worth balance
  const netWorth = suppliesTotalBalance - borrowsTotalBalance;

  // Format the health factor
  // if health factor is equal to maxUint256, set it to infinity symbol, else we divide it by 1e18
  // Handle case if health factor is not defined
  const isMaxUint256 = (value: any) => {
    // Check against BigInt, decimal string, and scientific notation
    const maxUintStr = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
    return (
      value === maxUint256 ||
      value === maxUintStr ||
      value === "1.157920892373162e+59" ||
      value === Number(maxUintStr) ||
      value === Number("1.157920892373162e+59")
    );
  };

  // Function to get network error message based on chainId
  const getNetworkErrorMessage = () => {
    if (chainId !== 8453) {
      return t("WrongNetworkMessage");
    }
    return null;
  };

  const networkErrorMessage = getNetworkErrorMessage();

  const formattedHealthFactor = userAccountData?.healthFactor
    ? isMaxUint256(userAccountData.healthFactor)
      ? "∞"
      : Number(userAccountData.healthFactor) / 1e18
    : "∞";

  return (
    <div className="flex flex-col w-4/5 m-auto gap-4">
      {networkErrorMessage ? (
        <div className="min-h-36 text-center bg-white rounded-xl py-6 px-8 mt-4 flex items-center justify-center">
          <p className="text-2xl text-red-600 font-bold">Wrong network, please change to the Base network!</p>
        </div>
      ) : (
        <>
          <div className="min-h-flex bg-white rounded-xl py-6 px-8 justify-between items-end">
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error loading data</div>
            ) : (
              <ProfileStats
                balance={netWorth}
                netAPY={userAccountData?.ltv || 0} // Usa datos del hook de usuario para APY o cualquier otro campo relevante
                healthFactor={formattedHealthFactor} // Usa datos del hook de usuario para el health factor
              />
            )}
            <button onClick={refreshComponents} className="primary-btn h-fit w-fit">
              {t("LendingRefreshButton")}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {/* Your Supplies */}
              <div className="table-background rounded-xl p-8 flex flex-col">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-primary">{t("LendingYourSuppliesTitle")}</h1>
                  </div>
                  <button
                    onClick={() => setIsYourSuppliesVisible(prev => !prev)}
                    className="text-primary focus:outline-none"
                  >
                    {isYourSuppliesVisible ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </button>
                </div>
                {isYourSuppliesVisible && (
                  <YourSupplies
                    setAllBalancesZero={setAllBalancesZero}
                    setSuppliesTotalBalance={setSuppliesTotalBalance}
                    key={refreshKey}
                  />
                )}
              </div>

              {/* Assets to Supply */}
              <div className="table-background rounded-xl p-8 flex flex-col">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-primary">{t("LendingAssetsToSupplyTitle")}</h1>
                    {isAssetsToSupplyVisible && (
                      <p className="subtitles-gray-color">{t("LendingAssetsToSupplyDescription")}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setIsAssetsToSupplyVisible(prev => !prev)}
                    className="text-primary focus:outline-none"
                  >
                    {isAssetsToSupplyVisible ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </button>
                </div>
                {isAssetsToSupplyVisible && <AssetsToSupply key={refreshKey} onReserveClick={handleReserveClick} />}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Your Borrows */}
              <div className="table-background rounded-xl p-8 flex flex-col">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-primary">{t("LendingYourBorrowsTitle")}</h1>
                  </div>
                  <button
                    onClick={() => setIsYourBorrowsVissible(prev => !prev)}
                    className="text-primary focus:outline-none"
                  >
                    {isYourBorrowsVissible ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </button>
                </div>
                {isYourBorrowsVissible && (
                  <YourBorrows setBorrowsTotalBalance={setBorrowsTotalBalance} key={refreshKey} />
                )}
              </div>
              {/* Assets to Borrow */}
              <div className="table-background rounded-xl p-8 flex flex-col">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-primary">{t("LendingAssetsToBorrowTitle")}</h1>
                    {isAssetsToBorrowVisible && !allBalancesZero && (
                      <p className="subtitles-gray-color">{t("LendingAssetsToBorrowDescription")}</p>
                    )}
                    {allBalancesZero && <p className="subtitles-gray-color">{t("LendingAssetsToBorrowZeroBalance")}</p>}
                  </div>
                  {!allBalancesZero && (
                    <button
                      onClick={() => setIsAssetsToBorrowVisible(prev => !prev)}
                      className="text-primary focus:outline-none"
                    >
                      {isAssetsToBorrowVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </button>
                  )}
                </div>
                {isAssetsToBorrowVisible && !allBalancesZero && <AssetsToBorrow key={refreshKey} />}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2">
              {selectedReserveAsset && <ReserveAssetInfo reserve={selectedReserveAsset} />}
            </div>
            <div className="w-full lg:w-1/2">
              <LendingInfo />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lending;
