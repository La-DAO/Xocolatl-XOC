"use client";

import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { forwarderABI } from "../../../components/abis/ForwarderContract";
import { ChevronDown, Info, Search, X } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import type { Address } from "viem";
import { isAddress, parseEther } from "viem";
import { useAccount, useEnsAddress, useEnsName, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useUpdateFlowInfo } from "~~/stores/streaming-store";

// Constants for time unit conversions (in seconds)
const TIME_UNITS = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  month: 2592000, // 30 days
} as const;

// ENS regex pattern - supports all TLDs, not just .eth
const ensRegex = /^[a-zA-Z0-9_-]+\.[a-zA-Z0-9-]+$/;

// Utility function to check if input is ENS
const isENS = (address = "") => {
  const result = ensRegex.test(address);
  console.log("isENS check:", address, "result:", result);
  return result;
};

interface CreateStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateStreamModal: React.FC<CreateStreamModalProps> = ({ isOpen, onClose }) => {
  const { address: accountAddress } = useAccount();
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [resolvedAddress, setResolvedAddress] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [flowRate, setFlowRate] = useState<string>("0.0");
  const [timeUnit, setTimeUnit] = useState<string>("month");
  const [shouldResolveENS, setShouldResolveENS] = useState<boolean>(false);
  const {
    writeContract,
    data: transactionHash,
    isPending: isTransactionPending,
    isError: isTransactionError,
  } = useWriteContract();

  // Store integration
  const { refetchFlowInfo } = useUpdateFlowInfo();

  // Transaction state
  const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);

  // Wait for transaction receipt
  const { isSuccess: isTransactionReceiptSuccess } = useWaitForTransactionReceipt({
    hash: transactionHash,
  });

  // Handle transaction success
  useEffect(() => {
    if (isTransactionReceiptSuccess) {
      setIsTransactionSuccess(true);
      // Refetch flow info to update the store
      refetchFlowInfo();
      console.log("Transaction successful! Flow info updated.");
    }
  }, [isTransactionReceiptSuccess, refetchFlowInfo]);

  // Debounce the input for ENS resolution
  const [debouncedRecipientAddress] = useDebounceValue(recipientAddress, 500);

  // ENS resolution for Base chain
  const {
    data: ensAddress,
    isLoading: isEnsAddressLoading,
    isError: isEnsAddressError,
  } = useEnsAddress({
    name: debouncedRecipientAddress,
    // Remove coinType for now to test basic ENS resolution
    chainId: 1, // ENS resolution happens on Ethereum mainnet
    query: {
      gcTime: 30_000,
      enabled: shouldResolveENS && isENS(debouncedRecipientAddress) && debouncedRecipientAddress.length > 0,
    },
  });

  // Debug ENS resolution
  useEffect(() => {
    console.log("ENS Resolution Debug:", {
      shouldResolveENS,
      debouncedRecipientAddress,
      isENS: isENS(debouncedRecipientAddress),
      ensAddress,
      isEnsAddressLoading,
      isEnsAddressError,
      enabled: shouldResolveENS && isENS(debouncedRecipientAddress) && debouncedRecipientAddress.length > 0,
    });
  }, [shouldResolveENS, debouncedRecipientAddress, ensAddress, isEnsAddressLoading, isEnsAddressError]);

  // Handle ENS resolution
  useEffect(() => {
    console.log("ENS Resolution Effect:", {
      ensAddress,
      recipientAddress,
      isAddress: isAddress(recipientAddress),
    });

    if (ensAddress) {
      console.log("Setting resolved address:", ensAddress);
      setResolvedAddress(ensAddress);
      setShouldResolveENS(false); // Reset the trigger
    } else if (isAddress(recipientAddress)) {
      console.log("Setting resolved address (direct):", recipientAddress);
      setResolvedAddress(recipientAddress);
    } else {
      console.log("Clearing resolved address");
      setResolvedAddress("");
    }
  }, [ensAddress, recipientAddress]);

  // ENS name resolution (reverse lookup)
  const {
    data: ensName,
    isLoading: isEnsNameLoading,
    isError: isEnsNameError,
  } = useEnsName({
    address: debouncedRecipientAddress as Address,
    chainId: 1,
    query: {
      gcTime: 30_000,
      enabled: isAddress(debouncedRecipientAddress),
    },
  });

  // Handle input changes with real-time validation
  const handleRecipientAddressChange = (value: string) => {
    setRecipientAddress(value);

    // Clear resolved address if input is empty
    if (!value.trim()) {
      setResolvedAddress("");
      setShouldResolveENS(false);
      return;
    }

    // If it's a valid Ethereum address, use it directly
    if (isAddress(value)) {
      setResolvedAddress(value);
      setShouldResolveENS(false);
      return;
    }

    // If it's an ENS name, don't auto-resolve - wait for Enter key
    if (isENS(value)) {
      setResolvedAddress(""); // Clear previous resolution
      return;
    }

    // Invalid input
    setResolvedAddress("");
    setShouldResolveENS(false);
  };

  // Handle Enter key press for ENS resolution
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed:", e.key, "Current address:", recipientAddress, "Is ENS:", isENS(recipientAddress));
    if (e.key === "Enter" && isENS(recipientAddress)) {
      e.preventDefault();
      console.log("Triggering ENS resolution for:", recipientAddress);
      setShouldResolveENS(true);
    }
  };

  const handleClose = useCallback(() => {
    // Reset form state
    setRecipientAddress("");
    setResolvedAddress("");
    setSelectedToken("");
    setFlowRate("0.0");
    setTimeUnit("month");
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
    if (!accountAddress || !resolvedAddress || !selectedToken || !flowRate) {
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
        functionName: "createFlow",
        args: [
          selectedToken as Address,
          accountAddress as Address,
          resolvedAddress as Address,
          flowRatePerSecond,
          "0x",
        ],
      });

      console.log("Flow creation transaction submitted:", tx);
      // Transaction hash is now available from the useWriteContract hook
      // setTransactionHash(tx);

      // Don't close modal automatically - let user close it manually
      // onClose();
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

        {/* Transaction Status */}
        {isTransactionPending && (
          <div className="px-6 pb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-blue-800 dark:text-blue-200">Transaction pending...</span>
              </div>
            </div>
          </div>
        )}

        {isTransactionSuccess && (
          <div className="px-6 pb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <span className="text-green-800 dark:text-green-200">✓ Transaction successful! Flow info updated.</span>
              </div>
            </div>
          </div>
        )}

        {isTransactionError && (
          <div className="px-6 pb-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <span className="text-red-800 dark:text-red-200">✗ Transaction failed. Please try again.</span>
              </div>
            </div>
          </div>
        )}

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
                  onChange={e => handleRecipientAddressChange(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Public Address or ENS (Press Enter for ENS)"
                  className={`w-full bg-gray-50 dark:bg-secondary text-gray-900 dark:text-white rounded-lg py-3 pl-10 pr-10 border-none focus:ring-2 focus:ring-green-500 focus:outline-none text-sm ${
                    isEnsAddressLoading ? "animate-pulse" : ""
                  } ${resolvedAddress && !isEnsAddressLoading ? "ring-2 ring-green-500" : ""} ${
                    isEnsAddressError ? "ring-2 ring-red-500" : ""
                  }`}
                />
              </div>
              {/* Show loading state or validation feedback */}
              {isEnsAddressLoading && (
                <div className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  Fetching ENS address...
                </div>
              )}
              {isEnsNameLoading && (
                <div className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  Looking up ENS name...
                </div>
              )}
              {isENS(recipientAddress) && !shouldResolveENS && !resolvedAddress && (
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Press Enter to resolve ENS name
                  <button
                    onClick={() => {
                      console.log("Manual trigger for:", recipientAddress);
                      setShouldResolveENS(true);
                    }}
                    className="ml-2 px-2 py-1 bg-blue-500 text-white rounded text-xs"
                  >
                    Test Resolve
                  </button>
                </div>
              )}
              {resolvedAddress && !isEnsAddressLoading && isENS(recipientAddress) && (
                <div className="text-xs text-green-600 dark:text-green-400">✓ ENS resolved successfully</div>
              )}
              {ensName && !isEnsNameLoading && isAddress(recipientAddress) && (
                <div className="text-xs text-green-600 dark:text-green-400">✓ ENS name found</div>
              )}
              {resolvedAddress && !isEnsAddressLoading && (
                <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <strong>Resolved Address:</strong> {resolvedAddress}
                </div>
              )}
              {ensName && !isEnsNameLoading && isAddress(recipientAddress) && (
                <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <strong>ENS Name:</strong> {ensName}
                </div>
              )}
              {isEnsAddressError && isENS(recipientAddress) && (
                <div className="text-xs text-red-600 dark:text-red-400">✗ Invalid ENS name</div>
              )}
              {isEnsNameError && isAddress(recipientAddress) && (
                <div className="text-xs text-orange-600 dark:text-orange-400">No ENS name found for this address</div>
              )}
              {recipientAddress && !isAddress(recipientAddress) && !isENS(recipientAddress) && (
                <div className="text-xs text-orange-600 dark:text-orange-400">
                  ⚠ Enter a valid Ethereum address or ENS name
                </div>
              )}
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

          <div className="space-y-3 pt-2">
            <button
              onClick={handleUpdateFlow}
              disabled={
                !resolvedAddress || !selectedToken || !flowRate || Number(flowRate) <= 0 || isTransactionPending
              }
              className={`w-full py-4 rounded-xl font-medium text-primary transition-colors ${
                !resolvedAddress || !selectedToken || !flowRate || Number(flowRate) <= 0 || isTransactionPending
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                  : "text-primary dark:text-secondary bg-base-300 ring-2 ring-success dark:bg-warning rounded-btn hover:bg-primary hover:text-white dark:hover:bg-success dark:hover:text-primary hover:ring-4 hover:ring-success hover:ring-opacity-75 hover:shadow-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 dark:hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] dark:hover:scale-105"
              }`}
            >
              {isTransactionPending ? "Creating Stream..." : "Send Stream"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStreamModal;
