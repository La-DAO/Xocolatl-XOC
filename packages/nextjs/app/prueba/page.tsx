"use client";

import React from "react";
import AssetsToSupply from "./components/AssetsToSupply";
import TokenBalanceComponent from "./components/Balance";

const Lending = () => {
  const myWalletAddress: `0x${string}` = "0x85F4BAEA0190095AadB5543D8311C17F22633CDC";
  const tokenAddress: `0x${string}` = "0x4200000000000000000000000000000000000006";

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl px-8 py-4 flex flex-col">
          <h1 className="text-amber-950 font-bold text-2xl">Assets to supply</h1>
          <p className="text-gray-500">Select the asset to deposit as collateral</p>
          <TokenBalanceComponent tokenAddress={tokenAddress} walletAddress={myWalletAddress} />
          <AssetsToSupply />
        </div>
      </div>
    </div>
  );
};

export default Lending;
