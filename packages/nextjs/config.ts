/**
 * Configuration interface for pool addresses and data providers.
 */
interface Config {
  POOL_ADDRESSES_PROVIDER: string;
  UI_POOL_DATA_PROVIDER_V3_ADDR: string;
}

/**
 * Configuration object containing specific addresses.
 */
const CONFIG: Config = {
  POOL_ADDRESSES_PROVIDER: "0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D",
  UI_POOL_DATA_PROVIDER_V3_ADDR: "0x174446a6741300cD2E7C1b1A636Fee99c8F83502",
};

export default CONFIG;
