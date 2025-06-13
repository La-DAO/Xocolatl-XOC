"use client";

import type React from "react";
import { useState } from "react";
import { forwarderABI } from "../../../components/abis/ForwarderContract";
import { ChevronDown, Info, Search } from "lucide-react";
import type { Address } from "viem";
import { useAccount, useWriteContract } from "wagmi";

const Flows: React.FC = () => {
  const { address: accountAddress } = useAccount();
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [flowRate, setFlowRate] = useState<string>("0.0");
  const [timeUnit, setTimeUnit] = useState<string>("month");
  const [enableScheduling, setEnableScheduling] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("stream");
  const { writeContract } = useWriteContract();

  const superTokens = [
    { address: "0xedF89f2612a5B07FEF051e1a0444342B5410C405", symbol: "Super XOC" },
    // Add more supertokens as needed
  ];

  const timeUnits = [
    { value: "second", label: "/ second" },
    { value: "minute", label: "/ minute" },
    { value: "hour", label: "/ hour" },
    { value: "day", label: "/ day" },
    { value: "month", label: "/ month" },
  ];

  const handleUpdateFlow = async () => {
    if (!accountAddress || !recipientAddress || !selectedToken || !flowRate) {
      console.error("Missing required fields");
      return;
    }

    try {
      // Convert flow rate to uint96 (should be safe for small numbers)
      const flowRateUint96 = BigInt(Number.parseFloat(flowRate));
      const tx = await writeContract({
        abi: forwarderABI,
        address: "0xcfA132E353cB4E398080B9700609bb008eceB125",
        functionName: "createFlow",
        args: [selectedToken as Address, accountAddress as Address, recipientAddress as Address, flowRateUint96, "0x"],
      });
      console.log("Flow update transaction submitted:", tx);
    } catch (error) {
      console.error("Error updating flow:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-base-100 rounded-2xl p-6 max-w-md mx-auto overflow-hidden shadow-lg">
      {/* Blue accent in top right corner */}
      <div className="absolute top-0 right-0 w-16 h-8 bg-blue-500 dark:bg-blue-600 rounded-bl-2xl"></div>

      {/* Tabs */}
      <div className="flex mb-6 gap-4">
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
            activeTab === "stream"
              ? "bg-secondary dark:bg-secondary text-neutral dark:text-gray-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("stream")}
        >
          Stream
        </button>
      </div>

      {activeTab === "stream" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-neutral text-base font-medium">Receiver Wallet Address</label>
              <Info className="h-5 w-5 text-gray-500" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <input
                type="text"
                value={recipientAddress}
                onChange={e => setRecipientAddress(e.target.value)}
                placeholder="Public Address, ENS or Lens"
                className="w-full bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 pl-10 pr-10 border-none focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-neutral text-base font-medium">Super Token</label>
              <Info className="h-5 w-5 text-gray-500" />
            </div>
            <div className="relative">
              <select
                value={selectedToken}
                onChange={e => setSelectedToken(e.target.value)}
                className="w-full appearance-none bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 px-4 border-none focus:ring-1 focus:ring-green-500 focus:outline-none"
              >
                <option value="">Select a token</option>
                {superTokens.map(token => (
                  <option key={token.address} value={token.address}>
                    {token.symbol}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-neutral text-base font-medium">Flow Rate</label>
              <Info className="h-5 w-5 text-gray-500" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={flowRate}
                onChange={e => setFlowRate(e.target.value)}
                placeholder="0.0"
                className="bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 px-4 border-none focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
              <div className="relative">
                <select
                  value={timeUnit}
                  onChange={e => setTimeUnit(e.target.value)}
                  className="w-full appearance-none bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 px-4 border-none focus:ring-1 focus:ring-green-500 focus:outline-none"
                >
                  {timeUnits.map(unit => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={enableScheduling}
                onChange={e => setEnableScheduling(e.target.checked)}
                className="toggle toggle-primary"
              />
              <span className="text-neutral text-base font-medium">Stream Scheduling</span>
            </div>
            <Info className="h-5 w-5 text-gray-500" />
          </div>

          <button
            onClick={handleUpdateFlow}
            className={`w-full py-4 rounded-xl font-medium text-white transition-colors ${
              !recipientAddress || !selectedToken || !flowRate
                ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
            }`}
            disabled={!recipientAddress || !selectedToken || !flowRate}
          >
            Send Stream
          </button>
        </div>
      )}

      {activeTab === "transfer" && <div>{/* Transfer tab content would go here */}</div>}
    </div>
  );
};

export default Flows;
