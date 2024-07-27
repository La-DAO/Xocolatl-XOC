import React from "react";
import MintModal from "../modals/MintModal";
import { Address } from "viem";
// import useReadDeposit from "@/hooks/useReadDeposits";
// import useAccountAddress from "@/hooks/useAccount";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { houseOfCoinABI } from "~~/app/components/abis/houseofcoin";
import { assetsAccountantABI } from "~~/app/components/abis/xocabis";

const YourDeposits = () => {
  const { address } = useAccount();

  const { data: batchDeposits } = useReadContract({
    address: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: [
      [address, address, address, address, address],
      [
        "11947586584348366889623359790458925956500907418440056359644468546038903560217",
        "7249884297576192763949224262904801338033525667336087702159801204853428754755",
        "75756732048555830918730488678816927792367711409511194949833821293392592707465",
        "70617728597754959671670591070646463325745680913454098292608313964127017937305",
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
        "91100958396429013258976897630183527246789787972219101872512970882812448345098",
        "174106140891814996385326390762160244679740722879464514599648389018378556633",
        "78994011081541139165050204664365636342988447771321754025799214181511259384160",
        "57342654198272734872890350495888597817619885438410899681268349930674170869034",
      ],
    ],
  });

  const { data: checkRemainingMintingPower } = useReadContract({
    address: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
    abi: houseOfCoinABI,
    functionName: "checkRemainingMintingPower",
    args: [address, "0xdB9Dd25660240415d95144C6CE4f21f00Edf8168"],
  });

  const { data: computeUserHealthRatio } = useReadContract({
    address: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
    abi: houseOfCoinABI,
    functionName: "computeUserHealthRatio",
    args: [address, "0xdB9Dd25660240415d95144C6CE4f21f00Edf8168"],
  });

  const [isMintModalOpen, setIsMintModalOpen] = React.useState(false);
  interface SelectedAsset {
    assetName: string;
    houseOfReserveContract: Address;
    assetContract: Address;
  }

  const [selectedAsset, setSelectedAsset] = React.useState<SelectedAsset | null>(null);

  const openMintModal = (assetName: string, houseOfReserveContract: Address, assetContract: Address) => {
    setSelectedAsset({ assetName, houseOfReserveContract, assetContract });
    setIsMintModalOpen(true);
  };

  const closeMintModal = () => {
    setIsMintModalOpen(false);
    setSelectedAsset(null);
  };

  console.log("MintingPower:", checkRemainingMintingPower);
  console.log("Healthratio:", computeUserHealthRatio);
  const formattedBalances = batchDeposits
    ? (batchDeposits as any[]).map((balance: any) => Number(balance) / 10 ** 18)
    : [0, 0, 0, 0, 0];
  const formattedMints = batchMints
    ? (batchMints as any[]).map((mint: any) => Number(mint) / 10 ** 18)
    : [0, 0, 0, 0, 0];
  const formattedMintingPower = checkRemainingMintingPower
    ? (Number(checkRemainingMintingPower) / 10 ** 18).toString()
    : "0";
  console.log("formattedMinitingPower:", formattedMintingPower);
  const deposits: Deposit[] = [
    {
      symbol: "WETH",
      amount: parseFloat(formattedBalances[0].toFixed(6)),
      minted: parseFloat(formattedMints[0].toFixed(6)),
      mintingPower: parseFloat(formattedMintingPower),
      houseofReserveContract: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
      assetContract: "0x11947586584348366889623359790458925956500907418440056359644468546038903560217",
      houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
      assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
      usageAsCollateralEnabled: true,
    },
    {
      symbol: "WMATIC",
      amount: parseFloat(formattedBalances[1].toFixed(6)),
      minted: parseFloat(formattedMints[1].toFixed(6)),
      mintingPower: parseFloat(formattedMintingPower),
      houseofReserveContract: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
      assetContract: "0x7249884297576192763949224262904801338033525667336087702159801204853428754755",
      houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
      assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
      usageAsCollateralEnabled: false,
    },
    {
      symbol: "MATICX",
      amount: parseFloat(formattedBalances[2].toFixed(6)),
      minted: parseFloat(formattedMints[2].toFixed(6)),
      mintingPower: parseFloat(formattedMintingPower),
      houseofReserveContract: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
      assetContract: "0x75756732048555830918730488678816927792367711409511194949833821293392592707465",
      houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
      assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
      usageAsCollateralEnabled: true,
    },
    {
      symbol: "wstETH",
      amount: parseFloat(formattedBalances[3].toFixed(6)),
      minted: parseFloat(formattedMints[3].toFixed(6)),
      mintingPower: parseFloat(formattedMintingPower),
      houseofReserveContract: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
      assetContract: "0x70617728597754959671670591070646463325745680913454098292608313964127017937305",
      houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
      assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
      usageAsCollateralEnabled: false,
    },
    {
      symbol: "WBTC",
      amount: parseFloat(formattedBalances[4].toFixed(6)),
      minted: parseFloat(formattedMints[4].toFixed(6)),
      mintingPower: parseFloat(formattedMintingPower),
      houseofReserveContract: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
      assetContract: "0x50797098686137655044639401348940838345052794690448053205415697806813824230086",
      houseOfCoinContract: "0x518Ad4acAdb3FdE4Ab990a79A0583FA8c4E35FcA",
      assetsAccountantContract: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
      usageAsCollateralEnabled: true,
    },
  ];

  interface Deposit {
    symbol: string;
    amount: number;
    minted: number;
    mintingPower: number;
    houseofReserveContract: string;
    assetContract: string;
    houseOfCoinContract: string;
    assetsAccountantContract: string;
    usageAsCollateralEnabled: boolean;
  }

  const handleOpenRepayModal = (assetName: string) => {
    // Logic to handle opening the repay modal
    console.log(`Opening repay modal for ${assetName}`);
  };

  return (
    <div className="rounded-md">
      {/* Section for displaying the user's deposits */}
      {deposits.length > 0 ? (
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
              {deposits.map((deposit, index) => (
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
                    <div className="text-sm text-gray-900">
                      {deposit.usageAsCollateralEnabled ? (
                        <span className="text-xl text-success font-bold">&#10003;</span>
                      ) : (
                        <span className="text-xl text-error font-bold">&#10007;</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-sm text-accent dark:text-white btn bg-base-100 hover:bg-success hover:text-white"
                      onClick={() =>
                        openMintModal(
                          deposit.symbol,
                          deposit.houseofReserveContract as Address,
                          deposit.assetContract as Address,
                        )
                      }
                    >
                      Mint $XOC
                    </button>
                    <button
                      className="text-sm text-accent dark:text-white btn bg-base-100 ml-2 hover:bg-error hover:text-white"
                      onClick={() => handleOpenRepayModal(deposit.symbol)}
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
