import React, { useEffect } from "react";
import MintModal from "../modals/MintModal";
import RepayModal from "../modals/RepayModal";
import { chainIds } from "@/app/constants/contracts";
import { Address } from "viem";
import { useChainId, useReadContract, useReadContracts } from "wagmi";
import { useAccount } from "wagmi";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { houseOfCoinABI } from "~~/app/components/abis/houseofcoin";
import { assetsAccountantABI } from "~~/app/components/abis/xocabis";
import { useTranslation } from "~~/app/context/LanguageContext";

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
    [chainIds.BNB]: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
    [chainIds.POLYGON]: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
    [chainIds.BASE]: "0xB93EcD005B6053c6F8428645aAA879e7028408C7",
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

  let houseOfCoinContract: { address: Address; abi: any } | undefined;

  if (chainId === chainIds.BNB) {
    houseOfCoinContract = {
      address: "0x9d29E6b3D75F5e676f91b69284e015C9CEa20533",
      abi: houseOfCoinABI,
    };
  } else if (chainId === chainIds.POLYGON) {
    houseOfCoinContract = {
      address: "0x9d29E6b3D75F5e676f91b69284e015C9CEa20533",
      abi: houseOfCoinABI,
    };
  } else if (chainId === chainIds.BASE) {
    houseOfCoinContract = {
      address: "0x02c531Cd9791dD3A31428B2987A82361D72F9b13",
      abi: houseOfCoinABI,
    };
  }

  const { data: batchCheckRemainingMintingPower, isError } = useReadContracts({
    contracts: [
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0x070ccE6887E70b75015F948b12601D1E759D2024"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0x2718644E0C38A6a1F82136FC31dcA00DFCdF92a3"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0x76CAc0bC384a49485627D2235fE132e3038b45BB"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0xF56293025437Db5C0024a37dfcEc792125d56A48"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0xfF69E183A863151B4152055974aa648b3165014D"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0x5c4a154690AE52844F151bcF3aA44885db3c8A58"],
      },
    ],
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
    contracts: [
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0x070ccE6887E70b75015F948b12601D1E759D2024"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0x2718644E0C38A6a1F82136FC31dcA00DFCdF92a3"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0x76CAc0bC384a49485627D2235fE132e3038b45BB"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0xF56293025437Db5C0024a37dfcEc792125d56A48"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0xfF69E183A863151B4152055974aa648b3165014D"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0x5c4a154690AE52844F151bcF3aA44885db3c8A58"],
      },
    ],
  });

  useEffect(() => {
    if (batchComputeUserHealthRatio) {
      console.log("BatchComputeUserHealthRatio:", batchComputeUserHealthRatio);
    }
  }, [batchComputeUserHealthRatio]);

  const [isMintModalOpen, setIsMintModalOpen] = React.useState(false);
  const [isRepayModalOpen, setIsRepayModalOpen] = React.useState(false);
  interface SelectedAsset {
    assetName: string;
    houseOfReserveContract: Address;
    assetContract: Address;
    houseOfCoinContract: Address;
    assetsAccountantContract: Address;
    backedTokenID?: bigint | number;
  }

  const [selectedAsset, setSelectedAsset] = React.useState<SelectedAsset | null>(null);
  const [backedTokenID, setBackedTokenID] = React.useState<bigint | null>(null);

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

  const deposits: {
    [key: number]: {
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
    }[];
  } = {
    [chainIds.BNB]: [
      {
        symbol: "WETH",
        amount: parseFloat(formattedBalances[0].toFixed(6)),
        minted: parseFloat(formattedMints[0].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[0]),
        houseofReserveContract: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
        assetContract: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
        assetsAccountantContract: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
        userHealthRatio: parseFloat(formattedUserHealthRatio[0]),
        backedTokenID: "20522261273989995093535621539527639348056070782168896977856206653483982583625",
      },
      {
        symbol: "WBNB",
        amount: parseFloat(formattedBalances[1].toFixed(6)),
        minted: parseFloat(formattedMints[1].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[1]),
        houseofReserveContract: "0x070ccE6887E70b75015F948b12601D1E759D2024",
        assetContract: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
        houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
        assetsAccountantContract: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
        userHealthRatio: parseFloat(formattedUserHealthRatio[1]),
        backedTokenID: "36240893346862244708187722980583805772746997097966348518842957091580463611081",
      },
    ],
    [chainIds.POLYGON]: [
      {
        symbol: "WETH",
        amount: parseFloat(formattedBalances[0].toFixed(6)),
        minted: parseFloat(formattedMints[0].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[2]),
        houseofReserveContract: "0x2718644E0C38A6a1F82136FC31dcA00DFCdF92a3",
        assetContract: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        houseOfCoinContract: "0x9d29E6b3D75F5e676f91b69284e015C9CEa20533",
        assetsAccountantContract: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
        userHealthRatio: parseFloat(formattedUserHealthRatio[2]),
        backedTokenID: "80640369098075461197954251758880905983781036616487658892797544182481328362385",
      },
      {
        symbol: "MATICX",
        amount: parseFloat(formattedBalances[1]),
        minted: parseFloat(formattedMints[1]),
        mintingPower: parseFloat(formattedMintingPower[3]),
        houseofReserveContract: "0x76CAc0bC384a49485627D2235fE132e3038b45BB",
        assetContract: "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6",
        houseOfCoinContract: "0x9d29E6b3D75F5e676f91b69284e015C9CEa20533",
        assetsAccountantContract: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
        userHealthRatio: parseFloat(formattedUserHealthRatio[3]),
        backedTokenID: "17135799413344306437655147654156582701703759838473908703722998121562726910745",
      },
      {
        symbol: "WMATIC",
        amount: parseFloat(formattedBalances[2]),
        minted: parseFloat(formattedMints[2]),
        mintingPower: parseFloat(formattedMintingPower[4]),
        houseofReserveContract: "0xF56293025437Db5C0024a37dfcEc792125d56A48",
        assetContract: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        houseOfCoinContract: "0x9d29E6b3D75F5e676f91b69284e015C9CEa20533",
        assetsAccountantContract: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
        userHealthRatio: parseFloat(formattedUserHealthRatio[4]),
        backedTokenID: "27778163481220956171503989467144576287986246817586635666554224569167019219186",
      },
    ],
    [chainIds.BASE]: [
      {
        symbol: "WETH",
        amount: parseFloat(formattedBalances[0].toFixed(6)),
        minted: parseFloat(formattedMints[0].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[5]),
        houseofReserveContract: "0xfF69E183A863151B4152055974aa648b3165014D",
        assetContract: "0x4200000000000000000000000000000000000006",
        houseOfCoinContract: "0x02c531Cd9791dD3A31428B2987A82361D72F9b13",
        assetsAccountantContract: "0xB93EcD005B6053c6F8428645aAA879e7028408C7",
        userHealthRatio: parseFloat(formattedUserHealthRatio[5]),
        backedTokenID: "8845051240560412557863425425586194836306989955683227883233854819693793989434",
      },
      {
        symbol: "cbETH",
        amount: parseFloat(formattedBalances[1].toFixed(6)),
        minted: parseFloat(formattedMints[1].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[6]),
        houseofReserveContract: "0x5c4a154690AE52844F151bcF3aA44885db3c8A58",
        assetContract: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
        houseOfCoinContract: "0x02c531Cd9791dD3A31428B2987A82361D72F9b13",
        assetsAccountantContract: "0xB93EcD005B6053c6F8428645aAA879e7028408C7",
        userHealthRatio: parseFloat(formattedUserHealthRatio[6]),
        backedTokenID: "113840104691995121390901058070296301361752511786326304414032534053768202616249",
      },
    ],
  };

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
                    className="tooltip tooltip-primary"
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
                    className="tooltip tooltip-primary"
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
                    <p className="text-sm text-gray-900">{deposit.amount}</p>
                  </td>
                  <td className="px-2 py-4 hidden sm:table-cell">
                    <p className="text-sm text-gray-900">{deposit.minted}</p>
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
