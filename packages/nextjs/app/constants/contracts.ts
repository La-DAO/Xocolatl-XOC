import { chainIds } from "@/app/constants/chains";

type ContractData = {
  [key in (typeof chainIds)[keyof typeof chainIds]]: {
    houseOfReserves: Record<string, `0x${string}`>;
    houseOfCoin: `0x${string}`;
    assetsAccountant: `0x${string}`;
    assetContracts: Record<string, `0x${string}`>;
  };
};

export const houseOfReserveContract = "<houseOfReserve contract address>";
export const houseOfCoinContract = "<houseOfCoin contract address>";
export const xocContract = "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf";
export const usdcContract = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const assetName = "<asset name>";
export const assetSymbol = "<asset symbol>";
export const spenderAddress = "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291";

export const contractData: ContractData = {
  [chainIds.BASE]: {
    houseOfReserves: {
      WETH: "0xfF69E183A863151B4152055974aa648b3165014D",
      CBETH: "0x5c4a154690AE52844F151bcF3aA44885db3c8A58",
    },
    houseOfCoin: "0x02c531Cd9791dD3A31428B2987A82361D72F9b13",
    assetsAccountant: "0xB93EcD005B6053c6F8428645aAA879e7028408C7",
    assetContracts: {
      WETH: "0x4200000000000000000000000000000000000006",
      CBETH: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    },
  },
  [chainIds.BNB]: {
    houseOfReserves: {
      WETH: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
      WBNB: "0x070ccE6887E70b75015F948b12601D1E759D2024",
    },
    houseOfCoin: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
    assetsAccountant: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
    assetContracts: {
      WETH: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      WBNB: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    },
  },
  [chainIds.POLYGON]: {
    houseOfReserves: {
      WETH: "0x2718644E0C38A6a1F82136FC31dcA00DFCdF92a3",
      WMATIC: "0xF56293025437Db5C0024a37dfcEc792125d56A48",
      MATICX: "0x76CAc0bC384a49485627D2235fE132e3038b45BB",
    },
    houseOfCoin: "0x9d29E6b3D75F5e676f91b69284e015C9CEa20533",
    assetsAccountant: "0x076b6C91cC7e72286cd01D967A44787d1f3A6432",
    assetContracts: {
      WETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      MATICX: "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6",
    },
  },
};
