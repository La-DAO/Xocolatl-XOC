import React, { useState } from "react";
import { useTranslation } from "../../../context/LanguageContext";
import { X } from "lucide-react";
import { Address } from "viem";
import { parseEther } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { forwarderABI } from "~~/app/components/abis/ForwarderContract";

interface UpdateStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
  stream: {
    id: string;
    name: string;
    to: string;
    flowRate: number;
    rawData: any;
  } | null;
}

// Constants for time unit conversions (in seconds)
const TIME_UNITS = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  month: 2592000, // 30 days
} as const;

export default function UpdateStreamModal({ isOpen, onClose, stream }: UpdateStreamModalProps) {
  const { t } = useTranslation();
  const { address: accountAddress } = useAccount();
  const { writeContract, isPending } = useWriteContract();
  const [newFlowRate, setNewFlowRate] = useState<string>("");
  const [timeUnit, setTimeUnit] = useState<string>("month");

  // Initialize flow rate with current value when modal opens
  React.useEffect(() => {
    if (stream && isOpen) {
      setNewFlowRate(stream.flowRate.toString());
    }
  }, [stream, isOpen]);

  // Calculate flow rate per second from user input
  const calculateFlowRatePerSecond = (amount: number, unit: string): bigint => {
    const amountInWei = parseEther(amount.toString());
    const secondsInUnit = BigInt(TIME_UNITS[unit as keyof typeof TIME_UNITS]);

    // Calculate flow rate per second (amount / seconds)
    const flowRatePerSecond = (amountInWei * BigInt(1e18)) / secondsInUnit;

    // Convert back to wei (divide by 1e18)
    return flowRatePerSecond / BigInt(1e18);
  };

  const handleUpdateFlow = async () => {
    if (!stream || !accountAddress || !newFlowRate) return;

    try {
      const amount = Number.parseFloat(newFlowRate);
      if (isNaN(amount) || amount <= 0) {
        console.error("Invalid flow rate amount");
        return;
      }

      // Calculate the flow rate per second
      const flowRatePerSecond = calculateFlowRatePerSecond(amount, timeUnit);

      console.log("New flow rate per second:", flowRatePerSecond.toString());
      console.log("Original amount:", amount, timeUnit);

      const tx = await writeContract({
        abi: forwarderABI,
        address: "0xcfA132E353cB4E398080B9700609bb008eceB125",
        functionName: "updateFlow",
        args: [
          "0xedF89f2612a5B07FEF051e1a0444342B5410C405", // SuperXOC token
          accountAddress as Address, // sender
          stream.to as Address, // receiver
          flowRatePerSecond,
          "0x", // userData (zero)
        ],
      });

      console.log("Update stream transaction:", tx);
      onClose();
      setNewFlowRate("");
    } catch (error) {
      console.error("Error updating stream:", error);
    }
  };

  const timeUnits = [
    { value: "second", label: "/ second" },
    { value: "minute", label: "/ minute" },
    { value: "hour", label: "/ hour" },
    { value: "day", label: "/ day" },
    { value: "month", label: "/ month" },
  ];

  if (!isOpen || !stream) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-base-100 rounded-2xl shadow-lg relative w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("StreamsUpdateStream")}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t("StreamsUpdateStreamDescription")}</p>
        </div>

        <div className="px-6 pb-6 space-y-6">
          {/* Stream Info */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">{t("StreamsCurrentStreamInfo")}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t("StreamsStreamName")}:</span>
                <span className="text-gray-900 dark:text-white font-medium">{stream.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t("StreamsReceiver")}:</span>
                <span className="text-gray-900 dark:text-white font-mono text-xs">
                  {stream.to.slice(0, 6)}...{stream.to.slice(-4)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t("StreamsCurrentFlowRate")}:</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {stream.flowRate.toFixed(6)} XOC/month
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t("StreamsToken")}:</span>
                <span className="text-gray-900 dark:text-white font-medium">Super XOC</span>
              </div>
            </div>
          </div>

          {/* New Flow Rate Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-neutral dark:text-white text-sm font-medium">{t("StreamsNewFlowRate")}</label>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                value={newFlowRate}
                onChange={e => setNewFlowRate(e.target.value)}
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
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            <button className="btn btn-outline" onClick={onClose} disabled={isPending}>
              {t("StreamsCancel")}
            </button>
            <button
              className="btn btn-primary"
              onClick={handleUpdateFlow}
              disabled={!newFlowRate || Number(newFlowRate) <= 0 || isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  {t("StreamsUpdating")}
                </>
              ) : (
                t("StreamsUpdateStream")
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
