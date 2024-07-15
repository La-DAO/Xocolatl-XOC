import React, { useEffect, useState } from "react";
import externalContracts from "@/contracts/externalContracts";
import { useReadContracts } from "wagmi";

const uiPoolDataProviderV3 = externalContracts[8453].UiPoolDataProviderV3;

type ReserveData = {
  underlyingAsset: `0x${string}`;
  name: string;
  symbol: string;
  decimals: bigint;
  baseLTVasCollateral: bigint;
  reserveLiquidationThreshold: bigint;
  reserveLiquidationBonus: bigint;
  stableRateSlope2: bigint;
  // Añade los otros campos necesarios aquí
};

type SuccessResultData = {
  result: [ReserveData[], any];
  status: "success";
  error?: undefined;
};

type ErrorResultData = {
  error: any;
  status: "error";
  result?: undefined;
};

type ResultData = SuccessResultData | ErrorResultData;

const App = () => {
  const [data, setData] = useState<ResultData | null>(null);

  const {
    data: result,
    isLoading,
    isError,
  } = useReadContracts({
    contracts: [
      {
        ...uiPoolDataProviderV3,
        functionName: "getReservesData",
        args: ["0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D"],
        chainId: 8453,
      },
    ],
  });

  useEffect(() => {
    if (result) {
      setData(result as unknown as ResultData); // Convertimos a 'unknown' primero, luego a 'ResultData'
    } else if (isError) {
      console.error("Error fetching data:", isError);
      setData({ error: isError, status: "error" } as ErrorResultData);
    }
  }, [result, isError]);

  const stringifyBigInt = (key: string, value: any) => {
    return typeof value === "bigint" ? value.toString() : value;
  };

  console.log(result);

  return (
    <div>
      <h1>Reserve Data</h1>
      {isLoading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, stringifyBigInt, 2)}</pre>}
      {isError && <p>Error fetching data.</p>}
    </div>
  );
};

export default App;
