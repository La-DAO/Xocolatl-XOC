"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../context/LanguageContext";
import CreateStreamModal from "./components/Flows/CreateStreamModal";
import SuperXocFlowingBalance from "./components/SuperXocFlowingBalance";
import TokenConverter from "./components/Supertokens";
import DeleteStreamModal from "./components/modals/DeleteStreamModal";
import UpdateStreamModal from "./components/modals/UpdateStreamModal";
import { ArrowRight, ArrowUpDown, Clock, Edit, Info, Plus, Trash2, TrendingUp, Users, Wallet } from "lucide-react";
import { useAccount } from "wagmi";
import {
  useIncomingStreamsDataSync,
  useStreamingStore,
  useStreamsDataSync,
  useUpdateFlowInfo,
  useUpdateSuperXocBalance,
} from "~~/stores/streaming-store";

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
  } = useStreamingStore();

  const { xocBalance, superXocBalance, flowInfo } = useStreamingStore();

  // Calculate net monthly flow from streams data
  const calculateNetMonthlyFlow = () => {
    // Calculate total outgoing flow
    const totalOutgoing = transformedStreams.reduce((sum, stream) => {
      return sum + stream.flowRate;
    }, 0);

    // Calculate total incoming flow
    const totalIncoming = transformedIncomingStreams.reduce((sum, stream) => {
      return sum + stream.flowRate;
    }, 0);

    // Net flow = incoming - outgoing (positive means net inflow, negative means net outflow)
    const netFlow = totalIncoming - totalOutgoing;

    return netFlow;
  };

  // Convert monthly net flow to per-second flow rate for SuperXocFlowingBalance
  const calculateNetFlowRate = () => {
    const monthlyNetFlow = calculateNetMonthlyFlow();
    // Convert monthly flow to per-second flow rate
    const secondsInMonth = 30 * 24 * 60 * 60; // 30 days
    const flowRatePerSecond = (monthlyNetFlow / secondsInMonth) * 1e18; // Convert to wei
    return BigInt(Math.floor(flowRatePerSecond));
  };

  const handleOpenCreateStreamModal = () => {
    setIsCreateStreamModalOpen(true);
  };

  const handleCloseCreateStreamModal = () => {
    setIsCreateStreamModalOpen(false);
    // Refresh streams data after creating a new stream
    setTimeout(() => {
      useStreamingStore.getState().refreshStreams();
      useStreamingStore.getState().refreshIncomingStreams();
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
      useStreamingStore.getState().refreshStreams();
      useStreamingStore.getState().refreshIncomingStreams();
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
      useStreamingStore.getState().refreshStreams();
      useStreamingStore.getState().refreshIncomingStreams();
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
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content">{t("StreamsTitle")}</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">{t("StreamsDescription")}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              className="btn btn-primary btn-lg hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 transition-all duration-300 font-semibold"
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
        <div className="card bg-base-100/80 backdrop-blur-sm shadow-lg">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Info className="w-5 h-5" />
              {t("StreamsHowItWorks")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto overflow-hidden bg-base-200">
                  <Image
                    src="/streams/supertoken-wrap.gif"
                    alt="Wrap Tokens"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">1. {t("StreamsWrapTokens")}</h3>
                <p className="text-sm text-base-content/70">{t("StreamsWrapTokensDescription")}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto overflow-hidden bg-base-200">
                  <Image
                    src="/streams/token-stream.gif"
                    alt="Create Stream"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">2. {t("StreamsCreateStream")}</h3>
                <p className="text-sm text-base-content/70">{t("StreamsCreateStreamDescription")}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto overflow-hidden bg-base-200">
                  <Image
                    src="/streams/real-time-payments.gif"
                    alt="Real Time Payments"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">3. {t("StreamsRealTimePayments")}</h3>
                <p className="text-sm text-base-content/70">{t("StreamsRealTimePaymentsDescription")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-3 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="card-title text-xs md:text-sm">{t("StreamsXOCBalance")}</h3>
                <Wallet className="h-3 w-3 md:h-4 md:w-4 text-base-content/60 flex-shrink-0" />
              </div>
              <div className="text-lg md:text-2xl font-bold truncate">{xocBalance}</div>
              <p className="text-xs text-base-content/60 mt-1">{t("StreamsNativeToken")}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-3 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="card-title text-xs md:text-sm">{t("StreamsSuperXOCBalance")}</h3>
                <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-base-content/60 flex-shrink-0" />
              </div>
              {streamsLoading || incomingStreamsLoading ? (
                <div className="loading loading-spinner loading-sm"></div>
              ) : calculateNetMonthlyFlow() !== 0 ? (
                <div className="text-lg md:text-2xl">
                  <SuperXocFlowingBalance
                    balance={superXocBalance}
                    flowRate={calculateNetFlowRate()}
                    lastUpdated={flowInfo?.lastUpdated || BigInt(Math.floor(Date.now() / 1000))}
                  />
                </div>
              ) : (
                <div className="text-lg md:text-2xl font-bold truncate">{superXocBalance}</div>
              )}
              <p className="text-xs text-base-content/60 mt-1">{t("StreamsStreamableToken")}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-3 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="card-title text-xs md:text-sm">{t("StreamsActiveStreams")}</h3>
                <Users className="h-3 w-3 md:h-4 md:w-4 text-base-content/60 flex-shrink-0" />
              </div>
              <div className="text-lg md:text-2xl font-bold">
                {streamsLoading || incomingStreamsLoading ? (
                  <div className="loading loading-spinner loading-sm"></div>
                ) : streamsError || incomingStreamsError ? (
                  "?"
                ) : (
                  transformedStreams.length + transformedIncomingStreams.length
                )}
              </div>
              <p className="text-xs text-base-content/60 mt-1">{t("StreamsTotalActive")}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-3 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="card-title text-xs md:text-sm">{t("StreamsMonthlyFlow")}</h3>
                <Clock className="h-3 w-3 md:h-4 md:w-4 text-base-content/60 flex-shrink-0" />
              </div>
              <div className="text-lg md:text-2xl font-bold truncate">
                {streamsLoading || incomingStreamsLoading ? (
                  <div className="loading loading-spinner loading-sm"></div>
                ) : (
                  calculateNetMonthlyFlow().toFixed(6)
                )}
              </div>
              <p className="text-xs text-base-content/60 mt-1">{t("StreamsXOCMonth")}</p>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="space-y-4 md:space-y-6">
          {/* Mobile-optimized tabs */}
          <div className="tabs tabs-boxed bg-base-100 shadow-lg py-2 font-medium pb-4 overflow-x-auto">
            <div className="flex min-w-full">
              <button
                className={`tab h-10 flex-1 min-w-0 px-3 md:px-6 py-2 text-sm md:text-base whitespace-nowrap ${
                  activeTab === "overview" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("overview")}
              >
                {t("StreamsOverview")}
              </button>
              <button
                className={`tab h-10 flex-1 min-w-0 px-3 md:px-6 py-2 text-sm md:text-base whitespace-nowrap ${
                  activeTab === "outgoing" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("outgoing")}
              >
                {t("StreamsOutgoingStreams")}
              </button>
              <button
                className={`tab h-10 flex-1 min-w-0 px-3 md:px-6 py-2 text-sm md:text-base whitespace-nowrap ${
                  activeTab === "incoming" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("incoming")}
              >
                {t("StreamsIncomingStreams")}
              </button>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {/* Token Converter - Full width on mobile */}
                <div ref={tokenConverterRef} className="w-full">
                  <TokenConverter />
                </div>

                {/* Quick Actions - Full width on mobile */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body p-4 md:p-6">
                    <h3 className="card-title text-lg md:text-xl">{t("StreamsQuickActions")}</h3>
                    <p className="text-base-content/70 text-sm md:text-base">{t("StreamsQuickActionsDescription")}</p>
                    <div className="space-y-3 mt-4">
                      <button
                        className="btn btn-primary w-full justify-start h-12 md:h-10 text-sm md:text-base"
                        onClick={handleOpenCreateStreamModal}
                      >
                        <Plus className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{t("StreamsCreateNewStream")}</span>
                      </button>
                      <button className="btn btn-outline w-full justify-start h-12 md:h-10 text-sm md:text-base">
                        <Edit className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{t("StreamsEditExistingStream")}</span>
                      </button>
                      <button className="btn btn-outline w-full justify-start h-12 md:h-10 text-sm md:text-base">
                        <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{t("StreamsManageRecipients")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "outgoing" && (
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-base-content">{t("StreamsOutgoingStreams")}</h2>
                <button
                  className="btn btn-primary w-full sm:w-auto h-12 md:h-10 text-sm md:text-base"
                  onClick={handleOpenCreateStreamModal}
                >
                  <Plus className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{t("StreamsNewStream")}</span>
                </button>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-0">
                  {streamsLoading && (
                    <div className="p-4 md:p-6 text-center">
                      <div className="loading loading-spinner loading-lg"></div>
                      <p className="mt-4 text-base-content/70 text-sm md:text-base">Loading outgoing streams...</p>
                    </div>
                  )}

                  {streamsError && (
                    <div className="p-4 md:p-6 text-center">
                      <div className="text-red-500 mb-4">
                        <Info className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold text-sm md:text-base">Error loading streams</p>
                        <p className="text-xs md:text-sm">{streamsError.message}</p>
                      </div>
                      <button
                        className="btn btn-outline btn-sm h-10 text-sm"
                        onClick={() => {
                          useStreamingStore.getState().refreshStreams();
                          useStreamingStore.getState().refreshIncomingStreams();
                        }}
                      >
                        Try Again
                      </button>
                    </div>
                  )}

                  {!streamsLoading && !streamsError && (
                    <div className="divide-y divide-base-200">
                      {transformedStreams.length > 0 ? (
                        transformedStreams.map(stream => (
                          <div key={stream.id} className="p-4 md:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div className="space-y-2 flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="badge badge-secondary text-xs">{stream.status}</span>
                                  <span className="font-medium text-sm md:text-base truncate">{stream.name}</span>
                                </div>
                                <p className="text-xs md:text-sm text-base-content/70 break-all">
                                  To: {stream.to.slice(0, 6)}...{stream.to.slice(-4)}
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-base-content/60">
                                  <span className="font-medium">
                                    {stream.flowRate.toFixed(6)} {t("StreamsXOCMonth")}
                                  </span>
                                  <span className="hidden sm:inline">•</span>
                                  <span>
                                    {t("StreamsStarted")}: {stream.startDate}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                  className="btn btn-outline btn-sm h-10 w-10 p-0"
                                  onClick={() => handleOpenUpdateStreamModal(stream)}
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  className="btn btn-outline btn-sm h-10 w-10 p-0 text-red-500 hover:text-red-700"
                                  onClick={() => handleOpenDeleteStreamModal(stream)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 md:p-6 text-center">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mx-auto">
                              <TrendingUp className="w-8 h-8 text-base-content/40" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg md:text-xl">{t("StreamsNoOutgoingStreams")}</h3>
                              <p className="text-base-content/70 text-sm md:text-base">
                                {address
                                  ? "You don't have any active outgoing streams yet."
                                  : "Connect your wallet to view your streams."}
                              </p>
                            </div>
                            {!address && (
                              <button className="btn btn-outline h-12 md:h-10 text-sm md:text-base">
                                <span className="truncate">{t("StreamsConnectWallet")}</span>
                                <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
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
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-base-content">{t("StreamsIncomingStreams")}</h2>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-0">
                  {incomingStreamsLoading && (
                    <div className="p-4 md:p-6 text-center">
                      <div className="loading loading-spinner loading-lg"></div>
                      <p className="mt-4 text-base-content/70 text-sm md:text-base">Loading incoming streams...</p>
                    </div>
                  )}

                  {incomingStreamsError && (
                    <div className="p-4 md:p-6 text-center">
                      <div className="text-red-500 mb-4">
                        <Info className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold text-sm md:text-base">Error loading incoming streams</p>
                        <p className="text-xs md:text-sm">{incomingStreamsError.message}</p>
                      </div>
                      <button
                        className="btn btn-outline btn-sm h-10 text-sm"
                        onClick={() => {
                          useStreamingStore.getState().refreshStreams();
                          useStreamingStore.getState().refreshIncomingStreams();
                        }}
                      >
                        Try Again
                      </button>
                    </div>
                  )}

                  {!incomingStreamsLoading && !incomingStreamsError && (
                    <div className="divide-y divide-base-200">
                      {transformedIncomingStreams.length > 0 ? (
                        transformedIncomingStreams.map(stream => (
                          <div key={stream.id} className="p-4 md:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div className="space-y-2 flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="badge badge-secondary text-xs">{stream.status}</span>
                                  <span className="font-medium text-sm md:text-base truncate">{stream.name}</span>
                                </div>
                                <p className="text-xs md:text-sm text-base-content/70 break-all">
                                  From: {stream.to.slice(0, 6)}...{stream.to.slice(-4)}
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-base-content/60">
                                  <span className="font-medium">
                                    {stream.flowRate.toFixed(6)} {t("StreamsXOCMonth")}
                                  </span>
                                  <span className="hidden sm:inline">•</span>
                                  <span>
                                    {t("StreamsStarted")}: {stream.startDate}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-xs md:text-sm text-base-content/60 bg-base-200 px-2 py-1 rounded">
                                  Incoming
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 md:p-6 text-center">
                          <div className="space-y-4">
                            <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mx-auto">
                              <TrendingUp className="w-8 h-8 text-base-content/40" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg md:text-xl">{t("StreamsNoIncomingStreams")}</h3>
                              <p className="text-base-content/70 text-sm md:text-base">
                                {address
                                  ? "You don't have any active incoming streams yet."
                                  : "Connect your wallet to view your streams."}
                              </p>
                            </div>
                            {!address && (
                              <button className="btn btn-outline h-12 md:h-10 text-sm md:text-base">
                                <span className="truncate">{t("StreamsConnectWallet")}</span>
                                <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
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
