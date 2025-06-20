"use client";

import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { forwarderABI } from "../../../app/components/abis/ForwarderContract";
import { ChevronDown, Info, Search, X } from "lucide-react";
import type { Address } from "viem";
import { parseEther } from "viem";
import { useAccount, useWriteContract } from "wagmi";

// Constants for time unit conversions (in seconds)
const TIME_UNITS = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  month: 2592000, // 30 days
} as const;

interface CreateStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateStreamModal: React.FC<CreateStreamModalProps> = ({ isOpen, onClose }) => {
  const { address: accountAddress } = useAccount();
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [flowRate, setFlowRate] = useState<string>("0.0");
  const [timeUnit, setTimeUnit] = useState<string>("month");
  const [enableScheduling, setEnableScheduling] = useState<boolean>(false);
  const { writeContract } = useWriteContract();

  const handleClose = useCallback(() => {
    // Reset form state
    setRecipientAddress("");
    setSelectedToken("");
    setFlowRate("0.0");
    setTimeUnit("month");
    setEnableScheduling(false);
    onClose();
  }, [onClose]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

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

  // Calculate flow rate per second from user input
  const calculateFlowRatePerSecond = (amount: number, unit: string): bigint => {
    const amountInWei = parseEther(amount.toString()); // Convert to wei using parseEther
    const secondsInUnit = BigInt(TIME_UNITS[unit as keyof typeof TIME_UNITS]);

    // Calculate flow rate per second (amount / seconds)
    // We multiply by 1e18 first to maintain precision during division
    const flowRatePerSecond = (amountInWei * BigInt(1e18)) / secondsInUnit;

    // Convert back to wei (divide by 1e18)
    return flowRatePerSecond / BigInt(1e18);
  };

  const handleUpdateFlow = async () => {
    if (!accountAddress || !recipientAddress || !selectedToken || !flowRate) {
      console.error("Missing required fields");
      return;
    }

    try {
      const amount = Number.parseFloat(flowRate);
      if (isNaN(amount) || amount <= 0) {
        console.error("Invalid flow rate amount");
        return;
      }

      // Calculate the flow rate per second
      const flowRatePerSecond = calculateFlowRatePerSecond(amount, timeUnit);

      console.log("Flow rate per second:", flowRatePerSecond.toString());
      console.log("Original amount:", amount, timeUnit);

      const tx = await writeContract({
        abi: forwarderABI,
        address: "0xcfA132E353cB4E398080B9700609bb008eceB125",
        functionName: "updateFlow",
        args: [
          selectedToken as Address,
          accountAddress as Address,
          recipientAddress as Address,
          flowRatePerSecond,
          "0x",
        ],
      });
      console.log("Flow creation transaction submitted:", tx);

      // Close modal after successful transaction
      onClose();
    } catch (error) {
      console.error("Error creating flow:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-base-100 rounded-2xl shadow-lg relative w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Create Money Stream</h2>
          <p className="text-gray-600 dark:text-gray-300">Set up continuous salary payments</p>
        </div>

        <div className="px-6 pb-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-neutral dark:text-white text-sm font-medium">Receiver Wallet Address</label>
                <Info className="h-4 w-4 text-gray-500" />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <input
                  type="text"
                  value={recipientAddress}
                  onChange={e => setRecipientAddress(e.target.value)}
                  placeholder="Public Address, ENS or Lens"
                  className="w-full bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 pl-10 pr-10 border-none focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-neutral dark:text-white text-sm font-medium">Super Token</label>
                <Info className="h-4 w-4 text-gray-500" />
              </div>
              <div className="relative">
                <select
                  value={selectedToken}
                  onChange={e => setSelectedToken(e.target.value)}
                  className="w-full appearance-none bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 px-4 border-none focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                >
                  <option value="">Select a token</option>
                  {superTokens.map(token => (
                    <option key={token.address} value={token.address}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-neutral dark:text-white text-sm font-medium">Flow Rate</label>
              <Info className="h-4 w-4 text-gray-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                value={flowRate}
                onChange={e => setFlowRate(e.target.value)}
                placeholder="0.0"
                className="bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 px-4 border-none focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
              />
              <div className="relative">
                <select
                  value={timeUnit}
                  onChange={e => setTimeUnit(e.target.value)}
                  className="w-full appearance-none bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 px-4 border-none focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                >
                  {timeUnits.map(unit => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={enableScheduling}
                onChange={e => setEnableScheduling(e.target.checked)}
                className="toggle toggle-primary toggle-sm"
              />
              <span className="text-neutral dark:text-white text-sm font-medium">Stream Scheduling</span>
            </div>
            <Info className="h-4 w-4 text-gray-500" />
          </div>

          <div className="space-y-3 pt-2">
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

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStreamModal;
