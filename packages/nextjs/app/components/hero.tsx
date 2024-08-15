"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import grow from "../../public/grow.png";
import Container from "./container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap bg-base-200">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl m-12 text-justify leading-snug tracking-tighter">
            <h1 className="text-4xl text-primary font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-inherit">
              Mexico&rsquo;s MXN
              <br /> Stablecoin: XOC
            </h1>
            <p className="py-5 text-xl leading-normal lg:text-xl dark:text-inherit">
              As a programmable digital currency equivalent to the Mexican peso, $XOC ensures traceable and transparent
              transactions, making corruption harder.
            </p>
            <div className="my-8">
              <h2 className="text-2xl text-primary font-bold dark:text-inherit">About the name</h2>
              <p className="text-lg leading-normal dark:text-inherit">
                The word &rsquo;Xocolatl&rsquo; comes from the Nahuatl, a Pre-Hispanic word, refers to cacao beans. It
                is well documented that cocoa beans were used by Mayans, Olmecs and primarily Aztecs as a form of
                currency.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/lending">
                <button className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-btn hover:bg-base-100 hover:text-neutral">
                  Try $XOC
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
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center mt-24 mb-14">
          <div className=" text-3xl text-center text-inherit dark:text-inherit mb-12">
            <h2>
              $XOC is the <span className="">most liquid stablecoin</span> for the MXN currency.
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
