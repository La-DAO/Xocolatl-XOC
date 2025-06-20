"use client";

import React, { useState } from "react";
import { useTranslation } from "../context/LanguageContext";
import CreateStreamModal from "./components/CreateStreamModal";
import TokenConverter from "./components/Supertokens";
import {
  ArrowRight,
  ArrowUpDown,
  Clock,
  Edit,
  Info,
  Pause,
  Play,
  Plus,
  Trash2,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export default function StreamsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("overview");
  const [isCreateStreamModalOpen, setIsCreateStreamModalOpen] = useState(false);

  // Mock data for demonstration
  const mockStreams = [
    {
      id: "1",
      name: "Employee #1",
      to: "0x8765...4321",
      flowRate: 100.25,
      startDate: "1.1.2024",
      status: "Active",
    },
    {
      id: "2",
      name: "Employee #2",
      to: "0x2468...1357",
      flowRate: 150.5,
      startDate: "15.2.2024",
      status: "Active",
    },
  ];

  const handleOpenCreateStreamModal = () => {
    setIsCreateStreamModalOpen(true);
  };

  const handleCloseCreateStreamModal = () => {
    setIsCreateStreamModalOpen(false);
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
              className="btn btn-primary bg-neutral dark:bg-base-100 text-white dark:text-white btn-lg hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 transition-all duration-300 hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white font-semibold"
              onClick={handleOpenCreateStreamModal}
            >
              <Plus className="w-5 h-5 mr-2" />
              {t("StreamsCreateStream")}
            </button>
            <button
              className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-200"
              onClick={() => {
                setActiveTab("overview");

                // Function to find and highlight the token converter
                const findAndHighlightTokenConverter = (attempts = 0) => {
                  const tokenConverter = document.querySelector("[data-token-converter]");

                  if (tokenConverter) {
                    // Scroll to the token converter with smooth behavior
                    tokenConverter.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });

                    // Add a more prominent highlight effect
                    tokenConverter.classList.add(
                      "ring-4",
                      "ring-primary",
                      "ring-opacity-75",
                      "scale-105",
                      "shadow-2xl",
                    );

                    // Remove the highlight effect after 3 seconds
                    setTimeout(() => {
                      tokenConverter.classList.remove(
                        "ring-4",
                        "ring-primary",
                        "ring-opacity-75",
                        "scale-105",
                        "shadow-2xl",
                      );
                    }, 3000);
                  } else if (attempts < 5) {
                    // Retry up to 5 times with increasing delays
                    setTimeout(() => {
                      findAndHighlightTokenConverter(attempts + 1);
                    }, 200 * (attempts + 1));
                  }
                };

                // Start the process after a delay to ensure tab switch completes
                setTimeout(() => {
                  findAndHighlightTokenConverter();
                }, 300);
              }}
            >
              <ArrowUpDown className="w-5 h-5 mr-2" />
              {t("StreamsWrapTokens")}
            </button>
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
              <div className="text-2xl font-bold">0.59</div>
              <p className="text-xs text-gray-500">{t("StreamsNativeToken")}</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">{t("StreamsSuperXOCBalance")}</h3>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">9.49</div>
              <p className="text-xs text-gray-500">{t("StreamsStreamableToken")}</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">{t("StreamsActiveStreams")}</h3>
                <Users className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-gray-500">{t("StreamsOutgoing")}</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">{t("StreamsMonthlyFlow")}</h3>
                <Clock className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">250.75</div>
              <p className="text-xs text-gray-500">{t("StreamsXOCMonth")}</p>
            </div>
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
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <ArrowUpDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold">1. {t("StreamsWrapTokens")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("StreamsWrapTokensDescription")}</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold">2. {t("StreamsCreateStream")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("StreamsCreateStreamDescription")}</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold">3. {t("StreamsRealTimePayments")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("StreamsRealTimePaymentsDescription")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="space-y-6">
          <div className="tabs tabs-boxed bg-white dark:bg-base-100 shadow-lg">
            <button
              className={`tab ${activeTab === "overview" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              {t("StreamsOverview")}
            </button>
            <button
              className={`tab ${activeTab === "outgoing" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("outgoing")}
            >
              {t("StreamsOutgoingStreams")}
            </button>
            <button
              className={`tab ${activeTab === "incoming" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("incoming")}
            >
              {t("StreamsIncomingStreams")}
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Token Converter */}
                <TokenConverter />

                {/* Quick Actions */}
                <div className="card bg-white dark:bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title">{t("StreamsQuickActions")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t("StreamsQuickActionsDescription")}</p>
                    <div className="space-y-3">
                      <button className="btn btn-primary w-full justify-start" onClick={handleOpenCreateStreamModal}>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("StreamsOutgoingStreams")}</h2>
                <button className="btn btn-primary" onClick={handleOpenCreateStreamModal}>
                  <Plus className="w-4 h-4 mr-2" />
                  {t("StreamsNewStream")}
                </button>
              </div>

              <div className="card bg-white dark:bg-base-100 shadow-lg">
                <div className="card-body p-0">
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {mockStreams.map(stream => (
                      <div key={stream.id} className="p-6 flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="badge badge-secondary">{stream.status}</span>
                            <span className="font-medium">{stream.name}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">To: {stream.to}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>
                              {stream.flowRate} {t("StreamsXOCMonth")}
                            </span>
                            <span>•</span>
                            <span>
                              {t("StreamsStarted")}: {stream.startDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="btn btn-outline btn-sm">
                            <Pause className="w-4 h-4" />
                          </button>
                          <button className="btn btn-outline btn-sm">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="btn btn-outline btn-sm">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "incoming" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("StreamsIncomingStreams")}</h2>

              <div className="card bg-white dark:bg-base-100 shadow-lg">
                <div className="card-body text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{t("StreamsNoIncomingStreams")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t("StreamsNoIncomingStreamsDescription")}</p>
                    </div>
                    <button className="btn btn-outline">
                      {t("StreamsShareYourAddress")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Stream Modal */}
      <CreateStreamModal isOpen={isCreateStreamModalOpen} onClose={handleCloseCreateStreamModal} />
    </div>
  );
}
