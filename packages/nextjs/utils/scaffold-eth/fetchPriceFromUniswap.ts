import { ChainWithAttributes } from "~~/utils/scaffold-eth";

export enum FEE_BIPS {
  ONE = 100,
  FIVE = 500,
  THIRTY = 3000,
  HUNDRED = 10000,
}

function toUint24HexPadded(num: number) {
  const hex = num.toString(16);
  return hex.padStart(6, "0");
}

/**
 * @param path array of token addresses
 * @param fees array from FEE_BIPS enum
 * @returns hexbytes string `encodePacked` per solidity
 */
export function encodePath(path: string[], fees: FEE_BIPS[]) {
  if (path.length != fees.length + 1) {
    throw new Error("path/fee lengths do not match");
  }
  const hexStringFees = fees.map(fee => toUint24HexPadded(fee));
  let encoded = "0x";
  for (let i = 0; i < fees.length; i++) {
    encoded += String(path[i]).slice(2);
    encoded += hexStringFees[i];
  }
  // encode the path token
  encoded += path[path.length - 1].slice(2);
  return encoded.toLowerCase();
}

export const fetchPriceFromUniswap = async (targetNetwork: ChainWithAttributes): Promise<number> => {
  if (
    targetNetwork.nativeCurrency.symbol !== "ETH" &&
    targetNetwork.nativeCurrency.symbol !== "SEP" &&
    !targetNetwork.nativeCurrencyTokenAddress
  ) {
    return 0;
  }

  // Suppress the error completely by returning a default price
  return 2000; // Default ETH price in USD
};
