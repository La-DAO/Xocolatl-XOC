"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../context/LanguageContext";
import FlowingBalance from "./components/FlowingBalance";
import CreateStreamModal from "./components/Flows/CreateStreamModal";
import SuperXocFlowingBalance from "./components/SuperXocFlowingBalance";
import TokenConverter from "./components/Supertokens";
import DeleteStreamModal from "./components/modals/DeleteStreamModal";
import UpdateStreamModal from "./components/modals/UpdateStreamModal";
import { ArrowRight, ArrowUpDown, Clock, Edit, Info, Plus, Trash2, TrendingUp, Users, Wallet } from "lucide-react";
import { useAccount } from "wagmi";
import { useIncomingStreamsDataSync, useLendingStore, useStreamsDataSync } from "~~/stores/lending-store";
import { useStreamingStore, useUpdateFlowInfo, useUpdateSuperXocBalance } from "~~/stores/streaming-store";

export default function StreamsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("overview");
  const [isCreateStreamModalOpen, setIsCreateStreamModalOpen] = useState(false);
  const [isDeleteStreamModalOpen, setIsDeleteStreamModalOpen] = useState(false);
  const [selectedStreamForDeletion, setSelectedStreamForDeletion] = useState<any>(null);
  const [isUpdateStreamModalOpen, setIsUpdateStreamModalOpen] = useState(false);
  const [selectedStreamForUpdate, setSelectedStreamForUpdate] = useState<any>(null);
  const tokenConverterRef = useRef<HTMLDivElement>(null);

  // Store integration
  useUpdateSuperXocBalance(); // This will update the store with Super XOC balance
  useUpdateFlowInfo(); // This will update the store with flow info

  // Superfluid subgraph integration
  const { address } = useAccount();

  // Sync streams data with store
  useStreamsDataSync(address || "");
  useIncomingStreamsDataSync(address || "");

  // Get streams data from store
  const {
    transformedStreams,
    streamsLoading,
    streamsError,
    transformedIncomingStreams,
    incomingStreamsLoading,
    incomingStreamsError,
  } = useLendingStore();

  const { xocBalance, superXocBalance, flowInfo } = useStreamingStore();

  // Calculate monthly flow rate for FlowingBalance
  const calculateMonthlyFlowRate = () => {
    if (!flowInfo || flowInfo.flowRate === 0n) return 0n;

    // Convert flowRate from per-second to per-month
    // flowRate is in wei per second, so multiply by seconds in a month
    const secondsInMonth = 30 * 24 * 60 * 60; // 30 days
    const monthlyFlowWei = flowInfo.flowRate * BigInt(secondsInMonth);

    return monthlyFlowWei;
  };

  // Get starting date from flowInfo or use current date
  const getStartingDate = () => {
    if (!flowInfo || flowInfo.lastUpdated === 0n) return new Date();
    return new Date(Number(flowInfo.lastUpdated) * 1000);
  };

  const handleOpenCreateStreamModal = () => {
    setIsCreateStreamModalOpen(true);
  };

  const handleCloseCreateStreamModal = () => {
    setIsCreateStreamModalOpen(false);
    // Refresh streams data after creating a new stream
    setTimeout(() => {
      useLendingStore.getState().refreshStreams();
      useLendingStore.getState().refreshIncomingStreams();
    }, 1000);
  };

  const handleOpenDeleteStreamModal = (stream: any) => {
    setSelectedStreamForDeletion(stream);
    setIsDeleteStreamModalOpen(true);
  };

  const handleCloseDeleteStreamModal = () => {
    setIsDeleteStreamModalOpen(false);
    setSelectedStreamForDeletion(null);
    // Refresh streams data after deleting a stream
    setTimeout(() => {
      useLendingStore.getState().refreshStreams();
      useLendingStore.getState().refreshIncomingStreams();
    }, 1000);
  };

  const handleOpenUpdateStreamModal = (stream: any) => {
    setSelectedStreamForUpdate(stream);
    setIsUpdateStreamModalOpen(true);
  };
  const handleCloseUpdateStreamModal = () => {
    setIsUpdateStreamModalOpen(false);
    setSelectedStreamForUpdate(null);
    // Refresh streams data after updating a stream
    setTimeout(() => {
      useLendingStore.getState().refreshStreams();
      useLendingStore.getState().refreshIncomingStreams();
    }, 1000);
  };

  const handleWrapTokensClick = () => {
    setActiveTab("overview");

    // Use setTimeout to ensure tab switch completes
    setTimeout(() => {
      if (tokenConverterRef.current) {
        // Scroll to the token converter with smooth behavior
        tokenConverterRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Add highlight effect
        tokenConverterRef.current.classList.add(
          "ring-4",
          "ring-primary",
          "ring-opacity-75",
          "scale-105",
          "shadow-2xl",
          "rounded-lg",
        );

        // Remove the highlight effect after 3 seconds
        setTimeout(() => {
          if (tokenConverterRef.current) {
            tokenConverterRef.current.classList.remove(
              "ring-4",
              "ring-primary",
              "ring-opacity-75",
              "scale-105",
              "shadow-2xl",
              "rounded-lg",
            );
          }
        }, 3000);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral dark:text-white">{t("StreamsTitle")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("StreamsDescription")}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              className="btn btn-primary bg-neutral dark:bg-base-100 text-white dark:text-white btn-lg hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 transition-all duration-300 hover:bg-success dark:hover:bg-success hover:text-primary dark:hover:text-white font-semibold"
              onClick={handleOpenCreateStreamModal}
            >
              <Plus className="w-5 h-5 mr-2" />
              {t("StreamsCreateStream")}
            </button>
            <button
              className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-200"
              onClick={handleWrapTokensClick}
            >
              <ArrowUpDown className="w-5 h-5 mr-2" />
              {t("StreamsWrapTokens")}
            </button>
          </div>
        </div>

        {/* How It Works */}
        <div className="card bg-white/80 dark:bg-base-100/80 backdrop-blur-sm shadow-lg">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Info className="w-5 h-5" />
              {t("StreamsHowItWorks")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/wrap token.png"
                    alt="Wrap Tokens"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">1. {t("StreamsWrapTokens")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("StreamsWrapTokensDescription")}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/create a stream.png"
                    alt="Create Stream"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">2. {t("StreamsCreateStream")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("StreamsCreateStreamDescription")}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/real-time payments.png"
                    alt="Real Time Payments"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">3. {t("StreamsRealTimePayments")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("StreamsRealTimePaymentsDescription")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">{t("StreamsXOCBalance")}</h3>
                <Wallet className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">{xocBalance}</div>
              <p className="text-xs text-gray-500">{t("StreamsNativeToken")}</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">{t("StreamsSuperXOCBalance")}</h3>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </div>
              {flowInfo && flowInfo.flowRate !== 0n ? (
                <SuperXocFlowingBalance
                  balance={superXocBalance}
                  flowRate={flowInfo.flowRate > 0n ? -flowInfo.flowRate : flowInfo.flowRate}
                  lastUpdated={flowInfo.lastUpdated}
                />
              ) : (
                <div className="text-2xl font-bold">{superXocBalance}</div>
              )}
              <p className="text-xs text-gray-500">{t("StreamsStreamableToken")}</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">{t("StreamsActiveStreams")}</h3>
                <Users className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">
                {streamsLoading ? (
                  <div className="loading loading-spinner loading-sm"></div>
                ) : streamsError ? (
                  "?"
                ) : (
                  transformedStreams.length
                )}
              </div>
              <p className="text-xs text-gray-500">{t("StreamsOutgoing")}</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">{t("StreamsMonthlyFlow")}</h3>
                <Clock className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">
                {flowInfo && flowInfo.flowRate !== 0n ? (
                  <FlowingBalance
                    startingBalance={0n}
                    startingBalanceDate={getStartingDate()}
                    flowRate={calculateMonthlyFlowRate()}
                  />
                ) : (
                  "0.00"
                )}
              </div>
              <p className="text-xs text-gray-500">{t("StreamsXOCMonth")}</p>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="space-y-6">
          <div className="tabs tabs-boxed bg-white dark:bg-base-100 shadow-lg py-2 font-medium pb-4">
            <button
              className={`tab ${activeTab === "overview" ? "tab-active h-10 !text-white" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              {t("StreamsOverview")}
            </button>
            <button
              className={`tab ${activeTab === "outgoing" ? "tab-active h-10 !text-white" : ""}`}
              onClick={() => setActiveTab("outgoing")}
            >
              {t("StreamsOutgoingStreams")}
            </button>
            <button
              className={`tab ${activeTab === "incoming" ? "tab-active h-10 !text-white" : ""}`}
              onClick={() => setActiveTab("incoming")}
            >
              {t("StreamsIncomingStreams")}
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Token Converter */}
                <div ref={tokenConverterRef}>
                  <TokenConverter />
                </div>

                {/* Quick Actions */}
                <div className="card bg-white dark:bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title">{t("StreamsQuickActions")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t("StreamsQuickActionsDescription")}</p>
                    <div className="space-y-3">
                      <button
                        className="btn btn-primary text-white w-full justify-start"
                        onClick={handleOpenCreateStreamModal}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        {t("StreamsCreateNewStream")}
                      </button>
                      <button className="btn btn-outline w-full justify-start">
                        <Edit className="w-4 h-4 mr-2" />
                        {t("StreamsEditExistingStream")}
                      </button>
                      <button className="btn btn-outline w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        {t("StreamsManageRecipients")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "outgoing" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-neutral dark:text-white">{t("StreamsOutgoingStreams")}</h2>
                <button className="btn btn-primary text-white" onClick={handleOpenCreateStreamModal}>
                  <Plus className="w-4 h-4 mr-2" />
                  {t("StreamsNewStream")}
                </button>
              </div>

              <div className="card bg-white dark:bg-base-100 shadow-lg">
                <div className="card-body p-0">
                  {streamsLoading && (
                    <div className="p-6 text-center">
                      <div className="loading loading-spinner loading-lg"></div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading outgoing streams...</p>
                    </div>
                  )}

                  {streamsError && (
                    <div className="p-6 text-center">
                      <div className="text-red-500 mb-4">
                        <Info className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold">Error loading streams</p>
                        <p className="text-sm">{streamsError.message}</p>
                      </div>
                      <button className="btn btn-outline btn-sm" onClick={() => window.location.reload()}>
                        Try Again
                      </button>
                    </div>
                  )}

                  {!streamsLoading && !streamsError && (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {transformedStreams.length > 0 ? (
                        transformedStreams.map(stream => (
                          <div key={stream.id} className="p-6 flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="badge badge-secondary">{stream.status}</span>
                                <span className="font-medium">{stream.name}</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                To: {stream.to.slice(0, 6)}...{stream.to.slice(-4)}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>
                                  {stream.flowRate.toFixed(6)} {t("StreamsXOCMonth")}
                                </span>
                                <span>•</span>
                                <span>
                                  {t("StreamsStarted")}: {stream.startDate}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                className="btn btn-outline btn-sm"
                                onClick={() => handleOpenUpdateStreamModal(stream)}
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                className="btn btn-outline btn-sm text-red-500 hover:text-red-700"
                                onClick={() => handleOpenDeleteStreamModal(stream)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 text-center">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                              <TrendingUp className="w-8 h-8 text-gray-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{t("StreamsNoOutgoingStreams")}</h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {address
                                  ? "You don't have any active outgoing streams yet."
                                  : "Connect your wallet to view your streams."}
                              </p>
                            </div>
                            {!address && (
                              <button className="btn btn-outline">
                                {t("StreamsConnectWallet")}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "incoming" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-neutral dark:text-white">{t("StreamsIncomingStreams")}</h2>
              </div>

              <div className="card bg-white dark:bg-base-100 shadow-lg">
                <div className="card-body p-0">
                  {incomingStreamsLoading && (
                    <div className="p-6 text-center">
                      <div className="loading loading-spinner loading-lg"></div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading incoming streams...</p>
                    </div>
                  )}

                  {incomingStreamsError && (
                    <div className="p-6 text-center">
                      <div className="text-red-500 mb-4">
                        <Info className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold">Error loading incoming streams</p>
                        <p className="text-sm">{incomingStreamsError.message}</p>
                      </div>
                      <button className="btn btn-outline btn-sm" onClick={() => window.location.reload()}>
                        Try Again
                      </button>
                    </div>
                  )}

                  {!incomingStreamsLoading && !incomingStreamsError && (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {transformedIncomingStreams.length > 0 ? (
                        transformedIncomingStreams.map(stream => (
                          <div key={stream.id} className="p-6 flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="badge badge-primary">{stream.status}</span>
                                <span className="font-medium">{stream.name}</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                From: {stream.to.slice(0, 6)}...{stream.to.slice(-4)}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>
                                  {stream.flowRate.toFixed(6)} {t("StreamsXOCMonth")}
                                </span>
                                <span>•</span>
                                <span>
                                  {t("StreamsStarted")}: {stream.startDate}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">Incoming</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 text-center">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                              <TrendingUp className="w-8 h-8 text-gray-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{t("StreamsNoIncomingStreams")}</h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {address
                                  ? "You don't have any active incoming streams yet."
                                  : "Connect your wallet to view your streams."}
                              </p>
                            </div>
                            {!address && (
                              <button className="btn btn-outline">
                                {t("StreamsConnectWallet")}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Stream Modal */}
      <CreateStreamModal isOpen={isCreateStreamModalOpen} onClose={handleCloseCreateStreamModal} />
      {/* Delete Stream Modal */}
      <DeleteStreamModal
        isOpen={isDeleteStreamModalOpen}
        onClose={handleCloseDeleteStreamModal}
        stream={selectedStreamForDeletion}
      />
      {/* Update Stream Modal */}
      <UpdateStreamModal
        isOpen={isUpdateStreamModalOpen}
        onClose={handleCloseUpdateStreamModal}
        stream={selectedStreamForUpdate}
      />
    </div>
  );
}
