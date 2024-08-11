import benefitOneImg from "../../public/Currency Crush - Payment.svg";
import benefitTwoImg from "../../public/Currency Crush - Value.svg";
import {
  CogIcon,
  CubeTransparentIcon,
  EyeDropperIcon,
  FaceFrownIcon,
  HandThumbUpIcon,
  LinkIcon
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "Problem Statement: Corruption, Bureaucracy, and Crime",
  desc: "Mexico's economic growth is hindered by three major issues:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Government Corruption",
      desc: "Mexico is ranked 124 out of 180 countries in the Corruption Perceptions Index. Corruption is a major issue that affects the country's economic growth and development.",
      icon: <FaceFrownIcon />,
    },
    {
      title: "Slow Bureaucracy",
      desc: "Mexico is ranked 60 out of 190 countries in the World Bank's Ease of Doing Business Index. Slow bureaucracy is a major issue that affects the country's economic growth and development.",
      icon: <CogIcon />,
    },
    {
      title: "Organized Crime",
      desc: "Mexico is ranked 140 out of 163 countries in the Global Peace Index. Organized crime is a major issue that affects the country's economic growth and development.",
      icon: <EyeDropperIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Solution: Programmable Money",
  desc: "New problems require new technology solutions. At La DAO, we are building a decentralized financial system that is more inclusive, transparent, and accessible to everyone.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Transparency and Security",
      desc: "Our platform is built on blockchain technology, which ensures that all transactions are secure, transparent, and immutable. We use smart contracts to automate processes and eliminate the need for intermediaries, reducing the risk of fraud and corruption.",
      icon: <CubeTransparentIcon />,
    },
    {
      title: "Fostering Innovation",
      desc: "We are creating a community of developers, entrepreneurs, and investors who are passionate about building a better financial future. Our platform provides tools and resources to help them develop and launch new projects, products, and services that will benefit society as a whole.",
      icon: <HandThumbUpIcon />,
    },
    {
      title: "Community Owned and Governed",
      desc: "Our platform is governed by a decentralized autonomous organization (DAO) that is owned and controlled by its members. This ensures that all decisions are made in the best interest of the community and that everyone has a say in how the platform is run.",
      icon: <LinkIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
