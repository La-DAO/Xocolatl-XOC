"use client";

import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative m-4 pb-10 pt-8 lg:pb-20">
        <div className="relative mx-auto max-w-full px-4 md:px-8 2xl:px-0">
          {/* <!-- Tab Menues Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-10 flex flex-wrap justify-center rounded-lg bg-base-200 shadow-solid-5 md:flex-nowrap md:items-center lg:gap-4 xl:mb-16 xl:gap-8"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border border-stroke px-4 py-2 md:w-auto md:border-0 xl:px-10 xl:py-4 m-1 ${
                currentTab === "tabOne"
                  ? "border-4 border-accent bg-secondary dark:border-accent dark:bg-secondary rounded-full"
                  : "hover:bg-secondary rounded-full hover:rounded-full"
              }`}
            >
              <div className="flex h-10 w-10 text-2xl items-center justify-center dark:bg-blacksection">
                <p className="font-medium text-primary dark:text-white">01</p>
              </div>
              <div className="text-xl md:w-3/5 lg:w-auto">
                <button className="font-medium text-primary dark:text-white xl:text-regular">
                  Collateral-Debt Positions
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border border-stroke px-4 py-2 md:w-auto md:border-0 xl:px-10 xl:py-4 m-1 ${
                currentTab === "tabTwo"
                  ? "border-4 border-accent bg-secondary dark:border-accent dark:bg-secondary rounded-full"
                  : "hover:bg-secondary rounded-full hover:rounded-full"
              }`}
            >
              <div className="flex h-10 w-10 text-2xl items-center justify-center dark:bg-blacksection">
                <p className="font-medium text-primary dark:text-white">02</p>
              </div>
              <div className="text-xl md:w-3/5 lg:w-auto">
                <button className="font-medium text-primary dark:text-white xl:text-regular">
                  Money Lending Markets
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border border-stroke px-4 py-2 md:w-auto md:border-0 xl:px-10 xl:py-4 m-1 ${
                currentTab === "tabThree"
                  ? "border-4 border-accent bg-secondary dark:border-accent dark:bg-secondary rounded-full"
                  : "hover:bg-secondary rounded-full hover:rounded-full"
              }`}
            >
              <div className="flex h-10 w-10 text-2xl items-center justify-center dark:bg-blacksection">
                <p className="font-medium text-primary dark:text-white">03</p>
              </div>
              <div className="text-xl md:w-3/5 lg:w-auto">
                <button className="font-medium text-primary dark:text-white xl:text-regular">
                  Fully-Interopable Bridging
                </button>
              </div>
            </div>
          </motion.div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-full px-4"
          >
            {featuresTabData.map((feature, key) => (
              <div className={feature.id === currentTab ? "block" : "hidden"} key={key}>
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
