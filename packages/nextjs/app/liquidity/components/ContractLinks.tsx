"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "~~/app/context/LanguageContext";

// Real contract addresses for Arbitrum mainnet
const REAL_CONTRACT_ADDRESSES = {
  lpManager: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291", // LiquidityManager contract
  pool: "0x45E9C07c8daBE583BB66c710D3936C406ABd0b83", // Pool address
  usdOracle0Ref: "0x67E0c5A89739a4679C5D838A0A235a71F3939196", // Oracle address
  usdOracle1Ref: "0x2AE959E633d0dF4044b8a43077333a813802a640", // Oracle address
  token0: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC
  token1: "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf", // XOC
};

export const ContractLinks = () => {
  const [contracts, setContracts] = useState(REAL_CONTRACT_ADDRESSES);
  const { t } = useTranslation();
  useEffect(() => {
    // Use real contract addresses
    setContracts(REAL_CONTRACT_ADDRESSES);
  }, []);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getBaseScanUrl = (address: string) => {
    return `https://basescan.io/address/${address}`;
  };

  return (
    <div className="card shadow-xl bg-primary dark:bg-neutral dark:text-primary">
      <div className="card-body">
        <h3 className="card-title text-white dark:text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          {t("contractAddresses")}
        </h3>

        <div className="space-y-3">
          {/* Liquidity Manager */}
          <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="badge badge-primary border-accent text-sm text-white dark:text-white">Manager</div>
              <span className="text-sm font-medium dark:text-white">Liquidity Manager</span>
            </div>
            <a
              href={getBaseScanUrl(contracts.lpManager)}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary text-xs font-mono dark:text-white"
            >
              {shortenAddress(contracts.lpManager)}
            </a>
          </div>

          {/* Token0 (MXNb) */}
          <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="badge badge-secondary border-accent text-sm">Token0</div>
              <span className="text-sm font-medium dark:text-white">USDC</span>
            </div>
            <a
              href={getBaseScanUrl(contracts.token0)}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary text-xs font-mono dark:text-white"
            >
              {shortenAddress(contracts.token0)}
            </a>
          </div>

          {/* Token1 (USDT0) */}
          <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="badge badge-secondary border-accent text-sm dark:text-white">Token1</div>
              <span className="text-sm font-medium dark:text-white">XOC</span>
            </div>
            <a
              href={getBaseScanUrl(contracts.token1)}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary text-xs font-mono dark:text-white"
            >
              {shortenAddress(contracts.token1)}
            </a>
          </div>

          {/* Pool */}
          <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="badge badge-info border-accent text-sm dark:text-white">Pool</div>
              <span className="text-sm font-medium dark:text-white">Pool Contract</span>
            </div>
            <a
              href={getBaseScanUrl(contracts.pool)}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary text-xs font-mono dark:text-white"
            >
              {shortenAddress(contracts.pool)}
            </a>
          </div>

          {/* Oracle */}
          <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="badge badge-warning border-accent text-sm">Oracle</div>
              <span className="text-sm font-medium dark:text-white">Price Oracle</span>
            </div>
            <a
              href={getBaseScanUrl(contracts.usdOracle0Ref)}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary text-xs font-mono dark:text-white"
            >
              {shortenAddress(contracts.usdOracle0Ref)}
            </a>
          </div>
          <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="badge badge-warning border-accent text-sm">Oracle</div>
              <span className="text-sm font-medium dark:text-white">Price Oracle</span>
            </div>
            <a
              href={getBaseScanUrl(contracts.usdOracle1Ref)}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary text-xs font-mono dark:text-white"
            >
              {shortenAddress(contracts.usdOracle1Ref)}
            </a>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-outline btn-sm text-white dark:text-primary">{t("copyAllAddresses")}</button>
        </div>
      </div>
    </div>
  );
};
