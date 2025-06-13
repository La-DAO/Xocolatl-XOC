import React from "react";
import Flows from "./components/Flows";
import TokenConverter from "./components/Supertokens";
import WalletStats from "./components/WalletStats";

export default function StreamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8 bg-white dark:bg-base-100 rounded-2xl p-6 shadow-lg">
          <WalletStats />
          <TokenConverter />
        </div>
        <div className="bg-white dark:bg-base-100 rounded-2xl p-6 pt-12 shadow-lg">
          <h2 className="text-6xl font-bold text-neutral dark:text-white mt-12 mb-6">Create a Money Stream</h2>
          <Flows />
        </div>
      </div>
    </div>
  );
}
