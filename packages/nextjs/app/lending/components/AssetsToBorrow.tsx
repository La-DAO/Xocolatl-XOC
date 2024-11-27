import React, { useMemo, useState } from "react";
import BorrowTransactionModal from "./modals/BorrowTransactionModal";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { ReserveData } from "@/types/types";
import { useTranslation } from "~~/app/context/LanguageContext";

const AssetsToBorrow: React.FC = () => {
  const { t } = useTranslation();
  const { reservesData, isLoading: isLoadingReserveData, isError: isErrorReserveData } = useGetReservesData();
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  const { address: walletAddress } = useAccountAddress();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<ReserveData | null>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  // Handle borrow button click
  const handleBorrowClick = (reserve: ReserveData, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
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
            <div className="assets-header-item w-24">{t("LendingAssetsToBorrowColumn3")}</div>
            <div className="assets-header-item w-24">{t("LendingAssetsToBorrowColumn4")}</div>
            <div className="assets-header-item w-24">{t("LendingAssetsToBorrowColumn5")}</div>
          </div>

          {(assetsToBorrow ?? []).map((reserve, index) => {
            const availableLiquidity = (Number(reserve.availableLiquidity) / 10 ** Number(reserve.decimals)).toFixed(5);
            const isButtonDisabled = !walletAddress;
            const { canBorrow } = reserve;

            return (
              <div key={index} className="table-content table-border-top asset-row flex justify-between py-3">
                <div className="asset-row-item w-24 h-fit">
                  <p>{reserve.symbol}</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p>{availableLiquidity}</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p>{(Number(reserve.variableBorrowRate) / 1e25).toFixed(2)}%</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <button
                    className={`${isButtonDisabled ? "disabled-btn" : "primary-btn"}`}
                    disabled={isButtonDisabled || !canBorrow}
                    onClick={() => handleBorrowClick(reserve, availableLiquidity)}
                  >
                    {t("LendingBorrowModalButton")}
                  </button>
                </div>
                <div className="asset-row-item w-24 h-fit relative">
                  <p>
                    {canBorrow ? (
                      "✔️"
                    ) : (
                      <div
                        className="tooltip tooltip-top tooltip-error"
                        data-tip="You cannot borrow the same asset as you deposit"
                      >
                        ❌
                      </div>
                    )}
                  </p>
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
