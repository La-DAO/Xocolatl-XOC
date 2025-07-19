"use client";

import { useEffect, useState } from "react";
import { liquidityABI } from "../../components/abis/liquidity";
import { Log, decodeEventLog } from "viem";
import { usePublicClient, useWatchContractEvent } from "wagmi";

// Contract configuration
const CONTRACT_ADDRESS = "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291";
const TOKEN0_DECIMALS = 6; // USDC has 6 decimals
const TOKEN1_DECIMALS = 18; // XOC has 18 decimals

interface AdjustmentRecord {
  id: string;
  timestamp: number;
  type: "deposit" | "withdraw" | "rebalance";
  token0Amount: string;
  token1Amount: string;
  newLowerTick?: number;
  newUpperTick?: number;
  txHash: string;
  blockNumber: number;
  logIndex: number; // Add logIndex for proper sorting
}

export const AdjustmentHistory = () => {
  const [adjustments, setAdjustments] = useState<AdjustmentRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const publicClient = usePublicClient();

  // Debug function to log current state
  const debugLog = (message: string, data?: any) => {
    console.log(`[AdjustmentHistory] ${message}`, data || "");
  };

  // Function to fetch historical events
  const fetchHistoricalEvents = async () => {
    if (!publicClient) {
      debugLog("Public client not available");
      return;
    }

    debugLog("Fetching historical events...");

    try {
      // Get current block number
      const currentBlock = await publicClient.getBlockNumber();
      debugLog("Current block number:", currentBlock.toString());

      // Test if contract exists by getting its code
      try {
        const contractCode = await publicClient.getBytecode({ address: CONTRACT_ADDRESS as `0x${string}` });
        debugLog("Contract code exists:", !!contractCode);
        if (!contractCode) {
          debugLog("WARNING: Contract has no code - address might be wrong or contract not deployed");
        }
      } catch (error) {
        debugLog("Error checking contract code:", error);
      }

      // Fetch events from the last 50,000 blocks to get more historical data
      const fromBlock = currentBlock - 50000n;
      debugLog("Fetching events from block:", fromBlock.toString());

      // Fetch all events from the contract
      const allLogs = await publicClient.getLogs({
        address: CONTRACT_ADDRESS as `0x${string}`,
        fromBlock,
        toBlock: "latest",
      });
      debugLog("Total logs found:", allLogs.length);

      // Log the first few logs to see what we're getting
      if (allLogs.length > 0) {
        debugLog("First log sample:", {
          topics: allLogs[0].topics,
          data: allLogs[0].data,
          transactionHash: allLogs[0].transactionHash,
        });
      }

      // Fetch all block timestamps efficiently in parallel
      const blockNumbers = Array.from(new Set(allLogs.map(l => l.blockNumber)));
      const blocks = await Promise.all(blockNumbers.map(blockNumber => publicClient.getBlock({ blockNumber })));
      const blockMap = Object.fromEntries(blocks.map(b => [b.number, b]));

      // Process and decode all events
      const historicalAdjustments: AdjustmentRecord[] = [];

      for (const log of allLogs) {
        try {
          // Try to decode each event type using the full ABI
          let decodedEvent: any = null;
          let eventType = "";

          // Try to decode as any of our events
          try {
            decodedEvent = decodeEventLog({
              abi: liquidityABI,
              data: log.data,
              topics: log.topics,
            });
            eventType = decodedEvent.eventName.toLowerCase();
          } catch {
            // Skip if none of the events match
            continue;
          }

          if (decodedEvent && log.transactionHash) {
            debugLog(`Successfully decoded ${eventType} event:`, {
              args: decodedEvent.args,
              txHash: log.transactionHash,
            });

            const block = blockMap[Number(log.blockNumber)];

            let adjustment: AdjustmentRecord | null = null;

            if (decodedEvent.eventName === "Rebalance") {
              const args = decodedEvent.args as any;

              adjustment = {
                id: `${eventType}-${log.transactionHash}-${log.logIndex}`,
                timestamp: Number(block.timestamp) * 1000, // Convert to milliseconds
                type: "rebalance",
                token0Amount: args?.totalAmount0 ? (Number(args.totalAmount0) / 10 ** TOKEN0_DECIMALS).toFixed(6) : "0",
                token1Amount: args?.totalAmount1 ? (Number(args.totalAmount1) / 10 ** TOKEN1_DECIMALS).toFixed(6) : "0",
                newLowerTick: args?.tick ? Number(args.tick) : undefined,
                newUpperTick: args?.tick ? Number(args.tick) : undefined,
                txHash: log.transactionHash,
                blockNumber: Number(log.blockNumber),
                logIndex: Number(log.logIndex),
              };
            } else if (decodedEvent.eventName === "Deposit") {
              const args = decodedEvent.args as any;

              adjustment = {
                id: `${eventType}-${log.transactionHash}-${log.logIndex}`,
                timestamp: Number(block.timestamp) * 1000, // Convert to milliseconds
                type: "deposit",
                token0Amount: args?.amount0 ? (Number(args.amount0) / 10 ** TOKEN0_DECIMALS).toFixed(6) : "0",
                token1Amount: args?.amount1 ? (Number(args.amount1) / 10 ** TOKEN1_DECIMALS).toFixed(6) : "0",
                txHash: log.transactionHash,
                blockNumber: Number(log.blockNumber),
                logIndex: Number(log.logIndex),
              };
            } else if (decodedEvent.eventName === "Withdraw") {
              const args = decodedEvent.args as any;

              adjustment = {
                id: `${eventType}-${log.transactionHash}-${log.logIndex}`,
                timestamp: Number(block.timestamp) * 1000, // Convert to milliseconds
                type: "withdraw",
                token0Amount: args?.amount0 ? (Number(args.amount0) / 10 ** TOKEN0_DECIMALS).toFixed(6) : "0",
                token1Amount: args?.amount1 ? (Number(args.amount1) / 10 ** TOKEN1_DECIMALS).toFixed(6) : "0",
                txHash: log.transactionHash,
                blockNumber: Number(log.blockNumber),
                logIndex: Number(log.logIndex),
              };
            }

            debugLog("Created adjustment:", adjustment);
            if (adjustment) {
              historicalAdjustments.push(adjustment);
            }
          }
        } catch (error) {
          debugLog("Error decoding log:", error);
          continue;
        }
      }

      // Sort by blockNumber and logIndex (newest first) and take only the last 10
      const sortedAdjustments = historicalAdjustments
        .sort((a, b) => {
          if (b.blockNumber !== a.blockNumber) {
            return b.blockNumber - a.blockNumber; // latest block first
          }
          return b.logIndex - a.logIndex; // within block, latest log first
        })
        .slice(0, 10);

      debugLog("Total historical adjustments found:", sortedAdjustments.length);

      // If no events found, add some mock data for testing
      if (sortedAdjustments.length === 0) {
        debugLog("No events found, adding mock data for testing");
        const mockAdjustments: AdjustmentRecord[] = [
          {
            id: "mock-rebalance-1",
            timestamp: Date.now() - 3600000, // 1 hour ago
            type: "rebalance",
            token0Amount: "1500.000000",
            token1Amount: "2.500000",
            newLowerTick: 123000,
            newUpperTick: 125000,
            txHash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            blockNumber: Number(currentBlock) - 100,
            logIndex: 0,
          },
          {
            id: "mock-deposit-1",
            timestamp: Date.now() - 7200000, // 2 hours ago
            type: "deposit",
            token0Amount: "1000.000000",
            token1Amount: "1.800000",
            txHash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
            blockNumber: Number(currentBlock) - 200,
            logIndex: 0,
          },
        ];
        setAdjustments(mockAdjustments);
      } else {
        setAdjustments(sortedAdjustments);
      }
    } catch (error) {
      debugLog("Error fetching historical events:", error);
    }
  };

  // Watch Rebalance events
  useWatchContractEvent({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: liquidityABI,
    eventName: "Rebalance",
    onLogs: (logs: Log[]) => {
      debugLog("Rebalance event received:", logs);
      logs.forEach(log => {
        if (!log.transactionHash) {
          debugLog("Skipping Rebalance event - no transaction hash");
          return;
        }

        try {
          const decodedLog = decodeEventLog({
            abi: liquidityABI,
            data: log.data,
            topics: log.topics,
          });

          if (decodedLog && decodedLog.eventName === "Rebalance") {
            const args = decodedLog.args as any;

            const newAdjustment: AdjustmentRecord = {
              id: `rebalance-${log.transactionHash}-${log.logIndex}`,
              timestamp: Date.now(),
              type: "rebalance",
              token0Amount: args?.totalAmount0 ? (Number(args.totalAmount0) / 10 ** TOKEN0_DECIMALS).toFixed(6) : "0",
              token1Amount: args?.totalAmount1 ? (Number(args.totalAmount1) / 10 ** TOKEN1_DECIMALS).toFixed(6) : "0",
              newLowerTick: args?.tick ? Number(args.tick) : undefined,
              newUpperTick: args?.tick ? Number(args.tick) : undefined, // For rebalance, we use the same tick
              txHash: log.transactionHash,
              blockNumber: Number(log.blockNumber),
              logIndex: Number(log.logIndex),
            };

            debugLog("Adding new Rebalance adjustment:", newAdjustment);
            setAdjustments(prev => [newAdjustment, ...prev.slice(0, 9)]); // Keep last 10 events
          }
        } catch (error) {
          debugLog("Error decoding Rebalance event:", error);
        }
      });
    },
    onError: error => {
      debugLog("Error watching Rebalance events:", error);
    },
  });

  // Watch Deposit events
  useWatchContractEvent({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: liquidityABI,
    eventName: "Deposit",
    onLogs: (logs: Log[]) => {
      debugLog("Deposit event received:", logs);
      logs.forEach(log => {
        if (!log.transactionHash) {
          debugLog("Skipping Deposit event - no transaction hash");
          return;
        }

        try {
          const decodedLog = decodeEventLog({
            abi: liquidityABI,
            data: log.data,
            topics: log.topics,
          });

          if (decodedLog && decodedLog.eventName === "Deposit") {
            const args = decodedLog.args as any;

            const newAdjustment: AdjustmentRecord = {
              id: `deposit-${log.transactionHash}-${log.logIndex}`,
              timestamp: Date.now(),
              type: "deposit",
              token0Amount: args?.amount0 ? (Number(args.amount0) / 10 ** TOKEN0_DECIMALS).toFixed(6) : "0",
              token1Amount: args?.amount1 ? (Number(args.amount1) / 10 ** TOKEN1_DECIMALS).toFixed(6) : "0",
              txHash: log.transactionHash,
              blockNumber: Number(log.blockNumber),
              logIndex: Number(log.logIndex),
            };

            debugLog("Adding new Deposit adjustment:", newAdjustment);
            setAdjustments(prev => [newAdjustment, ...prev.slice(0, 9)]); // Keep last 10 events
          }
        } catch (error) {
          debugLog("Error decoding Deposit event:", error);
        }
      });
    },
    onError: error => {
      debugLog("Error watching Deposit events:", error);
    },
  });

  // Watch Withdraw events
  useWatchContractEvent({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: liquidityABI,
    eventName: "Withdraw",
    onLogs: (logs: Log[]) => {
      debugLog("Withdraw event received:", logs);
      logs.forEach(log => {
        if (!log.transactionHash) {
          debugLog("Skipping Withdraw event - no transaction hash");
          return;
        }

        try {
          const decodedLog = decodeEventLog({
            abi: liquidityABI,
            data: log.data,
            topics: log.topics,
          });

          if (decodedLog && decodedLog.eventName === "Withdraw") {
            const args = decodedLog.args as any;

            const newAdjustment: AdjustmentRecord = {
              id: `withdraw-${log.transactionHash}-${log.logIndex}`,
              timestamp: Date.now(),
              type: "withdraw",
              token0Amount: args?.amount0 ? (Number(args.amount0) / 10 ** TOKEN0_DECIMALS).toFixed(6) : "0",
              token1Amount: args?.amount1 ? (Number(args.amount1) / 10 ** TOKEN1_DECIMALS).toFixed(6) : "0",
              txHash: log.transactionHash,
              blockNumber: Number(log.blockNumber),
              logIndex: Number(log.logIndex),
            };

            debugLog("Adding new Withdraw adjustment:", newAdjustment);
            setAdjustments(prev => [newAdjustment, ...prev.slice(0, 9)]); // Keep last 10 events
          }
        } catch (error) {
          debugLog("Error decoding Withdraw event:", error);
        }
      });
    },
    onError: error => {
      debugLog("Error watching Withdraw events:", error);
    },
  });

  useEffect(() => {
    debugLog("Component mounted, fetching historical events...");
    fetchHistoricalEvents();

    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      debugLog("Loading completed, current adjustments count:", adjustments.length);
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicClient]);

  useEffect(() => {
    debugLog("Adjustments state updated, count:", adjustments.length);
  }, [adjustments]);

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "deposit":
        return <div className="badge badge-success">Deposit</div>;
      case "withdraw":
        return <div className="badge badge-error">Withdraw</div>;
      case "rebalance":
        return <div className="badge badge-warning">Rebalance</div>;
      case "bps-ranges":
        return <div className="badge badge-warning">Set BPS Ranges</div>;
      default:
        return <div className="badge badge-neutral">{type}</div>;
    }
  };

  if (isLoading) {
    return (
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-white dark:text-primary">Adjustment History</h2>
          <div className="flex items-center justify-center h-32">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
          <div className="text-center text-sm text-base-content/70">Loading historical events...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-primary dark:bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white dark:text-primary">Adjustment History</h2>

        {adjustments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-base-content/70 dark:text-primary">No adjustments found</p>
            <p className="text-sm text-base-content/50 mt-2 dark:text-primary">Events will appear here in real-time</p>
            <button
              className="btn btn-sm btn-outline mt-4"
              onClick={() => {
                debugLog("Manual refresh triggered");
                fetchHistoricalEvents();
              }}
            >
              Refresh Events
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra dark:text-primary">
              <thead>
                <tr>
                  <th className="text-white dark:text-primary">Time</th>
                  <th className="text-white dark:text-primary">Type</th>
                  <th className="text-white dark:text-primary">Token 0</th>
                  <th className="text-white dark:text-primary">Token 1</th>
                  <th className="text-white dark:text-primary">Bounds</th>
                  <th className="text-white dark:text-primary">Transaction</th>
                </tr>
              </thead>
              <tbody>
                {adjustments.map((adjustment, index) => (
                  <tr key={adjustment.id}>
                    <td>
                      <div className={`text-sm ${index % 2 === 0 ? "text-neutral-content" : "text-base-content"}`}>
                        {formatTimestamp(adjustment.timestamp)}
                      </div>
                    </td>
                    <td>{getTypeBadge(adjustment.type)}</td>
                    <td>
                      <div
                        className={`font-mono text-sm ${
                          index % 2 === 0 ? "text-neutral-content" : "text-base-content"
                        }`}
                      >
                        {adjustment.token0Amount}
                      </div>
                    </td>
                    <td>
                      <div
                        className={`font-mono text-sm ${
                          index % 2 === 0 ? "text-neutral-content" : "text-base-content"
                        }`}
                      >
                        {adjustment.token1Amount}
                      </div>
                    </td>
                    <td>
                      {adjustment.newLowerTick !== undefined && adjustment.newUpperTick !== undefined ? (
                        <div className="text-xs space-y-1">
                          <div className={`${index % 2 === 0 ? "text-neutral-content" : "text-base-content"}`}>
                            Lower: {adjustment.newLowerTick}
                          </div>
                          <div className={`${index % 2 === 0 ? "text-neutral-content" : "text-base-content"}`}>
                            Upper: {adjustment.newUpperTick}
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`text-xs ${index % 2 === 0 ? "text-neutral-content/70" : "text-base-content/50"}`}
                        >
                          -
                        </div>
                      )}
                    </td>
                    <td>
                      <a
                        href={`https://arbiscan.io/tx/${adjustment.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success hover:text-success-focus text-xs font-medium underline"
                      >
                        {adjustment.txHash.slice(0, 8)}...
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-outline btn-sm text-white dark:text-primary"
            onClick={() => {
              debugLog("Manual refresh triggered");
              fetchHistoricalEvents();
            }}
          >
            Refresh Events
          </button>
        </div>
      </div>
    </div>
  );
};
