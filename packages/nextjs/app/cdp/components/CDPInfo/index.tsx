import React from "react";
import Image from "next/image";

const CDPInfo: React.FC = () => {
  return (
    <div className="w-4/5 m-auto mt-8 p-6 bg-white flex flex-col lg:flex-row rounded-2xl shadow-md mb-4">
      <div className="w-full lg:w-3/5 mb-8 lg:mb-0 lg:mr-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center lg:text-left text-primary">
          Understanding the CDP Mechanism
        </h1>

        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">How the Contracts Work</h2>
          <p className="text-base lg:text-lg text-primary">
            Our platform leverages a set of smart contracts to manage the deposit, minting, and withdrawal processes.
            When you deposit assets into our smart contract, these assets are securely held and serve as collateral for
            minting new stablecoins. The smart contracts ensure the safety and integrity of your assets by enforcing
            strict rules and conditions.
          </p>
        </section>

        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">
            The Mechanism of Depositing and Minting
          </h2>
          <p className="text-base lg:text-lg mb-3 lg:mb-4 text-primary">
            When you deposit assets into the smart contract, you are essentially locking up collateral. Based on the
            value of this collateral, you can mint a corresponding amount of stablecoins. For example, if you deposit 1
            ETH worth $2000, and the collateralization ratio is 150%, you can mint up to $1333 worth of stablecoins. The
            system constantly monitors the value of the collateral to ensure it remains sufficient to back the minted
            stablecoins.
          </p>
          <div className="text-base lg:text-lg text-primary">
            Here’s how it works step-by-step:
            <ol className="list-decimal list-inside text-primary">
              <li>You deposit your assets into the smart contract.</li>
              <li>
                The smart contract calculates the maximum amount of stablecoins you can mint based on the collateral
                value and the required collateralization ratio.
              </li>
              <li>You mint the stablecoins and they are credited to your account.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-3 lg:mb-4">Using Your Stablecoins</h2>
          <p className="text-base lg:text-lg text-primary mb-3 lg:mb-4">
            Once you have minted your stablecoins, you can use them in various ways:
          </p>
          <ul className="list-disc text-primary list-inside mb-3 lg:mb-4">
            <li>Trade them on supported exchanges to buy other cryptocurrencies or assets.</li>
            <li>Use them in DeFi protocols for lending, borrowing, or earning interest.</li>
            <li>Spend them directly if they are accepted as a payment method.</li>
          </ul>
          <p className="text-base lg:text-lg text-primary mt-4">
            The flexibility of stablecoins allows you to manage your assets more effectively, providing liquidity and
            stability in volatile markets.
          </p>
        </section>
      </div>

      <div className="w-full lg:w-3/5 flex items-center justify-center">
        <Image
          src="/Transhumans-Experiments.svg"
          alt="about image"
          className="w-full h-auto max-w-[100%] lg:max-w-[80%]"
          width={800}
          height={750}
        />
      </div>
    </div>
  );
};

export default CDPInfo;
