"use client";

import React, { useState } from "react";
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Salary Streaming with <span className="text-primary dark:text-blue-400">$XOC</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionary payroll system using continuous money streams. Pay and receive salaries in real-time with
            stablecoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="btn btn-primary btn-lg" onClick={handleOpenCreateStreamModal}>
              <Plus className="w-5 h-5 mr-2" />
              Create Stream
            </button>
            <button className="btn btn-outline btn-lg">
              <ArrowUpDown className="w-5 h-5 mr-2" />
              Wrap Tokens
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">XOC Balance</h3>
                <Wallet className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">0.59</div>
              <p className="text-xs text-gray-500">Native Token</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">SuperXOC Balance</h3>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">9.49</div>
              <p className="text-xs text-gray-500">Streamable Token</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">Active Streams</h3>
                <Users className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-gray-500">Outgoing</p>
            </div>
          </div>

          <div className="card bg-white dark:bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-sm">Monthly Flow</h3>
                <Clock className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold">250.75</div>
              <p className="text-xs text-gray-500">XOC/month</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="card bg-white/80 dark:bg-base-100/80 backdrop-blur-sm shadow-lg">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Info className="w-5 h-5" />
              How Salary Streaming Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <ArrowUpDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold">1. Wrap Tokens</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Convert XOC to SuperXOC to enable streaming functionality
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold">2. Create Stream</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Set up continuous salary payments to employees
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold">3. Real-time Payments</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Money flows continuously, no more monthly payroll hassles
                </p>
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
              Overview
            </button>
            <button
              className={`tab ${activeTab === "outgoing" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("outgoing")}
            >
              Outgoing Streams
            </button>
            <button
              className={`tab ${activeTab === "incoming" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("incoming")}
            >
              Incoming Streams
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
                    <h3 className="card-title">Quick Actions</h3>
                    <p className="text-gray-600 dark:text-gray-300">Manage your salary streams</p>
                    <div className="space-y-3">
                      <button className="btn btn-primary w-full justify-start" onClick={handleOpenCreateStreamModal}>
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Stream
                      </button>
                      <button className="btn btn-outline w-full justify-start">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Existing Stream
                      </button>
                      <button className="btn btn-outline w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Manage Recipients
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Outgoing Streams</h2>
                <button className="btn btn-primary" onClick={handleOpenCreateStreamModal}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Stream
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
                            <span>{stream.flowRate} XOC/month</span>
                            <span>•</span>
                            <span>Started: {stream.startDate}</span>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Incoming Streams</h2>

              <div className="card bg-white dark:bg-base-100 shadow-lg">
                <div className="card-body text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">No Incoming Streams</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        You don&apos;t have any active incoming salary streams yet.
                      </p>
                    </div>
                    <button className="btn btn-outline">
                      Share Your Address
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
