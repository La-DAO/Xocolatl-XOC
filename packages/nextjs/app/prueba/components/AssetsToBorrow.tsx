import React, { useState } from "react";
import SupplyModal from "./modals/SupplyTransactionModal";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import { ReserveData } from "@/types/types";

const AssetsToBorrow: React.FC = () => {
  // Fetch reserve data and wallet address using custom hooks
  const {
    reservesData: reserveData,
    isLoading: isLoadingReserveData,
    isError: isErrorReserveData,
  } = useGetReservesData();
  const { address: walletAddress } = useAccountAddress();

  // State management for modal visibility and selected reserve/balance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<ReserveData | null>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  // Filter reserves data to show all assets
  const filteredReserveData: ReserveData[] = Array.isArray(reserveData) ? reserveData.flat() : [];

  // Handle supply button click
  const handleSupplyClick = (reserve: ReserveData, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
  };

  return (
    <div className="mt-4">
      {/* Display loading message while fetching reserve data */}
      {isLoadingReserveData && <p className="text-amber-950">Loading...</p>}
      {/* Display error message if there is an error fetching reserve data */}
      {isErrorReserveData && <p className="text-error">Error fetching data.</p>}

      {/* Display the assets table if wallet address is available and there is data */}
      {walletAddress && filteredReserveData.length > 0 && (
        <div className="assets-container">
          {/* Table headers */}
          <div className="table-header assets-header py-3 flex justify-between tracking-wider">
            <div className="assets-header-item w-24">Asset</div>
            <div className="assets-header-item w-24">Available Liquidity</div>
            <div className="assets-header-item w-24">APY, variable</div>
            <div className="assets-header-item w-24">Actions</div>
          </div>

          {/* Table rows */}
          {filteredReserveData.map((reserve, index) => {
            const isButtonDisabled = !walletAddress;

            return (
              <div key={index} className="table-content table-border-top asset-row flex justify-between py-3">
                <div className="asset-row-item w-24 h-fit">
                  <p>{reserve.symbol}</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p>{(Number(reserve.availableLiquidity) / 1e18).toFixed(5)}</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p>{(Number(reserve.variableBorrowRate) / 1e25).toFixed(2)}%</p>
                </div>

                <div className="asset-row-item w-24 h-fit">
                  <button
                    className={`${isButtonDisabled ? "disabled-btn" : "primary-btn"}`}
                    disabled={isButtonDisabled}
                    onClick={() => handleSupplyClick(reserve, "")}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal for supply transaction */}
      <SupplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reserve={selectedReserve}
        balance={selectedBalance}
      />
    </div>
  );
};

export default AssetsToBorrow;
