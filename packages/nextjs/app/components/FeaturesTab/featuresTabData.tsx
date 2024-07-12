import { FeatureTab } from "../../../types/assets/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "CPD Management",
    desc1: `A CDP allows you to leverage your most precious assets to borrow stablecoins, in our case $XOC. You can use XOC to buy more assets, pay off debt, or whatever you want.`,
    desc2: `$XOC is ERC20 so it is also compatible with the DeFi ecosystem. You can use it to create Liquidity Pools, farm yield or even use it as collateral for other loans.`,
    image: "/Currency Crush - Profit.svg",
    imageDark: "/Currency Crush - Profit.svg",
    button: "Mint $XOC",
  },
  {
    id: "tabTwo",
    title: "Money Lending Markets",
    desc1: `Our money markets are a fork of the Aave contracts, which are the most battle-tested and resilient smart contracts in DeFi.`,
    desc2: `You can lend your $XOC to earn interest or borrow $XOC by providing collateral. The interest rates are determined by the supply and demand of the market.`,
    image: "/Currency Crush - Loan.svg",
    imageDark: "/Currency Crush - Loan.svg",
    button: "Lend $XOC",
  },
  {
    id: "tabThree",
    title: "Fully Interoperable with most popular L2s",
    desc1: `Our contracts are deployed on the Arbitrum, Base, Ethereum Mainnet, Polygon, Gnosis Chain, and Optimism networks. This allows you to use $XOC on any of these networks.`,
    desc2: `You can move your $XOC between networks using our bridge contracts built on top of Connext.`,
    image: "/Currency Crush - Password.svg",
    imageDark: "/Currency Crush - Password.svg",
    button: "Bridge $XOC",
  },
];

export default featuresTabData;
