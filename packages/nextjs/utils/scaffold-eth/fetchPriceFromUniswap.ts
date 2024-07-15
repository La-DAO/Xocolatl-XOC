import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pair, Route } from "@uniswap/v2-sdk";
import { Address, createPublicClient, http, parseAbi } from "viem";
import { mainnet } from "wagmi/chains";
import scaffoldConfig from "~~/scaffold.config";
import { ChainWithAttributes } from "~~/utils/scaffold-eth";

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(`${mainnet.rpcUrls.default.http[0]}/${scaffoldConfig.alchemyApiKey}`),
});

const ABI = parseAbi([
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
]);

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
  try {
    const DAI = new Token(1, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18);
    const TOKEN = new Token(
      1,
      targetNetwork.nativeCurrencyTokenAddress || "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      18,
    );
    const pairAddress = Pair.getAddress(TOKEN, DAI) as Address;

    const wagmiConfig = {
      address: pairAddress,
      abi: ABI,
    };

    const reserves = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "getReserves",
    });

    const token0Address = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "token0",
    });

    const token1Address = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "token1",
    });
    const token0 = [TOKEN, DAI].find(token => token.address === token0Address) as Token;
    const token1 = [TOKEN, DAI].find(token => token.address === token1Address) as Token;
    const pair = new Pair(
      CurrencyAmount.fromRawAmount(token0, reserves[0].toString()),
      CurrencyAmount.fromRawAmount(token1, reserves[1].toString()),
    );
    const route = new Route([pair], TOKEN, DAI);
    const price = parseFloat(route.midPrice.toSignificant(6));
    return price;
  } catch (error) {
    console.error(
      `useNativeCurrencyPrice - Error fetching ${targetNetwork.nativeCurrency.symbol} price from Uniswap: `,
      error,
    );
    return 0;
  }
};
