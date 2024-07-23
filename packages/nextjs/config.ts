/**
 * Configuration interface for pool addresses and data providers.
 */
interface Config {
  POOL_ADDRESSES_PROVIDER: string;
  UI_POOL_DATA_PROVIDER_V3_ADDR: string;
  POOL: string; // Main pool address to make supply, borrow, withdrow, repay
  // Must to approve the amount to supply and borrow from the pool
}

/**
 * Configuration object containing specific addresses.
 */
const CONFIG: Config = {
  POOL_ADDRESSES_PROVIDER: "0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D", // Main interactivity
  UI_POOL_DATA_PROVIDER_V3_ADDR: "0x174446a6741300cD2E7C1b1A636Fee99c8F83502",
  POOL: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
};

export default CONFIG;

// 115792089237316195423570985008687907853269984665640564039457.584007913129639935 number to infinite approval
