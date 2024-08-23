import React, { useEffect, useState } from "react";
import Image from "next/image";
import { XOCABI } from "../../app/components/abis/xocabis";
import Familia from "../../public/Familia.png";
import { xocPinABI } from "./abis/xocpin";
import { parseEther } from "viem";
import { useContractRead, useContractWrite } from "wagmi";
import { useAccount } from "wagmi";

const Cta = () => {
  const [showCard, setShowCard] = useState(false);
  const account = useAccount();

  const handleButtonClick = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  const { write: approve } = useContractWrite({
    address: "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf",
    abi: XOCABI,
    functionName: "approve",
    args: ["0x72fa57b14b83D165EACab4E2bB3B3B9D5B9C5A52", parseEther("100")],
  });

  const { write: mintNFT } = useContractWrite({
    address: "0x72fa57b14b83D165EACab4E2bB3B3B9D5B9C5A52",
    abi: xocPinABI,
    functionName: "mint",
    args: [account.address],
  });

  const { data: tokenID } = useContractRead({
    address: "0x72fa57b14b83D165EACab4E2bB3B3B9D5B9C5A52",
    abi: xocPinABI,
    functionName: "nextTokenId",
    watch: true,
  });

  const [latestTokenID, setLatestTokenID] = useState(null);

  useEffect(() => {
    if (tokenID) {
      const ID = tokenID.toString() - 1;
      setLatestTokenID(ID);
    }
  }, [tokenID]);

  return (
    <div className="flex items-center justify-center pt-24">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-base-300 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">Ready to join the movement?</h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Don&apos;t let your chance pass you by!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            onClick={handleButtonClick}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            Mint a membership NFT
          </button>
        </div>
      </div>
      {showCard && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 shadow-xl p-8 rounded-lg z-10 max-w-screen-lg w-full ">
          <div className="card-actions justify-end">
            <button className="btn btn-square btn-sm" onClick={handleCloseCard}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mx-auto flex justify-center">
            <Image src={Familia} alt="Familia" height={500} width={500} className="" />
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="stats stats-vertical lg:stats-horizontal shadow mb-5">
                <div className="stat">
                  <div className="stat-title">Price to Mint</div>
                  <div className="stat-value">100 $XOC</div>
                  <div className="stat-desc">First Come, First Served</div>
                </div>
                <div className="stat">
                  <div className="stat-title">NFTs Minted</div>
                  <div className="stat-value">{latestTokenID}</div>
                  <div className="stat-desc">So Far</div>
                </div>
              </div>
              <div className="card-actions justify-center">
                <button onClick={approve} className="btn btn-warning">
                  Approve 100 $XOC
                </button>
                <div className="card-actions justify-end">
                  <button onClick={mintNFT} className="btn btn-primary">
                    Mint NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cta;
