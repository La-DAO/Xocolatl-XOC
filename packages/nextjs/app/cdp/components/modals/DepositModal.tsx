// DepositModal.tsx
import React, { useState } from "react";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: string;
  assetContract: string | null;
  deposit: (amount: string) => void;
}

const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
  assetName,
  houseOfReserveContract,
  assetContract,
  deposit,
}) => {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    deposit(amount);
    setAmount("");
  };

  if (!isOpen) return null;
  console.log("assetContract", assetContract);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark: text-black">Deposit {assetName}</h2>
        <div role="alert" className="alert mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>You will need to approve the transaction before it goes through</span>
        </div>
        <h4 className="text-lg font-medium mb-1 dark:text-black">Amount</h4>
        <input
          type="text"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder={assetName}
          className="input input-bordered w-full dark:bg-neutral"
        />
        <h6 className="text-sm text-gray-500 mb-4"> Balance: walletBalance</h6>
        <h4 className="text-lg font-medium mb-1 dark:text-black">Transaction Overview</h4>
        <div className="overflow-x-auto mb-4">
          <table className="table border dark:text-black">
            {/* head */}
            <thead></thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>You will deposit:</td>
                <td>
                  {amount ? amount : 0} {assetName}
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>House Of Reserve Address:</td>
                <td>{houseOfReserveContract}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between">
          <button
            className="btn btn-success btn-lg bg-base-100 hover:text-white dark:bg-neutral"
            onClick={handleDeposit}
          >
            Deposit
          </button>
          <button className="btn btn-error btn-lg text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
