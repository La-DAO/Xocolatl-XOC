import { useEffect, useState } from "react";
import MintModal from "../modals/MintModal";
import RepayModal from "../modals/RepayModal";
import { chainIds } from "@/app/constants/chains";
import { ContractData, contractData } from "@/app/constants/contracts";
import { Address } from "viem";
import { useChainId, useReadContract, useReadContracts } from "wagmi";
import { useAccount } from "wagmi";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { houseOfCoinABI } from "~~/app/components/abis/houseofcoin";
import { assetsAccountantABI } from "~~/app/components/abis/xocabis";
import { useTranslation } from "~~/app/context/LanguageContext";
import { createContractsArray, getContractAddress } from "~~/app/utils/utils";

type Deposit = {
  symbol: string;
  amount: number | string;
  minted: number;
  mintingPower: number;
  houseofReserveContract: string;
  assetContract: string;
  houseOfCoinContract: string;
  assetsAccountantContract: string;
  userHealthRatio: number;
  backedTokenID: string;
};

const generateDeposits = (
  contractData: ContractData,
  formattedBalances: number[],
  formattedMints: number[],
  formattedMintingPower: string[],
  formattedUserHealthRatio: string[],
): { [key: number]: Deposit[] } => {
  const deposits: { [key: number]: Deposit[] } = {};
  let globalIndex = 0;
  Object.entries(contractData).forEach(([chainId, data]) => {
    const chainIdNumber = parseInt(chainId, 10);
    const typedData = data as ContractData[typeof chainIdNumber];

    deposits[chainIdNumber] = Object.entries(typedData.assets).map(([symbol, asset]) => {
      const deposit = {
        symbol,
        amount: parseFloat(formattedBalances[globalIndex]?.toFixed(6) || "0"),
        minted: parseFloat(formattedMints[globalIndex]?.toFixed(6) || "0"),
        mintingPower: parseFloat(String(formattedMintingPower[globalIndex] || 0)),
        houseofReserveContract: typedData.houseOfReserves[symbol],
        assetContract: asset.contract,
        houseOfCoinContract: typedData.houseOfCoin,
        assetsAccountantContract: typedData.assetsAccountant,
        userHealthRatio: parseFloat(String(formattedUserHealthRatio[globalIndex] || 0)),
        backedTokenID: asset.backedTokenID || "",
      };
      globalIndex++;
      return deposit;
    });
  });

  return deposits;
};

const YourDeposits = () => {
  const { t } = useTranslation();
  const { address } = useAccount();
  const chainId = useChainId();

  // Initialize args for useReadContract
  type ContractAddresses = {
    [key: number]: Address;
  };

  // Define the contract addresses for different chainIds
  const assetsAccountantContractAddresses: ContractAddresses = {
    [chainIds.BNB]: contractData[chainIds.BNB].assetsAccountant,
    [chainIds.POLYGON]: contractData[chainIds.POLYGON].assetsAccountant,
    [chainIds.BASE]: contractData[chainIds.BASE].assetsAccountant,
    // Add other chainIds and their respective contract addresses as needed
  };

  let balanceOfBatchArgs: readonly any[] = [];
  const assetsAccountantContractAddress = assetsAccountantContractAddresses[chainId];
  if (chainId === chainIds.BNB) {
    balanceOfBatchArgs = [
      [address, address],
      [
        "109392682290811008908886113795024894114858297692101491428581960053892280371532",
        "85925987621059561469642133971917522532759533358859710307334868485990845307587",
      ],
    ];
  } else if (chainId === chainIds.POLYGON) {
    balanceOfBatchArgs = [
      [address, address, address],
      [
        "50555364508944084596386852498342299217943258061077772526321412649917896821656",
        "66805875592187098191911925759759719192189877131573133170154621641178588059651",
        "61525895172180918160808167300975909222815099626523523164453657306362585741149",
      ],
    ];
  } else if (chainId === chainIds.BASE) {
    balanceOfBatchArgs = [
      [address, address],
      [
        "103699178623717208254151570900052288551889562116172163191481545905964204685853",
        "48535059369184038424797331578893275455355989669714862332699705636188497614796",
      ],
    ];
  }

  const { data: batchDeposits } = useReadContract({
    address: assetsAccountantContractAddress,
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: balanceOfBatchArgs,
  });

  let balanceOfBatchMintArgs: readonly any[] = [];

  if (chainId === chainIds.BNB) {
    balanceOfBatchMintArgs = [
      [address, address],
      [
        "20522261273989995093535621539527639348056070782168896977856206653483982583625",
        "36240893346862244708187722980583805772746997097966348518842957091580463611081",
      ],
    ];
  } else if (chainId === chainIds.POLYGON) {
    balanceOfBatchMintArgs = [
      [address, address, address],
      [
        "80640369098075461197954251758880905983781036616487658892797544182481328362385",
        "27778163481220956171503989467144576287986246817586635666554224569167019219186",
        "17135799413344306437655147654156582701703759838473908703722998121562726910745",
      ],
    ];
  } else if (chainId === chainIds.BASE) {
    balanceOfBatchMintArgs = [
      [address, address],
      [
        "8845051240560412557863425425586194836306989955683227883233854819693793989434",
        "113840104691995121390901058070296301361752511786326304414032534053768202616249",
      ],
    ];
  }

  const { data: batchMints } = useReadContract({
    address: assetsAccountantContractAddress,
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: balanceOfBatchMintArgs,
  });

  const contractAddresses = [
    contractData[chainIds.BNB].houseOfReserves.WETH,
    contractData[chainIds.BNB].houseOfReserves.WBNB,
    contractData[chainIds.POLYGON].houseOfReserves.WETH,
    contractData[chainIds.POLYGON].houseOfReserves.MATICX,
    contractData[chainIds.POLYGON].houseOfReserves.WMATIC,
    contractData[chainIds.BASE].houseOfReserves.WETH,
    contractData[chainIds.BASE].houseOfReserves.CBETH,
  ];

  const houseOfCoinAddress = getContractAddress(contractData[chainId].houseOfCoin);

  const batchCheckRemainingMintingPowerArray = createContractsArray(
    "checkRemainingMintingPower",
    contractAddresses,
    { abi: houseOfCoinABI, address: houseOfCoinAddress },
    address as `0x${string}`,
  );

  const batchComputeUserHealthRatioArray = createContractsArray(
    "computeUserHealthRatio",
    contractAddresses,
    { abi: houseOfCoinABI, address: houseOfCoinAddress },
    address as `0x${string}`,
  );

  const { data: batchCheckRemainingMintingPower, isError } = useReadContracts({
    contracts: batchCheckRemainingMintingPowerArray,
  });

  useEffect(() => {
    if (batchCheckRemainingMintingPower) {
      console.log("Batch CheckRemainingMintingPower:", batchCheckRemainingMintingPower);
    }
    if (isError) {
      console.error("Error fetching checkRemainingMintingPower:", isError);
    }
  }, [batchCheckRemainingMintingPower, isError]);

  const { data: batchComputeUserHealthRatio } = useReadContracts({
    contracts: batchComputeUserHealthRatioArray,
  });

  useEffect(() => {
    if (batchComputeUserHealthRatio) {
      console.log("BatchComputeUserHealthRatio:", batchComputeUserHealthRatio);
    }
  }, [batchComputeUserHealthRatio]);

  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [isRepayModalOpen, setIsRepayModalOpen] = useState(false);
  interface SelectedAsset {
    assetName: string;
    houseOfReserveContract: Address;
    assetContract: Address;
    houseOfCoinContract: Address;
    assetsAccountantContract: Address;
    backedTokenID?: bigint | number;
  }

  const [selectedAsset, setSelectedAsset] = useState<SelectedAsset | null>(null);
  const [backedTokenID, setBackedTokenID] = useState<bigint | null>(null);

  const openMintModal = (
    assetName: string,
    houseOfReserveContract: Address,
    assetContract: Address,
    houseOfCoinContract: Address,
    assetsAccountantContract: Address,
  ) => {
    setSelectedAsset({
      assetName,
      houseOfReserveContract,
      assetContract,
      houseOfCoinContract,
      assetsAccountantContract,
    });
    setIsMintModalOpen(true);
  };

  const closeMintModal = () => {
    setIsMintModalOpen(false);
    setSelectedAsset(null);
  };

  const openRepayModal = (
    assetName: string,
    houseOfReserveContract: Address,
    assetContract: Address,
    houseOfCoinContract: Address,
    assetsAccountantContract: Address,
    backedTokenID: string,
  ) => {
    setSelectedAsset({
      assetName,
      houseOfReserveContract,
      assetContract,
      houseOfCoinContract,
      assetsAccountantContract,
    });
    setBackedTokenID(BigInt(backedTokenID));
    setIsRepayModalOpen(true);
  };

  const closeRepayModal = () => {
    setIsRepayModalOpen(false);
    setSelectedAsset(null);
  };

  const formattedBalances: any[] = batchDeposits
    ? (batchDeposits as (number | string)[]).map((balance: number | string) => Number(balance) / 10 ** 18)
    : [0, 0, 0, 0, 0, 0, 0];
  const formattedMints: any[] = batchMints
    ? (batchMints as any[]).map((mint: any) => Number(mint) / 10 ** 18)
    : [0, 0, 0, 0, 0];
  const formattedMintingPower: any[] = batchCheckRemainingMintingPower
    ? batchCheckRemainingMintingPower.map(({ result }) => (Number(result) / 10 ** 18).toFixed(2))
    : [0, 0, 0, 0, 0, 0, 0];

  const formattedUserHealthRatio: any[] = batchComputeUserHealthRatio
    ? batchComputeUserHealthRatio.map(({ result }) => (Number(result) / 10 ** 18).toFixed(2))
    : [0, 0, 0, 0, 0];

  console.log("batchBalances:", batchDeposits);
  console.log("Formatted batchBalances", formattedBalances);
  console.log("batchMints:", batchMints);

  const deposits = generateDeposits(
    contractData,
    formattedBalances,
    formattedMints,
    formattedMintingPower,
    formattedUserHealthRatio,
  );

  const chainDeposits = deposits[chainId] || [];
  const allDepositsZero = formattedBalances.every(balance => balance === 0);
  return (
    <div className="rounded-md">
      {/* Section for displaying the user's deposits */}
      {chainDeposits.length > 0 && !allDepositsZero ? (
        <>
          {/* Table for displaying deposits */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-center">
                <th scope="col" className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assets
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                >
                  Deposited
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                >
                  Minted
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                >
                  Minting Power
                  <div
                    className="tooltip tooltip-primary hover:text-neutral  dark:hover:text-neutral"
                    data-tip="The amount of $XOC you can mint based on your deposited amount."
                  >
                    <InformationCircleIcon className="h-5 w-5 inline" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                >
                  Health Factor
                  <div
                    className="tooltip tooltip-primary hover:text-neutral dark:hover:text-neutral"
                    data-tip="The Health of your position, which tells you how much you still can leverage your asset's worth. The closer to 1 it gets, the riskier your position becomes, when it gets under 1 the position can get liquidated."
                  >
                    <InformationCircleIcon className="h-5 w-5 inline" />
                  </div>
                </th>
                <th scope="col" className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {/* Iterate through deposits to create table rows */}
              {chainDeposits.map((deposit, index) => (
                <tr key={index}>
                  <td className="px-2 py-4">
                    <p className="text-sm font-medium text-gray-900">{deposit.symbol}</p>
                  </td>
                  <td className="px-2 py-4 hidden sm:table-cell">
                    <p className="text-sm text-gray-900">{formattedBalances[index]}</p>
                  </td>
                  <td className="px-2 py-4 hidden sm:table-cell">
                    <p className="text-sm text-gray-900">{formattedMints[index]}</p>
                  </td>
                  <td className="px-2 py-4 hidden sm:table-cell">
                    <p className="text-sm text-gray-900">{deposit.mintingPower}</p>
                  </td>
                  <td className="px-2 py-4 hidden sm:table-cell">
                    <div className="text-sm text-gray-900">{deposit.userHealthRatio}</div>
                  </td>
                  <td className="py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="px-6 text-sm text-accent dark:text-white btn bg-base-100 hover:bg-primary hover:text-white"
                      onClick={() =>
                        openMintModal(
                          deposit.symbol,
                          deposit.houseofReserveContract as Address,
                          deposit.assetContract as Address,
                          deposit.houseOfCoinContract as Address,
                          deposit.assetsAccountantContract as Address,
                        )
                      }
                    >
                      Mint
                    </button>
                    <button
                      className="px-6 text-sm text-accent dark:text-white btn bg-base-100 ml-2 hover:bg-primary hover:text-white"
                      onClick={() =>
                        openRepayModal(
                          deposit.symbol,
                          deposit.houseofReserveContract as Address,
                          deposit.assetContract as Address,
                          deposit.houseOfCoinContract as Address,
                          deposit.assetsAccountantContract as Address,
                          deposit.backedTokenID as string,
                        )
                      }
                    >
                      Repay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Mint Modal */}
          {isMintModalOpen && selectedAsset && (
            <MintModal
              isOpen={isMintModalOpen}
              onClose={closeMintModal}
              assetName={selectedAsset.assetName}
              houseOfReserveContract={selectedAsset.houseOfReserveContract}
              assetContract={selectedAsset.assetContract}
              houseOfCoinContract={selectedAsset.houseOfCoinContract}
              assetsAccountantContract={selectedAsset.assetsAccountantContract}
            />
          )}
          {/* Repay Modal */}
          {isRepayModalOpen && selectedAsset && (
            <RepayModal
              isOpen={isRepayModalOpen}
              onClose={closeRepayModal}
              backedTokenID={backedTokenID?.toString() ?? "0"}
              houseOfCoinContract={selectedAsset.houseOfCoinContract}
            />
          )}
        </>
      ) : (
        <p className="text-primary text-2xl">{t("YourDepositsEmpty")}</p>
      )}
    </div>
  );
};

export default YourDeposits;
