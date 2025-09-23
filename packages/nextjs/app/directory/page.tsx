"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

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
  categories: string[];
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
    categories: ["Lending", "Liquidity"],
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
    caseStudy1Link: "https://servicios.chipipay.com/services/recargas",
    caseStudy2Link: "https://studio.manifold.xyz/",
    caseStudy1Label: "Chipi Pay",
    caseStudy2Label: "Manifold",
    categories: ["Currency", "Payments"],
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
    categories: ["Governance"],
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
    categories: ["Lending"],
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
    categories: ["Liquidity"],
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
    categories: ["Liquidations", "Lending"],
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
    categories: ["Payments", "Currency"],
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
    categories: ["Payments"],
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
    categories: ["Streaming", "Payments"],
  },
];

const categories = [
  "All",
  "Lending",
  "Liquidity",
  "Liquidations",
  "Currency",
  "Governance",
  "Payments",
  "Streaming",
];

const Directory = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  //const [currentSlide, setCurrentSlide] = useState(0);

  const filteredUseCases = useCases.filter(useCase => {
    const matchesCategory = selectedCategory === "All" || useCase.categories.includes(selectedCategory);
    const matchesSearch =
      useCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setActiveBenefit(0);
  };

  const closeModal = useCallback(() => {
    setSelectedUseCase(null);
    setActiveBenefit(null);
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedUseCase) {
      window.addEventListener("keydown", onEsc);
    }
    return () => window.removeEventListener("keydown", onEsc);
  }, [selectedUseCase, closeModal]);

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
    <div className="flex flex-col w-full mt-4 gap-4 mx-[4px]">
      {/* Category chips */}
      <div className="w-full p-3 bg-base-100 rounded-xl">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-xl font-bold text-primary dark:text-white">{t("Categories")}</h2>
          <input
            type="text"
            placeholder={t("Search use-cases...")}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="p-2 bg-base-300 dark:bg-base-100 text-white rounded-lg w-full sm:w-60"
            aria-label="Search"
          />
        </div>
        <div className="mt-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white border-primary"
                    : "bg-base-200 border-base-300 text-primary"
                }`}
              >
                {t(category)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredUseCases.map((useCase, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-xl cursor-pointer bg-neutral group"
            onClick={() => openModal(useCase)}
            style={{ height: "220px", minHeight: "220px" }}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src={useCase.image} alt={useCase.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-base-200/70 to-base-100/90" />
            <div className="relative z-10 h-full flex flex-col justify-end p-4">
              <div className="flex gap-2 mb-2 flex-wrap">
                {useCase.categories.slice(0, 3).map((cat, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-base-200 text-primary border border-base-300">
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="text-lg lg:text-xl font-semibold text-white mb-1">{t(useCase.title)}</h2>
              <p className="text-gray-200 text-sm line-clamp-2">{t(useCase.description)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedUseCase && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="bg-white rounded-xl p-4 lg:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative grid grid-cols-1 lg:grid-cols-2 gap-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute text-2xl lg:text-4xl top-2 lg:top-4 right-2 lg:right-4 text-gray-500 hover:text-gray-700 z-10"
                aria-label="Close"
              >
                &times;
              </button>
              {/* Left Column */}
              <div className="flex flex-col">
                <h1 className="text-2xl lg:text-4xl text-primary font-bold mb-2 lg:mb-4">{selectedUseCase.title}</h1>
                <p className="mb-2 lg:mb-4 text-primary text-sm lg:text-base">{selectedUseCase.description}</p>
                <div className="relative mb-2 lg:mb-4">
                  <Image
                    src={selectedUseCase.image}
                    alt={selectedUseCase.title}
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col">
                <p className="mb-2 lg:mb-4 text-primary text-sm lg:text-base lg:mt-14">{selectedUseCase.context}</p>
                <hr className="my-2 lg:my-4" />
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 lg:mb-4">Benefits</h3>
                <div className="flex justify-start mb-2 lg:mb-4 flex-wrap gap-2">
                  {selectedUseCase.benefits.map((_, index) => (
                    <button
                      key={index}
                      className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border text-sm lg:text-base ${
                        activeBenefit === index
                          ? "bg-primary text-white border-primary"
                          : "bg-base-100 text-primary border-base-300"
                      }`}
                      onClick={() => setActiveBenefit(index)}
                      aria-label={`Benefit ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                {activeBenefit !== null && (
                  <div className="bg-gray-100 text-xs lg:text-sm p-3 lg:p-4 rounded-lg shadow-lg dark:text-primary mb-2 lg:mb-4">
                    <p>{selectedUseCase.benefits[activeBenefit]}</p>
                  </div>
                )}
                <hr className="my-2 lg:my-4" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4">
                  <Link
                    href={selectedUseCase.link}
                    className="block bg-base-100 text-primary text-center py-2 px-4 rounded-lg border border-base-300 hover:bg-base-200 transition"
                  >
                    Open use case
                  </Link>
                  <Link
                    href={selectedUseCase.caseStudy1Link}
                    className="block bg-primary text-white text-center py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-base-100 hover:text-primary dark:hover:bg-neutral dark:hover:text-primary dark:hover:border-2 dark:hover:border-primary text-sm lg:text-base"
                    target="_blank"
                  >
                    {selectedUseCase.caseStudy1Label}
                  </Link>
                  <Link
                    href={selectedUseCase.caseStudy2Link}
                    className="block bg-primary text-white text-center py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-base-100 hover:text-primary dark:hover:bg-neutral dark:hover:text-primary dark:hover:border-2 dark:hover:border-primary text-sm lg:text-base"
                    target="_blank"
                  >
                    {selectedUseCase.caseStudy2Label}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Directory;
