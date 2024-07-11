import React, { useEffect, useState } from "react";
import { houseOfReserveABI } from "../components/abis/xocabis";
import { formatEther } from "viem";
import { useContractRead } from "wagmi";

const MXNFetch: React.FC = () => {
  const [latestPrice, setLatestPrice] = useState<any>(null);
  const [latestPriceNumber, setLatestPriceNumber] = useState<number | bigint | any>(null);
  const { data: latestPriceData } = useContractRead({
    address: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203", // House of Reserve (WETH)
    abi: houseOfReserveABI,
    functionName: "getLatestPrice",
  });

  useEffect(() => {
    if (latestPriceData) {
      setLatestPrice(latestPriceData);
    }
  }, [latestPriceData]);

  useEffect(() => {
    if (latestPrice) {
      setLatestPriceNumber(parseFloat(formatEther(BigInt(latestPrice?.toString() + "1000000000"))).toFixed(2));
    }
  }, [latestPrice]);

  // Render the latest price data
  return (
    <>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Price of 1 Ether</div>
          <div className="stat-value">
            {latestPriceNumber &&
              new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(latestPriceNumber)}
          </div>
          <div className="stat-desc text-base">In $MXN pesos</div>
        </div>
      </div>
    </>
  );
};

export default MXNFetch;
