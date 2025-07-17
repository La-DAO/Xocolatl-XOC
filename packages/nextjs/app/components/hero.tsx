"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import grow from "../../public/grow.png";
import { useTranslation } from "../context/LanguageContext";
import Container from "./container";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container className="flex flex-wrap bg-base-200">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl m-12 leading-snug tracking-tighter">
            <Image
              src={grow}
              width={950}
              height={950}
              className={"object-cover block lg:hidden"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
            <h1 className="text-4xl text-primary font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-inherit">
              {t("title")}
            </h1>
            <p className="text-justify py-5 text-xl leading-normal lg:text-xl dark:text-inherit">{t("description")}</p>
            <div className="my-8 text-justify">
              <h2 className="text-2xl text-primary font-bold dark:text-inherit">{t("aboutName")}</h2>
              <p className="text-lg leading-normal dark:text-inherit">
                {t("aboutDescription")}{" "}
                <Link
                  href="https://chocolateclass.wordpress.com/2020/03/24/cacao-currency-ancient-civilizations-used-chocolate-as-cash/#:~:text=The%20civilizations%20at%20the%20time,from%20the%20Codex%20Mendoza%20(c."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-warning underline"
                >
                  {t("aboutLinkText")}
                </Link>
              </p>
            </div>

            <div className="flex flex-col w-full items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/cdp" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-center text-white bg-primary dark:bg-base-100 rounded-btn hover:bg-base-300 hover:text-neutral dark:hover:bg-warning dark:hover:text-primary hover:ring-4 hover:ring-pink-500 hover:ring-opacity-75 hover:shadow-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 dark:hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] dark:hover:scale-105 dark">
                  {t("mintXocButton")}
                </button>
              </Link>
              <Link href="/lending" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-center text-white bg-primary dark:bg-base-100 rounded-btn hover:bg-base-300 hover:text-neutral dark:hover:bg-warning dark:hover:text-primary hover:ring-4 hover:ring-pink-500 hover:ring-opacity-75 hover:shadow-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 dark:hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] dark:hover:scale-105 dark">
                  {t("earnXocButton")}
                </button>
              </Link>
              <Link href="/liquidity" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-center text-white bg-primary dark:bg-base-100 rounded-btn hover:bg-base-300 hover:text-neutral dark:hover:bg-warning dark:hover:text-primary hover:ring-4 hover:ring-pink-500 hover:ring-opacity-75 hover:shadow-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 dark:hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] dark:hover:scale-105 dark">
                  {t("liquidityButton")}
                </button>
              </Link>
              <Link href="/streams" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-center text-white bg-primary dark:bg-base-100 rounded-btn hover:bg-base-300 hover:text-neutral dark:hover:bg-warning dark:hover:text-primary hover:ring-4 hover:ring-pink-500 hover:ring-opacity-75 hover:shadow-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] hover:scale-105 dark:hover:shadow-[0_0_30px_rgba(210,105,30,0.6)] dark:hover:scale-105 dark">
                  {t("streamsButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={grow}
              width={950}
              height={950}
              className={"object-cover hidden lg:block"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center mt-24 mb-14 px-4 sm:px-0">
          <div className=" text-3xl text-center text-inherit dark:text-inherit mb-12">
            <h2>
              {t("mostLiquidStablecoin")} <span className="">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-inherit dark:text-inherit">
              <Image
                src={"/Base_Wordmark_White.svg"}
                width={140}
                height={100}
                alt="Base Light"
                className="hidden dark:block"
              />
              <Image
                src={"/Base_Wordmark_Black.svg"}
                width={140}
                height={100}
                alt="Base Dark"
                className="dark:hidden"
              />
            </div>
            <div className="pt-1 text-inherit dark:text-inherit">
              <Image
                src={"/PolygonWhite.png"}
                width={200}
                height={100}
                alt="Polygon Light"
                className="hidden dark:block"
              />
              <Image src={"/Polygon.png"} width={200} height={100} alt="Polygon Dark" className="dark:hidden" />
            </div>
            <div className="pt-5 text-inherit dark:text-inherit">
              <Image
                src={"/gnosiswhite.png"}
                width={210}
                height={120}
                alt="Gnosis Light"
                className="hidden dark:block"
              />
              <Image src={"/gnosisblack.png"} width={210} height={120} alt="Gnosis Dark" className="dark:hidden" />
            </div>
            <div className="pt-4 text-inherit dark:text-inherit">
              <Image
                src={"/optimismwhite.png"}
                width={200}
                height={100}
                alt="Optimism Light"
                className="hidden dark:block"
              />
              <Image src={"/optimism.png"} width={200} height={100} alt="Optimism Dark" className="dark:hidden" />
            </div>
            <div className="pt-0.5 text-inherit dark:text-inherit">
              <Image
                src={"/arbitrumdark.png"}
                width={200}
                height={100}
                alt="Arbitrum Light"
                className="hidden dark:block"
              />
              <Image src={"/arbitrumlight.png"} width={200} height={100} alt="Arbitrum Dark" className="dark:hidden" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
