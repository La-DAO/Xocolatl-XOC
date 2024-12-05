import React, { useCallback, useState } from "react";
import DepositModal from "../modals/DepositModal";
import WithdrawModal from "../modals/WithdrawModal";
import { ContractData, contractData } from "@/app/constants/contracts";
import BalanceOf from "@/app/lending/components/BalanceOf";
import useAccountAddress from "@/hooks/useAccount";
import { Address } from "viem";
import { useChainId } from "wagmi";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "~~/app/context/LanguageContext";

type Asset = {
  name: string;
  maxLTV: string;
  liquidationThreshold: string;
  houseOfReserveContract: Address;
  assetContract: Address;
};

const generateAssets = (contractData: ContractData) => {
  const assets: { [key: number]: Asset[] } = {};

  Object.entries(contractData).forEach(([chainId, data]) => {
    assets[parseInt(chainId)] = Object.entries(data.assets).map(([name, asset]) => ({
      name,
      maxLTV: asset.maxLTV,
      liquidationThreshold: asset.liquidationThreshold,
      houseOfReserveContract: data.houseOfReserves[name],
      assetContract: asset.contract,
    }));
  });

  return assets;
};

// Define the assets for each chain
const assets = generateAssets(contractData);

const DepositTable: React.FC = () => {
  // Get the translation object
  const { t } = useTranslation();
  // Get the chain ID
  const chainId = useChainId();

  // Define the state variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [selectedContract, setSelectedContract] = useState<string | null>(null);
  const [selectedAssetContract, setSelectedAssetContract] = useState<string>(""); // Provide a default value for selectedAssetContract

  // Get the assets for the current chain
  const chainAssets = assets[chainId] || [];

  const { address: walletAddress } = useAccountAddress();
  const [, setBalances] = useState<Record<string, string>>({});

  const handleBalanceChange = useCallback((tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  const handleOpenModal = (assetName: string, houseOfReserveContract: string, assetContract: string) => {
    setSelectedAsset(assetName);
    setSelectedContract(houseOfReserveContract);
    setSelectedAssetContract(assetContract);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedAsset(null);
    setSelectedContract(null);
    setSelectedAssetContract("");
    setIsModalOpen(false);
  };

  const handleOpenWithdrawModal = (assetName: string, houseOfReserveContract: string, assetContract: string) => {
    setSelectedAsset(assetName);
    setSelectedContract(houseOfReserveContract);
    setSelectedAssetContract(assetContract);
    setIsWithdrawModalOpen(true);
  };

  const handleCloseWithdrawModal = () => {
    setSelectedAsset(null);
    setSelectedContract(null);
    setSelectedAssetContract("");
    setIsWithdrawModalOpen(false);
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-center">
            <th scope="col" className="px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              {t("AssetsColumn1")}
            </th>
            {/* Hide this column on small screens */}
            <th
              scope="col"
              className="px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
            >
              {t("AssetsColumn2")}
            </th>
            <th
              scope="col"
              className="px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
            >
              {t("AssetsColumn3")}{" "}
              <div
                className="tooltip tooltip-primary"
                data-tip="Maximum Loan-To-Value ratio, which tells you how much you can leverage your asset's worth."
              >
                <InformationCircleIcon className="h-5 w-5 inline" />
              </div>
            </th>
            <th
              scope="col"
              className="px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
            >
              {t("AssetsColumn4")}{" "}
              <div
                className="tooltip tooltip-primary"
                data-tip="When the value of an asset falls below the Liquidation Threshold, it indicates that the asset's value has decreased significantly and may no longer be sufficient to cover the borrowed funds. In such cases, the lending platform may initiate a liquidation process to sell the borrower's assets and recover the borrowed amount."
              >
                <InformationCircleIcon className="h-5 w-5 inline" />
              </div>
            </th>
            <th scope="col" className="px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              {t("AssetsColumn5")}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-center">
          {chainAssets.map(asset => (
            <tr key={asset.name}>
              <td className="px-1 py-4">
                <p className="text-sm font-medium text-gray-900">{asset.name}</p>
              </td>
              {/* Hide this column on small screens */}
              <td className="dark:text-primary px-1 py-4 hidden sm:table-cell">
                <BalanceOf
                  tokenAddress={asset.assetContract as Address}
                  walletAddress={walletAddress as Address}
                  onBalanceChange={handleBalanceChange}
                />
              </td>
              <td className="px-1 py-4 hidden sm:table-cell">
                <p className="text-sm text-gray-900">{asset.maxLTV}</p>
              </td>
              <td className="px-1 py-4 hidden sm:table-cell">
                <div className="text-sm text-gray-900">
                  <p className="text-sm text-gray-900">{asset.liquidationThreshold}</p>
                </div>
              </td>
              <td className="flex px-1 py-4">
                <button
                  className="text-sm text-accent m-1 dark:text-white btn bg-base-100 hover:bg-primary hover:text-white"
                  onClick={() => handleOpenModal(asset.name, asset.houseOfReserveContract, asset.assetContract)}
                >
                  {t("AssetsDepositButton")}
                </button>
                <button
                  className="text-sm text-accent m-1 dark:text-white btn bg-base-100 ml-2 hover:bg-primary hover:text-white"
                  onClick={() => handleOpenWithdrawModal(asset.name, asset.houseOfReserveContract, asset.assetContract)}
                >
                  {t("AssetsWithdrawButton")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals for deposit and withdraw */}
      {isModalOpen && selectedAsset && selectedContract && (
        <DepositModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          assetName={selectedAsset}
          houseOfReserveContract={selectedContract}
          assetContract={selectedAssetContract}
          deposit={amount => {
            console.log(`Depositing ${amount} ${selectedAsset}`);
          }}
        />
      )}
      {isWithdrawModalOpen && selectedAsset && selectedContract && (
        <WithdrawModal
          isOpen={isWithdrawModalOpen}
          onClose={handleCloseWithdrawModal}
          assetName={selectedAsset}
          houseOfReserveContract={selectedContract}
        />
      )}
    </div>
  );
};

export default DepositTable;
