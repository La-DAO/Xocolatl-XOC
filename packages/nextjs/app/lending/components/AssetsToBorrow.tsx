import React, { useMemo, useState } from "react";
import BorrowTransactionModal from "./modals/BorrowTransactionModal";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { useLendingStore } from "@/stores/lending-store";
import { ReserveData } from "@/types/types";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "~~/app/context/LanguageContext";

const AssetsToBorrow: React.FC = () => {
  const { t } = useTranslation();
  const { reservesData, isLoading: isLoadingReserveData, isError: isErrorReserveData } = useGetReservesData();
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  const { address: walletAddress } = useAccountAddress();
  const { formatBalanceWithCurrency, formatUserBorrowableAmount } = useLendingStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<ReserveData | null>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  // Handle borrow button click
  const handleBorrowClick = (reserve: ReserveData, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
  };

  // Helper function to format available liquidity with currency symbol
  const formatAvailableLiquidity = (reserve: ReserveData) => {
    const availableLiquidity = (Number(reserve.availableLiquidity) / 10 ** Number(reserve.decimals)).toFixed(5);
    return formatBalanceWithCurrency(availableLiquidity, reserve.symbol);
  };

  // Helper function to get raw available liquidity value
  const getRawAvailableLiquidity = (reserve: ReserveData) => {
    return (Number(reserve.availableLiquidity) / 10 ** Number(reserve.decimals)).toString();
  };

  // Dynamic borrowable logic
  const assetsToBorrow = useMemo(() => {
    const depositedAssets = new Set(
      userReservesData
        ?.filter(userReserve => userReserve.usageAsCollateralEnabledOnUser)
        .map(userReserve => userReserve.underlyingAsset),
    );

    return reservesData?.map(reserve => {
      const isDeposited = depositedAssets.has(reserve.underlyingAsset);
      const canBorrow = !isDeposited && depositedAssets.size > 0;

      return {
        ...reserve,
        canBorrow,
        isDeposited,
      };
    });
  }, [reservesData, userReservesData]);

  if (isLoadingReserveData || isLoadingUserReserves) {
    return <p className="text-amber-950">Loading...</p>;
  }

  if (isErrorReserveData || isErrorUserReserves) {
    return <p className="text-error">Error fetching data.</p>;
  }

  return (
    <div className="mt-4">
      {walletAddress && (assetsToBorrow ?? []).length > 0 && (
        <div className="assets-container">
          <div className="table-header assets-header py-3 flex justify-between tracking-wider">
            <div className="assets-header-item w-24">{t("LendingAssetsToBorrowColumn1")}</div>
            <div className="assets-header-item w-24">{t("LendingAssetsToBorrowColumn2")}</div>
            <div className="assets-header-item w-24 hidden sm:block">{t("LendingAssetsToBorrowColumn3")}</div>
            <div className="assets-header-item w-24 hidden md:block">
              {t("LendingBorrowModalYouCanBorrow")}
              <span
                className="tooltip tooltip-info ml-1"
                data-tip="You cannot borrow the same asset you have supplied. The amounts shown are approximate calculations based on your current collateral and market conditions."
              >
                <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 cursor-pointer" />
              </span>
            </div>
            <div className="assets-header-item w-24"></div>
          </div>

          {(assetsToBorrow ?? []).map((reserve, index) => {
            const formattedLiquidity = formatAvailableLiquidity(reserve);
            const formattedBorrowRate = (Number(reserve.variableBorrowRate) / 1e25).toFixed(2);
            const userBorrowableAmount = formatUserBorrowableAmount(reserve);
            const isButtonDisabled = !walletAddress;

            return (
              <div key={index} className="table-content table-border-top asset-row flex justify-between py-3">
                <div className="asset-row-item w-24 h-fit text-lg font-bold">
                  <p>
                    {reserve.symbol}
                    {reserve.symbol === "CETES" && (
                      <span className="tooltip tooltip-info ml-1" data-tip="CETES is not a borrowable asset in Alux">
                        <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 cursor-pointer" />
                      </span>
                    )}
                  </p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p>{formattedLiquidity}</p>
                </div>
                <div className="asset-row-item w-24 h-fit hidden sm:block">
                  <p>{formattedBorrowRate}%</p>
                </div>
                <div className="asset-row-item w-24 h-fit hidden md:block">
                  <p
                    className={`${
                      userBorrowableAmount === "❌" ? "text-red-500 text-xl" : "text-green-600 font-semibold"
                    }`}
                  >
                    {userBorrowableAmount}
                  </p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <button
                    className={`${isButtonDisabled || reserve.symbol === "CETES" ? "disabled-btn" : "primary-btn"}`}
                    disabled={isButtonDisabled || reserve.symbol === "CETES"}
                    onClick={() => handleBorrowClick(reserve, getRawAvailableLiquidity(reserve))}
                    title={reserve.symbol === "CETES" ? "CETES is currently not a borrowable asset in Alux" : ""}
                  >
                    {t("LendingBorrowModalButton")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <BorrowTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reserve={selectedReserve}
        balance={selectedBalance}
      />
    </div>
  );
};

export default AssetsToBorrow;
