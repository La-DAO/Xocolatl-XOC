import React, { useCallback, useState } from "react";
import WalletBalance from "./BalanceOf";
import SupplyModal from "./modals/SupplyTransactionModal";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import { ReserveData } from "@/types/types";
import { Address } from "viem";

const AssetsToSupply: React.FC = () => {
  // Fetch reserve data and wallet address using custom hooks
  const {
    reservesData: reserveData,
    isLoading: isLoadingReserveData,
    isError: isErrorReserveData,
  } = useGetReservesData();
  const { address: walletAddress } = useAccountAddress();

  // State management for balances, showing all assets, modal visibility, and selected reserve/balance
  const [balances, setBalances] = useState<Record<string, string>>({});
  const [showAll, setShowAll] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<ReserveData | null>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  // Callback for balance changes
  const handleBalanceChange = useCallback((tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  // Filter reserves data based on balance and visibility
  const filteredReserveData: ReserveData[] = Array.isArray(reserveData) ? reserveData.flat() : [];
  const filteredAndDisplayedReserveData = filteredReserveData.filter(reserve => {
    const balance = parseFloat(balances[reserve.underlyingAsset as Address] || "0");
    return showAll || balance > 0;
  });

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

      {/* Display checkbox to toggle showing all assets or only those with a balance */}
      {!isLoadingReserveData && !isErrorReserveData && (
        <div className="mb-4 w-fit">
          <label className="general-text-color cursor-pointer flex items-center">
            <input
              type="checkbox"
              checked={showAll}
              onChange={() => setShowAll(prev => !prev)}
              className="mr-2 form-checkbox h-4 w-4"
            />
            Show assets with 0 balance
          </label>
        </div>
      )}

      {/* Display the assets table if wallet address is available and there is data */}
      {walletAddress && filteredAndDisplayedReserveData.length > 0 && (
        <div className="assets-container">
          {/* Table headers */}
          <div className="table-header assets-header py-3 flex justify-between tracking-wider">
            <div className="assets-header-item w-24">Assets</div>
            <div className="assets-header-item w-24">Wallet Balance</div>
            <div className="assets-header-item w-24">APY</div>
            <div className="assets-header-item w-24">Can be collateral</div>
            <div className="assets-header-item w-24">Actions</div>
          </div>

          {/* Table rows */}
          {filteredAndDisplayedReserveData.map((reserve, index) => {
            const balance = balances[reserve.underlyingAsset as Address];
            const isButtonDisabled = !balance || parseFloat(balance) === 0;

            return (
              <div key={index} className="table-content table-border-top asset-row flex justify-between py-3">
                <div className="asset-row-item w-24 h-fit">
                  <p>{reserve.symbol}</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p>
                    <WalletBalance
                      tokenAddress={reserve.underlyingAsset as Address}
                      walletAddress={walletAddress}
                      onBalanceChange={handleBalanceChange}
                    />
                  </p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p>{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <div>
                    {reserve.usageAsCollateralEnabled ? (
                      <span className="text-xl text-success font-bold">&#10003;</span>
                    ) : (
                      <IsolatedStateComponent message="Isolated" />
                    )}
                  </div>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <button
                    className={`${isButtonDisabled ? "disabled-btn" : "primary-btn"}`}
                    disabled={isButtonDisabled}
                    onClick={() => handleSupplyClick(reserve, balance)}
                  >
                    Supply
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

export default AssetsToSupply;
