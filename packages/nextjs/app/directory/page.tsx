"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../context/LanguageContext";

// Define an interface for the use-case objects
interface UseCase {
  title: string;
  description: string;
  link: string;
  image: string;
  benefits: string[];
  context: string;
  caseStudy1Link: string;
  caseStudy2Link: string;
  caseStudy1Label: string;
  caseStudy2Label: string;
}

const useCases: UseCase[] = [
  {
    title: "CETES",
    description: "Government Bonds",
    link: "/cetes",
    image: "/Miroodles - Color Comp.svg",
    benefits: [
      "Tokenized Government Bonds: Access Mexican government bonds through blockchain technology.",
      "DeFi Integration: Use CETES as collateral in lending protocols and yield farming strategies.",
      "Stable Returns: Benefit from government-backed stable returns in the Mexican DeFi ecosystem.",
      "Liquidity Access: Trade and access liquidity for traditionally illiquid government bonds.",
      "Mexican DeFi Innovation: Participate in the first tokenized government bonds in Mexican DeFi.",
    ],
    context:
      "Tokenized CETES represent a revolutionary step in Mexican DeFi, bringing traditional government bonds to the blockchain. Deposit Mexican government bonds into Alux and earn interest with unprecedented liquidity and DeFi integration.",
    caseStudy1Link: "https://www.etherfuse.com/stablebonds",
    caseStudy2Link: "/lending",
    caseStudy1Label: "Etherfuse Stablebonds",
    caseStudy2Label: "Alux Protocol",
  },
  {
    title: "Everyday Currency",
    description: "Use $XOC as an everyday currency.",
    link: "/currency",
    image: "/Transhumans - Bueno (1).svg",
    benefits: [
      "Stable Value: Use a stable currency for everyday transactions.",
      "Wide Acceptance: Accepted by a growing number of merchants.",
      "Low Fees: Enjoy low transaction fees compared to traditional currencies.",
      "Fast Transactions: Benefit from fast and efficient transactions.",
      "Global Reach: Use $XOC anywhere in the world.",
    ],
    context:
      "As a stable and widely accepted currency, $XOC is perfect for everyday transactions. Enjoy low fees, fast transactions, and global reach with $XOC as your everyday currency.",
    caseStudy1Link: "https://www.chipipay.com/en",
    caseStudy2Link: "https://studio.manifold.xyz/",
    caseStudy1Label: "Chipi Pay",
    caseStudy2Label: "Manifold",
  },
  {
    title: "Governance",
    description: "Participate in governance with $XOC.",
    link: "/governance",
    image: "/Transhumans - Looking Ahead (1).svg",
    benefits: [
      "Have a Voice: Participate in governance decisions and shape the future.",
      "Community Driven: Join a community-driven governance model.",
      "Transparent Processes: Benefit from transparent and fair governance processes.",
      "Influence Development: Influence the development and direction of the protocol.",
      "Earn Rewards: Earn rewards for participating in governance activities.",
    ],
    context:
      "Governance is at the heart of decentralized finance. With $XOC, you can have a voice in governance decisions and help shape the future of the protocol. Discover the power of community-driven governance.",
    caseStudy1Link: "https://app.daohaus.club/dao/0x89/0xd3f99b1cba012d823c59e3d21bb35acd88e07c58",
    caseStudy2Link: "https://app.charmverse.io/ladao/empieza-aqu-257587953545364",
    caseStudy1Label: "DAOHaus",
    caseStudy2Label: "Charmverse",
  },
  {
    title: "Lending",
    description: "Use $XOC for lending purposes.",
    link: "/lending",
    image: "/Transhumans - New Beginnings (1).svg",
    benefits: [
      "Audited and Secure: $XOC is rigorously audited, ensuring that the protocol is secure and reliable.",
      "Robust Mechanisms for Stability: $XOC employs advanced mechanisms such as liquidations and rebalancing bots.",
      "Powered by Alux on Base: We've deployed Alux, our lending market protocol, on Base—a fork of the renowned Aave v3 contracts.",
      "Pioneering the First Mexican Decentralized Lending Market: $XOC is at the forefront of creating the first fully decentralized lending market in Mexico.",
      "Unlock New On-Chain Opportunities: With $XOC, you can earn interest, leverage assets, and participate in DeFi innovations.",
    ],
    context:
      "In the rapidly evolving world of decentralized finance (DeFi), stablecoins have emerged as a cornerstone, providing stability and liquidity in an otherwise volatile market. As the DeFi ecosystem continues to grow, choosing the right stablecoin is crucial for maximizing your financial potential. Here's why $XOC stands out as a top choice for lending.",
    caseStudy1Link: "/lending",
    caseStudy2Link: "https://creditalent.vercel.app/",
    caseStudy1Label: "Alux Protocol",
    caseStudy2Label: "CrediTalent",
  },
  {
    title: "Liquidity Providing",
    description: "Provide liquidity with $XOC.",
    link: "/liquidity",
    image: "/Transhumans - Pacheco (1).svg",
    benefits: [
      "Earn Fees: Provide liquidity and earn fees from trades.",
      "Support the Ecosystem: Help maintain liquidity and stability in the market.",
      "Flexible Options: Choose from various pools to provide liquidity.",
      "Risk Management: Benefit from risk management tools to protect your assets.",
      "Community Driven: Participate in a community-driven liquidity ecosystem.",
    ],
    context:
      "Liquidity providing is essential for maintaining a healthy and efficient market. By providing liquidity with $XOC, you can earn fees and support the ecosystem. Discover the benefits of being a liquidity provider in the DeFi space.",
    caseStudy1Link: "/liquidity",
    caseStudy2Link:
      "https://aerodrome.finance/deposit?token0=0x269caE7Dc59803e5C596c95756faEeBb6030E0aF&token1=0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf&type=0&chain=8453&factory=0x420DD381b31aEf6683db6B902084cB0FFECe40Da",
    caseStudy1Label: "Xoktle",
    caseStudy2Label: "Aerodrome",
  },
  {
    title: "Liquidations",
    description: "Participate in liquidations using $XOC.",
    link: "/liquidations",
    image: "/Transhumans - Kiddo (1).svg",
    benefits: [
      "Profit Opportunities: Earn profits by participating in liquidations.",
      "Market Efficiency: Help maintain market efficiency and stability.",
      "Advanced Tools: Use advanced tools to participate in liquidations effectively.",
      "Secure Protocol: Participate in a secure and audited protocol.",
      "Community Support: Join a community of liquidation participants.",
    ],
    context:
      "Liquidations play a crucial role in maintaining market stability. By participating in liquidations with $XOC, you can seize profit opportunities while contributing to market efficiency. Learn how you can benefit from this dynamic aspect of DeFi.",
    caseStudy1Link: "/case-study/liquidations-1",
    caseStudy2Link: "/case-study/liquidations-2",
    caseStudy1Label: "Liquidations Case Study 1",
    caseStudy2Label: "Liquidations Case Study 2",
  },
  {
    title: "Payments",
    description: "Make payments using $XOC.",
    link: "/payments",
    image: "/Transhumans - Chaotic Good (1).svg",
    benefits: [
      "Fast and Secure: Make fast and secure payments with $XOC.",
      "Low Fees: Enjoy low transaction fees for payments.",
      "Global Accessibility: Make payments anywhere in the world.",
      "User-Friendly: Easy to use for both merchants and consumers.",
      "Innovative Solutions: Benefit from innovative payment solutions.",
    ],
    context:
      "With $XOC, making payments is fast, secure, and cost-effective. Whether you're a merchant or a consumer, $XOC offers innovative solutions for all your payment needs.",
    caseStudy1Link: "https://farcaster.xyz/",
    caseStudy2Link: "/case-study/payments-2",
    caseStudy1Label: "Warplet (Farcaster's Wallet)",
    caseStudy2Label: "Coming soon",
  },
  {
    title: "Subscriptions",
    description: "Create subscriptions with $XOC.",
    link: "/subscriptions",
    image: "/Transhumans - Reflecting (1).svg",
    benefits: [
      "Automated Payments: Automatically receive payments from your subscribers.",
      "Flexible Pricing: Choose from various pricing options.",
      "User-Friendly: Easy to use for both subscribers and creators.",
      "Secure: Use a secure and audited protocol.",
      "Innovative Solutions: Benefit from innovative payment solutions.",
    ],
    context:
      "Subscriptions are a great way to monetize your content. With $XOC, you can create subscriptions and automatically receive payments from your subscribers. Discover the benefits of creating subscriptions with $XOC.",
    caseStudy1Link: "https://app.unlock-protocol.com/",
    caseStudy2Link: "https://hypersub.xyz/",
    caseStudy1Label: "Unlock Protocol",
    caseStudy2Label: "Hypersub",
  },
  {
    title: "Streaming",
    description: "Stream $XOC to earn rewards.",
    link: "/streaming",
    image: "/Open Doodles - Coffee.svg",
    benefits: [
      "Earn Rewards: Stream your $XOC and earn rewards over time.",
      "Secure the Network: Help secure the network by streaming your assets.",
      "Flexible Streaming: Choose from various streaming options.",
      "Community Governance: Participate in community governance decisions.",
      "Long-Term Growth: Benefit from long-term growth opportunities.",
    ],
    context:
      "Streaming $XOC allows you to earn rewards while contributing to network security. Explore the benefits of streaming and how it can lead to long-term growth.",
    caseStudy1Link: "https://app.superfluid.org/",
    caseStudy2Link: "/case-study/streaming-2",
    caseStudy1Label: "Superfluid",
    caseStudy2Label: "Coming soon",
  },
];

const categories = [
  "All",
  "AI Agents",
  "Lending",
  "Liquidity",
  "Liquidations",
  "Currency",
  "Staking",
  "Governance",
  "Payments",
];

const Directory = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  //const [currentSlide, setCurrentSlide] = useState(0);

  const filteredUseCases = useCases.filter(useCase => {
    const matchesCategory = selectedCategory === "All" || useCase.title.includes(selectedCategory);
    const matchesSearch = useCase.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
  };

  const closeModal = () => {
    setSelectedUseCase(null);
    setActiveBenefit(null);
  };

  // const nextSlide = () => {
  //   if (selectedUseCase) {
  //     setCurrentSlide(prev => (prev + 1) % selectedUseCase.benefits.length);
  //   }
  // };

  /*   const prevSlide = () => {
    if (selectedUseCase) {
      setCurrentSlide(prev => (prev - 1 + selectedUseCase.benefits.length) % selectedUseCase.benefits.length);
    }
  }; */

  return (
    <div className="flex w-full mt-4 gap-4">
      {/* Sidebar for categories */}
      <div className="w-1/4 p-4 bg-base-100 rounded-xl text-xl text-primary dark:text-white">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">{t("Categories")}</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer mb-2 ${
                selectedCategory === category ? "font-bold text-3xl text-primary dark:text-white" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {t(category)}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex flex-col w-3/4 gap-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder={t("Search use-cases...")}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2  bg-base-300 dark:bg-base-100 text-white rounded-lg mb-4"
        />

        {/* Use-case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUseCases.map((useCase, index) => (
            <div
              key={index}
              className="card flex flex-col justify-end items-end relative overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-base-300 dark:hover:bg-base-100 dark:hover:text-secondary dark:bg-neutral"
              onClick={() => openModal(useCase)}
              style={{ height: "250px" }}
            >
              <Image src={useCase.image} alt={useCase.title} width={210} height={100} />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h2 className="text-xl font-semibold text-white mb-2">{t(useCase.title)}</h2>
                <p className="text-gray-300">{t(useCase.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedUseCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-4/5 max-w-3xl relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onClick={closeModal} className="absolute text-4xl top-4 right-4 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            {/* Left Column */}
            <div className="flex flex-col">
              <h1 className="text-4xl text-primary font-bold mb-4">{selectedUseCase.title}</h1>
              <p className="mb-4 text-primary">{selectedUseCase.description}</p>
              <div className="relative mb-4">
                <Image
                  src={selectedUseCase.image}
                  alt={selectedUseCase.title}
                  width={400}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              <p className="mb-4 text-primary mt-14">{selectedUseCase.context}</p>
              <hr className="my-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Benefits</h3>
              <div className="flex justify-around mb-4">
                {selectedUseCase.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full cursor-pointer dark:hover:bg-base-100 dark:hover:text-white hover:bg-base-100 hover:text-primary hover:text-xl"
                    onClick={() => setActiveBenefit(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              {activeBenefit !== null && (
                <div className="bg-gray-100 text-sm p-4 rounded-lg shadow-lg dark:text-primary">
                  <p>{selectedUseCase.benefits[activeBenefit]}</p>
                </div>
              )}
              <hr className="my-4" />
              <div className="grid grid-cols-1 gap-4">
                <Link
                  href={selectedUseCase.caseStudy1Link}
                  className="block bg-primary text-white text-center py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-base-100 hover:text-primary dark:hover:bg-neutral dark:hover:text-primary dark:hover:border-2 dark:hover:border-primary"
                  target="_blank"
                >
                  {selectedUseCase.caseStudy1Label}
                </Link>
                <Link
                  href={selectedUseCase.caseStudy2Link}
                  className="block bg-primary text-white text-center py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-base-100 hover:text-primary dark:hover:bg-neutral dark:hover:text-primary dark:hover:border-2 dark:hover:border-primary"
                  target="_blank"
                >
                  {selectedUseCase.caseStudy2Label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Directory;
