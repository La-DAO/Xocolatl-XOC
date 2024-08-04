import React, { useEffect } from "react";
import MintModal from "../modals/MintModal";
import RepayModal from "../modals/RepayModal";
import { Address } from "viem";
import { useChainId, useReadContract, useReadContracts } from "wagmi";
import { useAccount } from "wagmi";
import { houseOfCoinABI } from "~~/app/components/abis/houseofcoin";
import { assetsAccountantABI } from "~~/app/components/abis/xocabis";

const YourDeposits = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  const { data: batchDeposits } = useReadContract({
    address: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: [
      [address, address, address, address, address],
      [
        "11947586584348366889623359790458925956500907418440056359644468546038903560217",
        "70617728597754959671670591070646463325745680913454098292608313964127017937305",
        "75756732048555830918730488678816927792367711409511194949833821293392592707465",
        "7249884297576192763949224262904801338033525667336087702159801204853428754755",
        "50797098686137655044639401348940838345052794690448053205415697806813824230086",
      ],
    ],
  });

  const { data: batchMints } = useReadContract({
    address: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: [
      [address, address, address, address, address],
      [
        "70972479931534892086591623403426119776171689317875217451089907405265175126937",
        "78994011081541139165050204664365636342988447771321754025799214181511259384160",
        "174106140891814996385326390762160244679740722879464514599648389018378556633",
        "91100958396429013258976897630183527246789787972219101872512970882812448345098",
        "57342654198272734872890350495888597817619885438410899681268349930674170869034",
      ],
    ],
  });

  const houseOfCoinContract = {
    address: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
    abi: houseOfCoinABI,
  } as const;

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
        args: [address, "0x983A0eC44bf1BB11592a8bD5F91f05adE4F44D81"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0x102dda5f4621a08dafD327f29f9c815f851846dC"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0xdB9Dd25660240415d95144C6CE4f21f00Edf8168"],
      },
      {
        ...houseOfCoinContract,
        functionName: "checkRemainingMintingPower",
        args: [address, "0x102dda5f4621a08dafD327f29f9c815f851846dC"],
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
        args: [address, "0x983A0eC44bf1BB11592a8bD5F91f05adE4F44D81"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0xdB9Dd25660240415d95144C6CE4f21f00Edf8168"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0x28C7DF27e5bC7Cb004c8D4bb2C2D91f246D0A2C9"],
      },
      {
        ...houseOfCoinContract,
        functionName: "computeUserHealthRatio",
        args: [address, "0x102dda5f4621a08dafD327f29f9c815f851846dC"],
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
    console.log("backedTokenID:", backedTokenID);
  };

  const closeRepayModal = () => {
    setIsRepayModalOpen(false);
    setSelectedAsset(null);
  };

  const formattedBalances = batchDeposits
    ? (batchDeposits as any[]).map((balance: any) => Number(balance) / 10 ** 18)
    : [0, 0, 0, 0, 0];
  const formattedMints = batchMints
    ? (batchMints as any[]).map((mint: any) => Number(mint) / 10 ** 18)
    : [0, 0, 0, 0, 0];
  const formattedMintingPower = batchCheckRemainingMintingPower
    ? batchCheckRemainingMintingPower.map(({ result }) => Number(result) / 10 ** 18)
    : [0, 0, 0, 0, 0];

  const formattedUserHealthRatio = batchComputeUserHealthRatio
    ? batchComputeUserHealthRatio.map(({ result }) => Number(result) / 10 ** 18)
    : [0, 0, 0, 0, 0];
  console.log("BatchMintingPower:", batchCheckRemainingMintingPower);
  console.log("BBBatchUserHealthRatio:", batchComputeUserHealthRatio);
  console.log("formattedUserHealthRatio:", formattedUserHealthRatio);
  console.log("formattedMinitingPower:", formattedMintingPower);

  const deposits: {
    [key: number]: {
      symbol: string;
      amount: number;
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
    56: [
      {
        symbol: "WETH",
        amount: parseFloat(formattedBalances[0].toFixed(6)),
        minted: parseFloat(formattedMints[0].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[0].toFixed(6)),
        houseofReserveContract: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
        assetContract: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
        assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
        userHealthRatio: parseFloat(formattedUserHealthRatio[0].toFixed(6)),
        backedTokenID: "20522261273989995093535621539527639348056070782168896977856206653483982583625",
      },
      {
        symbol: "WBNB",
        amount: parseFloat(formattedBalances[1].toFixed(6)),
        minted: parseFloat(formattedMints[1].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[1].toFixed(6)),
        houseofReserveContract: "0x070ccE6887E70b75015F948b12601D1E759D2024",
        assetContract: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
        houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
        assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
        userHealthRatio: parseFloat(formattedUserHealthRatio[1].toFixed(6)),
        backedTokenID: "36240893346862244708187722980583805772746997097966348518842957091580463611081",
      },
    ],
    137: [
      {
        symbol: "WETH",
        amount: parseFloat(formattedBalances[0].toFixed(6)),
        minted: parseFloat(formattedMints[0].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[0].toFixed(6)),
        houseofReserveContract: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
        assetContract: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        houseOfCoinContract: "0x7ed1acd46de3a4e63f2d3b0f4fb5532e113a520b",
        assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
        userHealthRatio: parseFloat(formattedUserHealthRatio[0].toFixed(6)),
        backedTokenID: "70972479931534892086591623403426119776171689317875217451089907405265175126937",
      },
      {
        symbol: "wstETH",
        amount: parseFloat(formattedBalances[1].toFixed(6)),
        minted: parseFloat(formattedMints[1].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[1].toFixed(6)),
        houseofReserveContract: "0x28C7DF27e5bC7Cb004c8D4bb2C2D91f246D0A2C9",
        assetContract: "0x03b54a6e9a984069379fae1a4fc4dbae93b3bccd",
        houseOfCoinContract: "0x7ed1acd46de3a4e63f2d3b0f4fb5532e113a520b",
        assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
        userHealthRatio: parseFloat(formattedUserHealthRatio[1].toFixed(6)),
        backedTokenID: "78994011081541139165050204664365636342988447771321754025799214181511259384160",
      },
      {
        symbol: "MATICX",
        amount: parseFloat(formattedBalances[2].toFixed(6)),
        minted: parseFloat(formattedMints[2].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[2].toFixed(6)),
        houseofReserveContract: "0x102dda5f4621a08dafD327f29f9c815f851846dC",
        assetContract: "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6",
        houseOfCoinContract: "0x7ed1acd46de3a4e63f2d3b0f4fb5532e113a520b",
        assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
        userHealthRatio: parseFloat(formattedUserHealthRatio[2].toFixed(6)),
        backedTokenID: "174106140891814996385326390762160244679740722879464514599648389018378556633",
      },
      {
        symbol: "WMATIC",
        amount: parseFloat(formattedBalances[3].toFixed(6)),
        minted: parseFloat(formattedMints[3].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[3].toFixed(6)),
        houseofReserveContract: "0xdB9Dd25660240415d95144C6CE4f21f00Edf8168",
        assetContract: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        houseOfCoinContract: "0x7ed1acd46de3a4e63f2d3b0f4fb5532e113a520b",
        assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
        userHealthRatio: parseFloat(formattedUserHealthRatio[3].toFixed(6)),
        backedTokenID: "91100958396429013258976897630183527246789787972219101872512970882812448345098",
      },
      {
        symbol: "WBTC",
        amount: parseFloat(formattedBalances[4].toFixed(6)),
        minted: parseFloat(formattedMints[4].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[4].toFixed(6)),
        houseofReserveContract: "0x983A0eC44bf1BB11592a8bD5F91f05adE4F44D81",
        assetContract: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
        houseOfCoinContract: "0x7ed1acd46de3a4e63f2d3b0f4fb5532e113a520b",
        assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
        userHealthRatio: parseFloat(formattedUserHealthRatio[4].toFixed(6)),
        backedTokenID: "57342654198272734872890350495888597817619885438410899681268349930674170869034",
      },
    ],
    8453: [
      {
        symbol: "WETH",
        amount: parseFloat(formattedBalances[0].toFixed(6)),
        minted: parseFloat(formattedMints[0].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[0].toFixed(6)),
        houseofReserveContract: "0xfF69E183A863151B4152055974aa648b3165014D",
        assetContract: "0x4200000000000000000000000000000000000006",
        houseOfCoinContract: "0x02c531Cd9791dD3A31428B2987A82361D72F9b13",
        assetsAccountantContract: "0xB93EcD005B6053c6F8428645aAA879e7028408C7",
        userHealthRatio: parseFloat(formattedUserHealthRatio[0].toFixed(6)),
        backedTokenID: "8845051240560412557863425425586194836306989955683227883233854819693793989434",
      },
      {
        symbol: "cbETH",
        amount: parseFloat(formattedBalances[1].toFixed(6)),
        minted: parseFloat(formattedMints[1].toFixed(6)),
        mintingPower: parseFloat(formattedMintingPower[1].toFixed(6)),
        houseofReserveContract: "0x070ccE6887E70b75015F948b12601D1E759D2024",
        assetContract: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
        houseOfCoinContract: "0x02c531Cd9791dD3A31428B2987A82361D72F9b13",
        assetsAccountantContract: "0xB93EcD005B6053c6F8428645aAA879e7028408C7",
        userHealthRatio: parseFloat(formattedUserHealthRatio[1].toFixed(6)),
        backedTokenID: "8845051240560412557863425425586194836306989955683227883233854819693793989434",
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
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assets
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deposited Amount
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Already Minted
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Minting Power
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Health Factor
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {/* Iterate through deposits to create table rows */}
              {chainDeposits.map((deposit, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{deposit.symbol}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{deposit.amount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{deposit.minted}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{deposit.mintingPower}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{deposit.userHealthRatio}</div>
                  </td>
                  <td className="py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-sm text-accent dark:text-white btn bg-base-100 hover:bg-success hover:text-white"
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
                      Mint $XOC
                    </button>
                    <button
                      className="text-sm text-accent dark:text-white btn bg-base-100 ml-2 hover:bg-error hover:text-white"
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
                      Repay $XOC
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
        <p className="text-primary text-2xl">Nothing deposited yet - No open positions found</p>
      )}
    </div>
  );
};

export default YourDeposits;
