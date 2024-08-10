import { Address } from "viem";

/**
 * Configuration interface for pool addresses and data providers.
 */
interface Config {
  POOL_ADDRESSES_PROVIDER: Address; // Main interactivity
  UI_POOL_DATA_PROVIDER_V3_ADDR: Address;
  POOL: Address; // Main pool address to make supply, borrow, withdrow, repay
}

/**
 * Configuration object containing specific addresses.
 */
const CONFIG: Config = {
  POOL_ADDRESSES_PROVIDER: "0xf7F56d8a155aF8A726dfDa80790c7a4fbf21CDf8",
  UI_POOL_DATA_PROVIDER_V3_ADDR: "0x829D7aBA8B49f4BD5510cd874b94dDc69f238Bfc",
  POOL: "0x7a8AE9bB9080670e2BAFb6Df3EA62968F4Ad8a88",

};

export default CONFIG;

// 115792089237316195423570985008687907853269984665640564039457.584007913129639935 number to infinite approval
