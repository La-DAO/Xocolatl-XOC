// Mock data utilities for the liquidity manager
// Replace these with real contract calls when contracts are deployed

export const MOCK_CONTRACT_ADDRESSES = {
  lpToken: "0x1234567890123456789012345678901234567890",
  pool: "0x2345678901234567890123456789012345678901",
  oracle: "0x3456789012345678901234567890123456789012",
  manager: "0x4567890123456789012345678901234567890123",
  token0: "0x5678901234567890123456789012345678901234", // USDC
  token1: "0x6789012345678901234567890123456789012345", // ETH
};

export const MOCK_LIQUIDITY_DATA = {
  token0Deployed: "1250.50",
  token1Deployed: "1875.75",
  token0Idle: "500.25",
  token1Idle: "750.00",
  totalValue: 4376.5,
  apy: 12.5,
  lowerTick: 200000,
  upperTick: 300000,
};

export const MOCK_PRICE_DATA = {
  oraclePrice: "1.5678",
  poolPrice: "1.5692",
  priceDifference: 0.0014,
  priceDifferencePercent: 0.089,
  volatility: "Low" as "Low" | "Medium" | "High",
};

export const MOCK_ADJUSTMENT_HISTORY = [
  {
    id: "1",
    timestamp: Date.now() - 3600000, // 1 hour ago
    type: "deposit" as const,
    token0Amount: "1000.00",
    token1Amount: "1500.00",
    newLowerTick: 200000,
    newUpperTick: 300000,
    txHash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: "2",
    timestamp: Date.now() - 7200000, // 2 hours ago
    type: "withdraw" as const,
    token0Amount: "500.00",
    token1Amount: "750.00",
    newLowerTick: 200000,
    newUpperTick: 300000,
    txHash: "0x8765432109876543210987654321098765432109876543210987654321098765",
  },
  {
    id: "3",
    timestamp: Date.now() - 10800000, // 3 hours ago
    type: "rebalance" as const,
    token0Amount: "2000.00",
    token1Amount: "3000.00",
    newLowerTick: 180000,
    newUpperTick: 320000,
    txHash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  },
  {
    id: "4",
    timestamp: Date.now() - 14400000, // 4 hours ago
    type: "withdraw" as const,
    token0Amount: "300.00",
    token1Amount: "450.00",
    newLowerTick: 190000,
    newUpperTick: 310000,
    txHash: "0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
  },
];

export const MOCK_PRICE_CHART_DATA = Array.from({ length: 100 }, (_, i) => ({
  timestamp: Date.now() - (100 - i) * 60000, // 1 minute intervals
  price: 1.5 + Math.sin(i * 0.1) * 0.3 + Math.random() * 0.1,
  volume: Math.random() * 1000000 + 500000,
}));

// Utility functions
export const generateMockPriceData = () => {
  const now = Date.now();
  return Array.from({ length: 100 }, (_, i) => ({
    timestamp: now - (100 - i) * 60000,
    price: 1.5 + Math.sin(i * 0.1) * 0.3 + Math.random() * 0.1,
    volume: Math.random() * 1000000 + 500000,
  }));
};

export const getMockLiquidityData = () => ({
  ...MOCK_LIQUIDITY_DATA,
  lastUpdated: Date.now(),
});

export const getMockPriceData = () => ({
  ...MOCK_PRICE_DATA,
  oracleTimestamp: Date.now(),
  poolTimestamp: Date.now(),
});

export const getMockAdjustmentHistory = () => {
  return MOCK_ADJUSTMENT_HISTORY.map(adjustment => ({
    ...adjustment,
    timestamp: adjustment.timestamp + Math.random() * 1000000, // Add some randomness
  }));
};
