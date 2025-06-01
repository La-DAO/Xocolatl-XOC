"use client";

import React from "react";
import CDPInfo from "./components/CDPInfo";
import { useMintingStore } from "@/stores/minting-store";
import { NextPage } from "next";
import CDPStats from "~~/app/cdp/components/CDPStats";
import Deposits from "~~/app/cdp/components/Deposits";

// Dashboard component that shows the user's lending and borrowing data
const CDP: NextPage = () => {
  const totalMinted = useMintingStore(state => state.totalMinted);
  const setTotalMinted = useMintingStore(state => state.setTotalMinted);
  console.log("Total Minted:", totalMinted);
  console.log("Set Total Minted:", setTotalMinted);

  return (
    <div className="flex flex-col">
      <CDPStats />
      <div className="grid gap-4 w-4/5 m-auto mt-4">
        <Deposits />
      </div>
      <div>
        <CDPInfo />
      </div>
    </div>
  );
};

export default CDP;
