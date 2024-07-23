// WithdrawModal.tsx
import React, { useState } from "react";
import WalletBalance from "@/app/prueba/components/WalletBalance";
import useAccountAddress from "@/hooks/useAccount";
import { useWithdraw } from "@/hooks/useWithdraw";
import { Address } from "viem";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: string;
  assetContract: string;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  assetName,
  houseOfReserveContract,
  assetContract,
}) => {
  const [amount, setAmount] = useState("");
  const { address: walletAddress } = useAccountAddress();
  const [balances, setBalances] = useState<Record<string, string>>({});
  console.log(balances);

  const handleBalanceChange = (tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  };

  const {
    withdraw,
    isError: isWithdrawError,
    isSuccess: isWithdrawSuccess,
    isPending: isWithdrawPending,
  } = useWithdraw(houseOfReserveContract as Address);

  const onWithdrawClick = () => {
    withdraw(amount);
    setAmount("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-black">Withdraw {assetName}</h2>
        <div className="mb-4">
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
        <div className="flex gap-2">
          <h6 className="text-base text-gray-500 mb-4">Balance:</h6>
          <WalletBalance
            tokenAddress={assetContract as Address}
            walletAddress={walletAddress as Address}
            onBalanceChange={handleBalanceChange}
          />
        </div>
        <h4 className="text-lg font-medium mb-1 dark:text-black">Transaction Overview</h4>
        <div className="overflow-x-auto mb-4">
          <table className="table border dark:text-black">
            <tbody>
              <tr>
                <td>You will withdraw:</td>
                <td>
                  {amount ? amount : 0} {assetName}
                </td>
              </tr>
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
            onClick={onWithdrawClick}
            disabled={isWithdrawPending}
          >
            {isWithdrawPending ? "Processing..." : "Withdraw"}
          </button>
          <button className="btn btn-error btn-lg text-white" onClick={onClose}>
            Close
          </button>
        </div>
        {isWithdrawSuccess && <div className="text-green-500 mt-4">Withdrawal successful!</div>}
        {isWithdrawError && <div className="text-red-500 mt-4">Withdrawal failed: {isWithdrawError}</div>}
      </div>
    </div>
  );
};

export default WithdrawModal;
