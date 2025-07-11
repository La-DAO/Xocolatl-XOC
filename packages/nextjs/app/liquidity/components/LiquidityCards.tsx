"use client";

import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { liquidityABI } from "~~/app/components/abis/liquidity";

// Contract configuration
const CONTRACT_ADDRESS = "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291";
const TOKEN0_DECIMALS = 8; // USDC has 8 decimals
const TOKEN1_DECIMALS = 18; // XOC has 18 decimals

export const LiquidityCards = () => {
  const [liquidityData, setLiquidityData] = useState({
    token0Deployed: "0",
    token1Deployed: "0",
    token0Idle: "0",
    token1Idle: "0",
  });

  // Get base position from contract
  const { data: basePosition, isError: basePositionError } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: liquidityABI,
    functionName: "getBasePosition",
  });

  // Get total amounts from contract
  const { data: totalAmounts, isError: totalAmountsError } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: liquidityABI,
    functionName: "getTotalAmounts",
  });

  useEffect(() => {
    // Update liquidity data when contract data changes
    if (basePosition && totalAmounts) {
      console.log("Processing contract data...");
      const [liquidity, amount0, amount1] = basePosition as [bigint, bigint, bigint];
      const [total0, total1] = totalAmounts as [bigint, bigint];
      console.log("Liquidity:", liquidity);
      // Convert amounts to readable format
      // MXNb: 6 decimals, USDT0: 18 decimals
      const deployed0 = Number(amount0) / 10 ** TOKEN0_DECIMALS; // 1844512489 / 10^6 = 1844.512489
      const deployed1 = Number(amount1) / 10 ** TOKEN1_DECIMALS; // 98773937 / 10^18 = 0.000000098773937
      const total0Formatted = Number(total0) / 10 ** TOKEN0_DECIMALS; // 1844512489 / 10^6 = 1844.512489
      const total1Formatted = Number(total1) / 10 ** TOKEN1_DECIMALS; // 101842445 / 10^18 = 0.000000101842445

      // Calculate idle amounts (total - deployed)
      const idle0 = total0Formatted - deployed0;
      const idle1 = total1Formatted - deployed1;

      setLiquidityData({
        token0Deployed: deployed0.toFixed(6),
        token1Deployed: deployed1.toFixed(6),
        token0Idle: Math.max(0, idle0).toFixed(6),
        token1Idle: Math.max(0, idle1).toFixed(6),
      });
    }
  }, [basePosition, totalAmounts]);

  // Fallback to mock data if contract calls fail
  useEffect(() => {
    // No-op: removed console logs for fallback
  }, [basePositionError, totalAmountsError, basePosition, totalAmounts]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Liquidity Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deployed Liquidity */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">Deployed Liquidity</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="card bg-primary dark:bg-neutral border-success shadow-xl">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="card-title text-white dark:text-primary">Token 0 (MXNb)</h4>
                    <p className="text-2xl font-bold text-white dark:text-primary">{liquidityData.token0Deployed}</p>
                  </div>
                  <div className="text-right">
                    <div className="badge badge-success text-white dark:text-primary">Deployed</div>
                    <p className="text-sm text-base-content mt-1">In Position</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-primary dark:bg-neutral border-success shadow-xl">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="card-title text-white dark:text-primary">Token 1 (USDT0)</h4>
                    <p className="text-2xl font-bold text-white dark:text-primary">{liquidityData.token1Deployed}</p>
                  </div>
                  <div className="text-right">
                    <div className="badge badge-success text-white dark:text-primary">Deployed</div>
                    <p className="text-sm text-base-content mt-1">In Position</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Idle Liquidity */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">Idle Liquidity</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="card bg-secondary border-warning shadow-xl">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="card-title text-neutral dark:text-white">Token 0 (MXNb)</h4>
                    <p className="text-2xl font-bold text-neutral dark:text-white">{liquidityData.token0Idle}</p>
                  </div>
                  <div className="text-right">
                    <div className="badge badge-warning text-white dark:text-white">Idle</div>
                    <p className="text-sm text-base-content mt-1 dark:text-primary">Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-secondary border-warning shadow-xl">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="card-title text-neutral dark:text-white">Token 1 (USDT0)</h4>
                    <p className="text-2xl font-bold text-neutral dark:text-white">{liquidityData.token1Idle}</p>
                  </div>
                  <div className="text-right">
                    <div className="badge badge-warning text-white dark:text-primary">Idle</div>
                    <p className="text-sm text-base-content mt-1  dark:text-primary">Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Total Summary */}
      <div className="card bg-primary dark:bg-neutral shadow-2xl">
        <div className="card-body">
          <h3 className="card-title justify-center text-white dark:text-primary">Total Liquidity</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-md text-white dark:text-primary">Total Token 0</p>
              <p className="text-xl font-bold text-white dark:text-primary">
                {(parseFloat(liquidityData.token0Deployed) + parseFloat(liquidityData.token0Idle)).toFixed(6)}
              </p>
            </div>
            <div>
              <p className="text-md text-white dark:text-primary">Total Token 1</p>
              <p className="text-xl font-bold text-white dark:text-primary">
                {(parseFloat(liquidityData.token1Deployed) + parseFloat(liquidityData.token1Idle)).toFixed(6)}
              </p>
            </div>
            <div>
              <p className="text-md text-white dark:text-primary">Deployed %</p>
              <p className="text-xl font-bold text-success dark:text-primary">
                {parseFloat(liquidityData.token0Deployed) + parseFloat(liquidityData.token0Idle) > 0
                  ? (
                      (parseFloat(liquidityData.token0Deployed) /
                        (parseFloat(liquidityData.token0Deployed) + parseFloat(liquidityData.token0Idle))) *
                      100
                    ).toFixed(1)
                  : "0.0"}
                %
              </p>
            </div>
            <div>
              <p className="text-md text-white dark:text-primary">Idle %</p>
              <p className="text-xl font-bold text-warning dark:text-primary">
                {parseFloat(liquidityData.token0Deployed) + parseFloat(liquidityData.token0Idle) > 0
                  ? (
                      (parseFloat(liquidityData.token0Idle) /
                        (parseFloat(liquidityData.token0Deployed) + parseFloat(liquidityData.token0Idle))) *
                      100
                    ).toFixed(1)
                  : "0.0"}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
