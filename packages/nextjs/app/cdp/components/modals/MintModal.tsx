import React, { useState } from "react";
import useMint from "@/hooks/useMint";
import { Address } from "viem";

interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: string;
  assetContract: string;
}

const MintModal: React.FC<MintModalProps> = ({ isOpen, onClose, assetName, houseOfReserveContract, assetContract }) => {
  const [amount, setAmount] = useState("");
  const { mint } = useMint(assetContract as Address, houseOfReserveContract as Address);

  if (!isOpen) return null;

  const handleMint = () => {
    // Logic to handle minting $XOC tokens
    mint(amount);
    console.log(`Minting $XOC tokens for ${assetName}`);
    console.log(mint(amount));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Mint $XOC</h2>
        <p className="mb-4">Reserve Asset: {assetName}</p>
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
          <span>Here I can warn you about an important fact about minting $XOC</span>
        </div>
        <h4 className="text-lg font-medium mb-1 dark:text-black">Amount</h4>
        <input
          type="text"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder={assetName}
          className="input input-bordered w-full dark:bg-neutral"
        />
        <h4 className="text-lg font-medium mb-1 dark:text-black">Transaction Overview</h4>
        <div className="overflow-x-auto mb-4">
          <table className="table border dark:text-black">
            {/* head */}
            <thead></thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>You will mint:</td>
                <td>{amount ? amount : 0} $XOC</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>House Of Coin Address:</td>
                <td>0xB90996A70C957a1496e349434CF0E030A9f693A4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn bg-success text-white" onClick={handleMint}>
          Mint
        </button>
        <button className="btn bg-gray-500 text-white ml-2" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MintModal;
