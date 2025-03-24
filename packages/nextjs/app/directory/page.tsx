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
}

const useCases: UseCase[] = [
  {
    title: "Lending",
    description: "Use $XOC for lending purposes.",
    link: "/lending",
    image: "/Transhumans - Groceries.svg",
  },
  {
    title: "Liquidity Providing",
    description: "Provide liquidity with $XOC.",
    link: "/liquidity",
    image: "/Transhumans - Plants.svg",
  },
  {
    title: "Liquidations",
    description: "Participate in liquidations using $XOC.",
    link: "/liquidations",
    image: "/Transhumans - Gamestation.svg",
  },
  {
    title: "Everyday Currency",
    description: "Use $XOC as an everyday currency.",
    link: "/currency",
    image: "/Transhumans - Bueno.svg",
  },
  { title: "Staking", description: "Stake $XOC to earn rewards.", link: "/staking", image: "/Transhumans - Rogue.svg" },
  {
    title: "Governance",
    description: "Participate in governance with $XOC.",
    link: "/governance",
    image: "/Transhumans - Pacheco.svg",
  },
  {
    title: "Payments",
    description: "Make payments using $XOC.",
    link: "/payments",
    image: "/Transhumans - Chaotic Good.svg",
  },
];

const categories = ["All", "Lending", "Liquidity", "Liquidations", "Currency", "Staking", "Governance", "Payments"];

const Directory = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);

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
  };

  return (
    <div className="flex w-4/5 m-auto gap-4">
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
          className="p-2 border bg-base-300 border-gray-300 rounded-lg mb-4"
        />

        {/* Use-case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUseCases.map((useCase, index) => (
            <div
              key={index}
              className="card flex flex-col justify-end items-end relative overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-secondary"
              onClick={() => openModal(useCase)}
            >
              <img src={useCase.image} alt={useCase.title} className="w-fit h-60 object-cover" />
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
          <div className="bg-white rounded-lg p-8 w-3/4 max-w-2xl relative">
            <button onClick={closeModal} className="absolute text-4xl top-4 right-4 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <h1 className="text-4xl font-bold mb-4">{selectedUseCase.title}</h1>
            <p className="mb-4">{selectedUseCase.description}</p>
            {/* Carousel placeholder */}
            <div className="mb-4">
              <Image
                src={selectedUseCase.image}
                alt={selectedUseCase.title}
                width={600}
                height={300}
                objectFit="cover"
              />
            </div>
            {/* Additional links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href={selectedUseCase.link} className="block bg-primary text-white text-center py-2 rounded-lg">
                Apply {selectedUseCase.title}
              </Link>
              {/* Add more links as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Directory;
