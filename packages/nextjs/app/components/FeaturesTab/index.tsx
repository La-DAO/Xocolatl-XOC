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
      <section className="relative m-20 pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
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
            className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border bg-base-300 shadow-solid-5 dark:border-strokedark dark:bg-neutral dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke border-accent px-6 py-2 last:border-0 dark:border-accent  md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-neutral-content"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 text-3xl items-center justify-center dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-neutral-content dark:text-accent">01</p>
              </div>
              <div className=" text-3xl md:w-3/5 lg:w-auto">
                <button className="font-medium text-neutral-content dark:text-accent xl:text-regular">
                  Collateral-Debt Positions
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-neutral-content"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 text-3xl items-center justify-centerdark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-neutral-content dark:text-accent">02</p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-3xl font-medium text-neutral-content dark:text-accent xl:text-regular">
                  Money Lending Markets
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-neutral-content"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 text-3xl items-center justify-center dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-neutral-content dark:text-accent">03</p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-3xl font-medium text-neutral-content dark:text-accent xl:text-regular">
                  Fully Interopable Bridging
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
            className="animate_top ml-8 mx-auto max-w-c-1154"
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
