"use client";

import React, { useState } from "react";
import borrowsDataRaw from "@/data/assetsToBorrow.json";
import assetsDataRaw from "@/data/assetsToSupply.json";
import yourBorrowDataRaw from "@/data/yourBorrows.json";
import yourSupplyDataRaw from "@/data/yourSupplies.json";
import { Asset } from "@/types/assets/assets";
import { NextPage } from "next";
import Borrows from "~~/app/cdp/components/Borrows";
import CDPStats from "~~/app/cdp/components/CDPStats";
import Deposits from "~~/app/cdp/components/Deposits";

// Dashboard component that shows the user's lending and borrowing data
const CDP: NextPage = () => {
  // State to manage supply and borrow balances
  const [supplyBalance, setSupplyBalance] = useState(0);
  const [borrowBalance, setBorrowBalance] = useState(0);

  // Process raw supply data into typed Asset objects
  const assetsData: Asset[] = assetsDataRaw.map((asset: any) => ({
    ...asset,
    walletBalance: Number(asset.walletBalance),
    apy: Number(asset.apy),
  }));

  // Process raw supply data for the user's assets
  const yourSupplyData: Asset[] = yourSupplyDataRaw.map((asset: any) => ({
    ...asset,
    amount: Number(asset.walletBalance),
    apy: Number(asset.apy),
  }));

  // Process raw borrow data into typed Asset objects
  const borrowsData: Asset[] = borrowsDataRaw.map((asset: any) => ({
    ...asset,
    amount: Number(asset.amount),
    apy: Number(asset.apy),
  }));

  // Process raw borrow data for the user's assets
  const yourBorrowData: Asset[] = yourBorrowDataRaw.map((asset: any) => ({
    ...asset,
    amount: Number(asset.amount),
    apy: Number(asset.apy),
  }));

  // Calculate net balance as the difference between supply and borrow balances
  const netBalance = supplyBalance - borrowBalance;

  return (
    <div className="flex flex-col">
      <CDPStats balance={netBalance} />
      <div className="grid grid-cols-2 gap-4 w-4/5 m-auto mt-4">
        <Deposits assetsData={assetsData} yourSupplyData={yourSupplyData} setBalance={setSupplyBalance} />
        <Borrows assetsData={borrowsData} yourBorrowData={yourBorrowData} setBalance={setBorrowBalance} />
      </div>
    </div>
  );
};

export default CDP;
