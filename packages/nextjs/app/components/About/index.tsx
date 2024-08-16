import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] ml-32">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="ml-8 mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-neutral sm:text-[40px] sm:leading-[1.2]">
                  Xocolatl Smart Contracts Are The Entrance Into{" "}
                  <span className="bg-green-700 rounded-lg text-base-100 dark:text-neutral">Mexican DeFi</span>
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-neutral">
                  You deposit your asset into our House of Reserve contract, which then tells the Assets Accountant the
                  reserve amount of the asset. The Assets Accountant then allows you to mints up to ~80% of your
                  asset&rsquo;s value in $XOC to your wallet. $XOC is created (minted) at the current MXN/USD rate which
                  can then be used in the DeFi ecosystem.
                  <br /> <br />
                  This allows builders, creators, and entrepreneurs to leverage their assets to create new value and
                  opportunities.
                </p>

                <a
                  href="https://github.com/La-DAO/xocolatl-contracts/blob/main/whitepaper/xocolatl_whitepaper.md"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-secondary dark:bg-neutral dark:text-primary dark:hover:bg-primary dark:hover:text-white"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}>
                    <Image
                      src="/eth-mex-min.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-left"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/ethglobalmex-min.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">Aug.21.2022</span>
                      <span className="block text-base font-semibold text-white mt-2">
                        Xocolatl Contracts were deployed
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        During ETH Global Mexico
                      </span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <svg
                          width="106"
                          height="144"
                          viewBox="0 0 106 144"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="-67"
                            y="47.127"
                            width="113.378"
                            height="131.304"
                            transform="rotate(-42.8643 -67 47.127)"
                            fill="url(#paint0_linear_1416_214)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_214"
                              x1="-10.3111"
                              y1="47.127"
                              x2="-10.3111"
                              y2="178.431"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <svg
                          width="130"
                          height="97"
                          viewBox="0 0 130 97"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="0.86792"
                            y="-6.67725"
                            width="155.563"
                            height="140.614"
                            transform="rotate(-42.8643 0.86792 -6.67725)"
                            fill="url(#paint0_linear_1416_215)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_215"
                              x1="78.6495"
                              y1="-6.67725"
                              x2="78.6495"
                              y2="133.937"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <svg
                          width="175"
                          height="104"
                          viewBox="0 0 175 104"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="175.011"
                            y="108.611"
                            width="101.246"
                            height="148.179"
                            transform="rotate(137.136 175.011 108.611)"
                            fill="url(#paint0_linear_1416_216)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_216"
                              x1="225.634"
                              y1="108.611"
                              x2="225.634"
                              y2="256.79"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical m-20">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 ml-10 md:text-end">
                  <time className="font-mono italic">August 21st, 2022</time>
                  <div className="text-lg font-black">
                    Xocolatl was born at{" "}
                    <Link href="https://ethglobal.com/events/ethmexico" className="underline">
                      ETHGlobal Mexico
                    </Link>{" "}
                    at{" "}
                    <Link href="https://www.proyectospublicos.com/" className="underline">
                      Proyecto Publico Prim
                    </Link>
                  </div>
                  During this hackathon, the Ethereum community decended in Mexico City to build the future of finance
                  and during a gruesome 48 hours of hacking, the Xocolatl team deployed the first version of the
                  Xocolatl protocol. Initially the stablecoin was deployed with the same address to Polygon, Optimism,
                  Gnosis Chain and Arbitrum, although only Polygon was the focus at the start.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">May 19th, 2023</time>
                  <div className="text-lg font-black">
                    Cross-XOC is deployed using the Connext (now{" "}
                    <Link href="https://www.everclear.org/" className="underline">
                      Everclear
                    </Link>
                    ) tool-kit
                  </div>
                  Everclear is an innovative public good mechanism designed for cross-chain intent settlement. Everclear
                  supports permissionless expansion to new chains and rollups, enabling any application to onboard users
                  from other chains. The architecture involves three key messages— Intent, Fill, and
                  Settlement—processed across chains by offchain agents, ensuring liquidity and efficient settlement.
                  through Hub and Spoke contracts, with solvers executing and settling intents. The system leverages
                  system leverages Hyperlane for transport, providing a flexible and secure cross-chain settlement
                  framework.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end ml-10">
                  <time className="font-mono italic">July 29th 2024</time>
                  <div className="text-lg font-black">Alux Money Markets Come Alive!</div>
                  The Alux Money Market is a decentralized money market protocol that enables users to lend and borrow
                  XOC and other blue-chip tokens in order to leverage their assets. The protocol is designed to be a
                  secure, transparent, and efficient way to lend and borrow assets, with a focus on user experience and
                  ease of use. The Alux Money Market is built on the Xocolatl protocol, which is Mexico&rsquo;s first
                  decentralized stablecoin, aimed at building the new financial system for Mexico.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">Next Step</time>
                  <div className="text-lg font-black">The Possibilities Are Endless</div>
                  You can use $XOC as you please, to pay for goods and services, to lend, to borrow, to trade, to
                  invest, to create, to build, to grow, to dream. You can provide liquidity on blue-chip protocols like
                  Uniswap or Balancer, or you can use it as remittance to send money to your family in Mexico.
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
