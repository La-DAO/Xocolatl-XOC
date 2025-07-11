"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "../context/LanguageContext";
import AssetsToBorrow from "./components/AssetsToBorrow";
import AssetsToSupply from "./components/AssetsToSupply";
import LendingInfo from "./components/LendingInfo";
import ProfileStats from "./components/ProfileStats";
import ReserveAssetInfo from "./components/ReserveAssetInfo";
import YourBorrows from "./components/YourBorrows";
import YourSupplies from "./components/YourSupplies";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import { useLendingStore, useUserAccountDataSync } from "@/stores/lending-store";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useChainId } from "wagmi";

const Lending = () => {
  const { t } = useTranslation();
  const [isYourSuppliesVisible, setIsYourSuppliesVisible] = useState(true);
  const [isAssetsToSupplyVisible, setIsAssetsToSupplyVisible] = useState(true);
  const [isYourBorrowsVissible, setIsYourBorrowsVissible] = useState(true);
  const [isAssetsToBorrowVisible, setIsAssetsToBorrowVisible] = useState(true);

  const [allBalancesZero, setAllBalancesZero] = useState(true);
  const [suppliesTotalBalance, setSuppliesTotalBalance] = useState(0);
  const [borrowsTotalBalance, setBorrowsTotalBalance] = useState(0);

  const { address } = useAccountAddress(); // Obtén la dirección del usuario
  const chainId = useChainId();

  // Get all reserves data for the dropdown
  const { reservesData: allReserves } = useGetReservesData();

  // Use the store for user account data
  const {
    userAccountLoading: isLoading,
    formattedHealthFactor,
    formattedLTV,
    formattedTotalCollateralBase,
    formattedTotalDebtBase,
    formattedAvailableBorrowsBase,
    refreshKey,
    refreshComponents,
    selectedReserveAsset,
    setSelectedReserveAsset,
    refreshUserAccountData,
    refreshEarnings,
    resetUserData,
  } = useLendingStore();

  // Sync user account data with the store - only when conditions are right
  const shouldFetch = !!address && chainId === 8453;
  useUserAccountDataSync(shouldFetch ? address : "");

  // Handle wallet and network changes
  useEffect(() => {
    if (!address || chainId !== 8453) {
      resetUserData();
      return;
    }
    // Trigger fresh data fetch when wallet connects or network switches to Base
    refreshUserAccountData();
    refreshEarnings();
  }, [address, chainId, resetUserData, refreshUserAccountData, refreshEarnings]);

  // Function to get network error message based on chainId
  const getNetworkErrorMessage = () => {
    if (chainId !== 8453) {
      return t("WrongNetworkMessage");
    }
    return null;
  };

  const networkErrorMessage = getNetworkErrorMessage();

  // Initialize driver.js tour
  useEffect(() => {
    // Check if this is the user's first visit to the lending page
    const hasSeenTour = localStorage.getItem("lending-tour-completed");

    if (!hasSeenTour && !isLoading && !networkErrorMessage) {
      // Wait a bit for the page to fully render
      const timer = setTimeout(() => {
        const driverObj = driver({
          showProgress: true,
          animate: true,
          overlayOpacity: 0.5,
          stagePadding: 10,
          stageRadius: 5,
          popoverOffset: 10,
          steps: [
            {
              element: "body",
              popover: {
                title: "Welcome to Alux!",
                description:
                  "Welcome to Alux, Mexico's on-chain lending protocol. Would you like a guided tour through our dapp?",
                side: "bottom",
                align: "center",
                showButtons: ["next", "close"],
                nextBtnText: "Yes, show me around!",
                doneBtnText: "Skip tour",
              },
            },
            {
              element: ".assets-to-supply-section",
              popover: {
                title: "Supply Assets",
                description:
                  "This is where you can supply your assets to earn interest. You need to deposit assets first before you can borrow. Click on any asset to start lending.",
                side: "bottom",
                align: "center",
              },
            },
            {
              element: ".your-supplies-section",
              popover: {
                title: "Your Supplies",
                description:
                  "After you deposit assets, they will appear here. This section shows all your current deposits and the interest you're earning.",
                side: "bottom",
                align: "center",
              },
            },
            {
              element: ".assets-to-borrow-section",
              popover: {
                title: "Borrow Assets",
                description:
                  "Once you have collateral (deposited assets), you can borrow other assets. This works similar to Aave - you can borrow up to a certain percentage of your collateral value.",
                side: "top",
                align: "center",
              },
            },
            {
              element: ".your-borrows-section",
              popover: {
                title: "Your Borrows",
                description:
                  "All your active borrows will be displayed here. You can see your borrowed amounts, interest rates, and manage your positions.",
                side: "bottom",
                align: "center",
              },
            },
            {
              element: ".reserve-asset-info-section",
              popover: {
                title: "Asset Details",
                description:
                  "This panel shows detailed information about the selected asset, including supply/borrow rates, liquidity, risk parameters, and historical APY data. You can switch between different assets using the dropdown to compare their metrics.",
                side: "top",
                align: "center",
              },
            },
            {
              element: ".profile-stats-section",
              popover: {
                title: "Profile Overview",
                description:
                  "This is your dashboard overview. Here you can see your total position in the protocol, including net worth, health factor, and borrowing capacity across all your assets.",
                side: "bottom",
                align: "center",
                showButtons: ["close"],
                doneBtnText: "Finish tour",
              },
            },
          ],
        });

        driverObj.drive();

        // Mark tour as completed
        localStorage.setItem("lending-tour-completed", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, networkErrorMessage]);

  // Calculate Net Worth balance
  const netWorth = suppliesTotalBalance - borrowsTotalBalance;

  // Helper function to check if we have valid formatted data
  const hasValidFormattedData = () => {
    const isValid =
      formattedTotalCollateralBase &&
      formattedTotalDebtBase &&
      formattedAvailableBorrowsBase &&
      formattedHealthFactor &&
      formattedLTV &&
      formattedTotalCollateralBase !== "0.0000" &&
      formattedAvailableBorrowsBase !== "0.0000";

    return isValid;
  };

  return (
    <div className="flex flex-col w-4/5 m-auto gap-4">
      {/* Floating Tour Button */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 mr-4">
        <button
          onClick={() => {
            localStorage.removeItem("lending-tour-completed");
            const driverObj = driver({
              showProgress: true,
              animate: true,
              overlayOpacity: 0.5,
              stagePadding: 10,
              stageRadius: 5,
              popoverOffset: 10,
              steps: [
                {
                  element: ".profile-stats-section",
                  popover: {
                    title: "Welcome to Alux!",
                    description:
                      "Welcome to Alux, Mexico's on-chain lending protocol. Would you like a guided tour through our dapp?",
                    side: "top",
                    align: "center",
                    showButtons: ["next", "close"],
                    nextBtnText: "Yes, show me around!",
                    doneBtnText: "Skip tour",
                  },
                },
                {
                  element: ".assets-to-supply-section",
                  popover: {
                    title: "Supply Assets",
                    description:
                      "This is where you can supply your assets to earn interest. You need to deposit assets first before you can borrow. Click on any asset to start lending.",
                    side: "bottom",
                    align: "center",
                  },
                },
                {
                  element: ".your-supplies-section",
                  popover: {
                    title: "Your Supplies",
                    description:
                      "After you deposit assets, they will appear here. This section shows all your current deposits and the interest you're earning.",
                    side: "bottom",
                    align: "center",
                  },
                },
                {
                  element: ".assets-to-borrow-section",
                  popover: {
                    title: "Borrow Assets",
                    description:
                      "Once you have collateral (deposited assets), you can borrow other assets. This works similar to Aave - you can borrow up to a certain percentage of your collateral value.",
                    side: "top",
                    align: "center",
                  },
                },
                {
                  element: ".your-borrows-section",
                  popover: {
                    title: "Your Borrows",
                    description:
                      "All your active borrows will be displayed here. You can see your borrowed amounts, interest rates, and manage your positions.",
                    side: "bottom",
                    align: "center",
                  },
                },
                {
                  element: ".reserve-asset-info-section",
                  popover: {
                    title: "Asset Details",
                    description:
                      "This panel shows detailed information about the selected asset, including supply/borrow rates, liquidity, risk parameters, and historical APY data. You can switch between different assets using the dropdown to compare their metrics.",
                    side: "top",
                    align: "center",
                  },
                },
                {
                  element: ".profile-stats-section",
                  popover: {
                    title: "Profile Overview",
                    description:
                      "This is your dashboard overview. Here you can see your total position in the protocol, including net worth, health factor, and borrowing capacity across all your assets.",
                    side: "bottom",
                    align: "center",
                    showButtons: ["close"],
                    doneBtnText: "Finish tour",
                  },
                },
              ],
            });

            driverObj.drive();

            // Mark tour as completed
            localStorage.setItem("lending-tour-completed", "true");
          }}
          className="bg-success dark:bg-success text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#93C572]/80 transition-colors duration-200"
          title="Start Guided Tour"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      {networkErrorMessage ? (
        <div className="min-h-36 text-center bg-white rounded-xl py-6 px-8 mt-4 flex items-center justify-center">
          <p className="text-2xl text-red-600 font-bold">Wrong network, please change to the Base network!</p>
        </div>
      ) : (
        <>
          <div className="min-h-flex bg-white rounded-xl py-6 px-8 flex justify-between items-end profile-stats-section">
            {!address ? (
              <ProfileStats
                balance={0}
                ltv={0}
                healthFactor={0}
                totalCollateralBase={0}
                totalDebtBase={0}
                availableBorrowsBase={0}
              />
            ) : chainId !== 8453 ? (
              <ProfileStats
                balance={0}
                ltv={0}
                healthFactor={0}
                totalCollateralBase={0}
                totalDebtBase={0}
                availableBorrowsBase={0}
              />
            ) : isLoading || !hasValidFormattedData() ? (
              <div className="flex items-center justify-center py-8">
                <div className="loading loading-spinner loading-lg"></div>
                <span className="ml-3 text-gray-600">
                  {chainId === 8453 ? "Loading account data..." : "Switching to Base network..."}
                </span>
              </div>
            ) : (
              (() => {
                return (
                  <ProfileStats
                    balance={netWorth}
                    ltv={Number(formattedLTV)}
                    healthFactor={formattedHealthFactor}
                    totalCollateralBase={Number(formattedTotalCollateralBase)}
                    totalDebtBase={Number(formattedTotalDebtBase)}
                    availableBorrowsBase={Number(formattedAvailableBorrowsBase)}
                  />
                );
              })()
            )}
            <div className="flex gap-2">
              <button onClick={refreshComponents} className="primary-btn h-fit w-fit">
                {t("LendingRefreshButton")}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {/* Your Supplies */}
              <div className="table-background rounded-xl p-8 flex flex-col your-supplies-section">
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
              <div className="table-background rounded-xl p-8 flex flex-col assets-to-supply-section">
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
                {isAssetsToSupplyVisible && (
                  <AssetsToSupply key={refreshKey} onReserveClick={setSelectedReserveAsset} />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Your Borrows */}
              <div className="table-background rounded-xl p-8 flex flex-col your-borrows-section">
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
              <div className="table-background rounded-xl p-8 flex flex-col assets-to-borrow-section">
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
              {selectedReserveAsset && (
                <div className="reserve-asset-info-section">
                  <ReserveAssetInfo
                    reserve={selectedReserveAsset}
                    allReserves={allReserves}
                    onReserveChange={setSelectedReserveAsset}
                  />
                </div>
              )}
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
