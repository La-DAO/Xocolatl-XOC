import { useEffect, useState } from "react";
import MintModal from "../modals/MintModal";
import RepayModal from "../modals/RepayModal";
import { chainIds } from "@/app/constants/chains";
import { ContractData, contractData } from "@/app/constants/contracts";
import { Abi, Address } from "viem";
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

const chainOffsets: Record<number, number> = {
  [chainIds.BNB]: 0,
  [chainIds.POLYGON]: 2,
  [chainIds.BASE]: 5,
  [chainIds.OPTIMISM]: 7,
};

const generateDeposits = (
  contractData: ContractData,
  balances: number[],
  mints: number[],
  mintingPowers: string[],
  healthRatios: string[],
): Record<number, Deposit[]> => {
  const deposits: Record<number, Deposit[]> = {};

  Object.entries(contractData).forEach(([chainIdStr, data]) => {
    const chainIdNum = parseInt(chainIdStr, 10);
    const offset = chainOffsets[chainIdNum] ?? 0;
    const assetsArray = Object.entries(data.assets);

    deposits[chainIdNum] = assetsArray.map(([symbol, asset], localIndex) => {
      const idx = offset + localIndex;

      return {
        symbol,
        amount: parseFloat(balances[idx]?.toFixed(6) || "0"),
        minted: Number(mints[idx] || 0),
        mintingPower: parseFloat(mintingPowers[idx] || "0"),
        userHealthRatio: parseFloat(healthRatios[idx] || "0"),
        houseofReserveContract: data.houseOfReserves[symbol],
        assetContract: asset.contract,
        houseOfCoinContract: data.houseOfCoin,
        assetsAccountantContract: data.assetsAccountant,
        backedTokenID: asset.backedTokenID || "",
      };
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
    [chainIds.OPTIMISM]: contractData[chainIds.OPTIMISM].assetsAccountant,
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
  } else if (chainId === chainIds.OPTIMISM) {
    balanceOfBatchArgs = [
      [address, address],
      [
        "98238957695230476703622097749160738363155613901659799469608818483013413714241",
        "17446454257212154086622051658766467795745126333227561378411236993131976587669",
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
  } else if (chainId === chainIds.OPTIMISM) {
    balanceOfBatchMintArgs = [
      [address, address],
      [
        "89191140644899609017819904470662040145608595656030110807049069263839213849596",
        "85740053480844256891889697717021793028884333653939004018845862249304599430213",
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
    contractData[chainIds.OPTIMISM].houseOfReserves.WETH,
    contractData[chainIds.OPTIMISM].houseOfReserves.OP,
  ];

  const houseOfCoinAddress = contractData[chainId] ? getContractAddress(contractData[chainId].houseOfCoin) : null;

  const batchCheckRemainingMintingPowerArray = createContractsArray(
    "checkRemainingMintingPower",
    contractAddresses,
    { abi: houseOfCoinABI as Abi, address: houseOfCoinAddress as `0x${string}` },
    address as `0x${string}`,
  );

  const batchComputeUserHealthRatioArray = createContractsArray(
    "computeUserHealthRatio",
    contractAddresses,
    { abi: houseOfCoinABI as Abi, address: houseOfCoinAddress as `0x${string}` },
    address as `0x${string}`,
  );

  const { data: batchCheckRemainingMintingPower, isError } = useReadContracts({
    contracts: batchCheckRemainingMintingPowerArray,
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (batchCheckRemainingMintingPower) {
        console.log("Batch CheckRemainingMintingPower:", batchCheckRemainingMintingPower);
      }
      if (isError) {
        console.error("Error fetching checkRemainingMintingPower:", isError);
      }
    }
  }, [batchCheckRemainingMintingPower, isError]);

  const { data: batchComputeUserHealthRatio } = useReadContracts({
    contracts: batchComputeUserHealthRatioArray,
  });

  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [isRepayModalOpen, setIsRepayModalOpen] = useState(false);
  interface SelectedAsset {
    assetName: string;
    houseOfReserveContract: Address;
    assetContract: Address;
    houseOfCoinContract: Address;
    assetsAccountantContract: Address;
    backedTokenID?: bigint | number;
    formattedMintingPower?: number[];
    formattedUserHealthRatio?: number[];
    mintedAmount?: number; // Add this property
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
      formattedMintingPower,
      formattedUserHealthRatio,
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
    mintedAmount: number, // Add this parameter
  ) => {
    setSelectedAsset({
      assetName,
      houseOfReserveContract,
      assetContract,
      houseOfCoinContract,
      assetsAccountantContract,
      mintedAmount, // Add this to the selectedAsset state
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
    ? (batchMints as any[]).map((mint: any) => {
        const number = Number(mint) / 10 ** 18;
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(number);
      })
    : [0, 0, 0, 0, 0];
  const formattedMintingPower: any[] = batchCheckRemainingMintingPower
    ? batchCheckRemainingMintingPower.map(({ result }) => (Number(result) / 10 ** 18).toFixed(2))
    : [0, 0, 0, 0, 0, 0, 0];

  const formattedUserHealthRatio: any[] = batchComputeUserHealthRatio
    ? batchComputeUserHealthRatio.map(({ result }) => (Number(result) / 10 ** 18).toFixed(2))
    : [0, 0, 0, 0, 0];

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
                    <p className="text-sm text-gray-900">{deposit.mintingPower.toFixed(2)}</p>
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
                          deposit.minted, // Pass the minted amount
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
              mintedAmount={selectedAsset.mintedAmount ?? 0} // Add this prop
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
