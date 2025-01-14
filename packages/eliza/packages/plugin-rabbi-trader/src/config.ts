export const PROVIDER_CONFIG = {
  BIRDEYE_API: "https://public-api.birdeye.so",
  TOKEN_SECURITY_ENDPOINT: "/defi/token_security?address=",
  TOKEN_METADATA_ENDPOINT: "/defi/v3/token/meta-data/single?address=",
  MARKET_SEARCH_ENDPOINT: "/defi/v3/token/trade-data/single?address=",
  TOKEN_PRICE_CHANGE_ENDPOINT:
    "/defi/v3/search?chain=solana&target=token&sort_by=price_change_24h_percent&sort_type=desc&verify_token=true&markets=Raydium&limit=20",
  TOKEN_VOLUME_24_CHANGE_ENDPOINT:
    "/defi/v3/search?chain=solana&target=token&sort_by=volume_24h_change_percent&sort_type=desc&verify_token=true&markets=Raydium&limit=20",
  TOKEN_BUY_24_CHANGE_ENDPOINT:
    "/defi/v3/search?chain=solana&target=token&sort_by=buy_24h_change_percent&sort_type=desc&verify_token=true&markets=Raydium&offset=0&limit=20",

  TOKEN_SECURITY_ENDPOINT_BASE: "/defi/token_security?address=",
  TOKEN_METADATA_ENDPOINT_BASE: "/defi/v3/token/meta-data/single?address=",
  MARKET_SEARCH_ENDPOINT_BASE: "/defi/v3/token/trade-data/single?address=",
  TOKEN_PRICE_CHANGE_ENDPOINT_BASE:
    "/defi/v3/search?chain=base&target=token&sort_by=price_change_24h_percent&sort_type=desc&offset=0&limit=20",
  TOKEN_VOLUME_24_ENDPOINT_BASE:
    "/defi/v3/search?chain=base&target=token&sort_by=volume_24h_usd&sort_type=desc&offset=2&limit=20",
  TOKEN_BUY_24_ENDPOINT_BASE:
    "/defi/v3/search?chain=base&target=token&sort_by=buy_24h&sort_type=desc&offset=2&limit=20",

  MAX_RETRIES: 3,
  RETRY_DELAY: 2000,
};

// Add configuration for enabled chains
export const CHAIN_CONFIG = {
  SOLANA_ENABLED: false, // Can be controlled via settings
  BASE_ENABLED: true, // Can be controlled via settings
};

// Add Base chain configuration near other export constants
export const BASE_CONFIG = {
  RPC_URL: process.env.EVM_PROVIDER_URL || "https://mainnet.base.org",
  ROUTER_ADDRESS: "0x327Df1E6de05895d2ab08513aaDD9313Fe505d86", // Base Uniswap V2 Router
  WETH_ADDRESS: "0x4200000000000000000000000000000000000006", // Base WETH
  CHAIN_ID: 8453,
  // Add Aerodrome-specific addresses
  AERODROME: {
    WETH: "0x4200000000000000000000000000000000000006",
    USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    USDT: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
  },
};

// Add 0x API configuration near other export constants
export const ZEROEX_CONFIG = {
  API_URL: "https://api.0x.org",
  API_KEY: process.env.ZEROEX_API_KEY || "",
  QUOTE_ENDPOINT: "/swap/permit2/quote",
  PRICE_ENDPOINT: "/swap/permit2/price",
  SUPPORTED_CHAINS: {
    BASE: 8453,
  },
  HEADERS: {
    "Content-Type": "application/json",
    "0x-api-key": process.env.ZEROEX_API_KEY || "",
    "0x-version": "v2",
  },
};
