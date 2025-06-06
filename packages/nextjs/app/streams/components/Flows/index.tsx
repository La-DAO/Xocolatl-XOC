"use client";

import React, { useState } from "react";
import { Address } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { supertokenABI } from "~~/app/components/abis/Supertoken";

const Flows: React.FC = () => {
  const { address: accountAddress } = useAccount();
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [flowRate, setFlowRate] = useState<number>(0);
  const [timeUnit, setTimeUnit] = useState<string>("second");
  const { writeContract: createFlow } = useWriteContract();

  const superTokens = [
    { address: "0xedF89f2612a5B07FEF051e1a0444342B5410C405", symbol: "Super XOC" },
    // Add more supertokens as needed
  ];

  const timeUnits = [
    { value: "second", label: "per second" },
    { value: "minute", label: "per minute" },
    { value: "hour", label: "per hour" },
    { value: "day", label: "per day" },
    { value: "month", label: "per month" },
  ];

  const handleCreateFlow = async () => {
    if (!accountAddress || !recipientAddress || !selectedToken || !flowRate) {
      console.error("Missing required fields");
      return;
    }

    try {
      // Convert flow rate based on time unit
      const flowRateInWei = flowRate * 1e18; // Adjust based on token decimals

      const tx = await createFlow({
        abi: supertokenABI,
        address: selectedToken as Address,
        functionName: "createFlow",
        args: [recipientAddress as Address, flowRateInWei],
      });
      console.log("Flow creation transaction submitted:", tx);
    } catch (error) {
      console.error("Error creating flow:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg border p-6 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-primary">Create New Flow</h2>

      <div className="mb-4">
        <label htmlFor="recipientAddress" className="block text-lg font-medium text-gray-700 mb-1">
          Recipient Address:
        </label>
        <input
          type="text"
          id="recipientAddress"
          value={recipientAddress}
          onChange={e => setRecipientAddress(e.target.value)}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md dark:bg-base-100 px-2"
          placeholder="0x..."
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tokenSelect" className="block text-lg font-medium text-gray-700 mb-1">
          Select SuperToken:
        </label>
        <select
          id="tokenSelect"
          value={selectedToken}
          onChange={e => setSelectedToken(e.target.value)}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md dark:bg-base-100 px-2"
        >
          <option value="">Select a token</option>
          {superTokens.map(token => (
            <option key={token.address} value={token.address}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="flowRate" className="block text-lg font-medium text-gray-700 mb-1">
          Flow Rate:
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            id="flowRate"
            value={flowRate}
            onChange={e => setFlowRate(Number(e.target.value))}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md dark:bg-base-100 px-2"
          />
          <select
            value={timeUnit}
            onChange={e => setTimeUnit(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-40 sm:text-lg border-gray-300 rounded-md dark:bg-base-100 px-2"
          >
            {timeUnits.map(unit => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleCreateFlow}
      >
        Create Flow
      </button>
    </div>
  );
};

export default Flows;
