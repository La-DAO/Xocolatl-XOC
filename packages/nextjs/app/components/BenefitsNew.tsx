import Image from "next/image";
// Import the Container component
import benefitOneImg from "../../public/Currency Crush - Payment.svg";
import benefitTwoImg from "../../public/Currency Crush - Value.svg";
import { useTranslation } from "../context/LanguageContext";
import Container from "./container";
import { motion } from "framer-motion";
import {
  CogIcon,
  CubeTransparentIcon,
  EyeDropperIcon,
  FaceFrownIcon,
  HandThumbUpIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

const BenefitsNew: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className={`flex w-full flex-col mt-4 items-center justify-center text-center`}>
        <h2 className="text-sm font-bold tracking-wider text-inherit uppercase">{t("BenefitsComponentTitle")}</h2>
        <p className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-inherit lg:leading-tight lg:text-4xl dark:text-inherit">
          {t("BenefitsComponentSubTitle")}
        </p>
      </Container>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className={`flex items-center justify-center w-full lg:w-1/2`}>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -1000,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <div>
              <Image src={benefitOneImg} width="750" height="750" alt="Benefits" className="object-cover" />
            </div>
          </motion.div>
        </div>

        <div className={`flex flex-wrap items-center w-full lg:w-1/2`}>
          <div>
            <div className="flex flex-col w-full mt-4 pl-6 leading-tight">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-inherit lg:leading-tight lg:text-4xl dark:text-inherit">
                {t("Benefit1Title")}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-snug tracking-tighter text-inherit lg:text-xl xl:text-xl dark:text-inherit">
                {t("Benefit1SubTitle")}
              </p>
            </div>

            <div className="w-full mt-5 leading-snug tracking-tighter">
              <ul className="space-y-4">
                <li className="flex items-start mt-8 pl-8 pr-8 space-x-3">
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-1 bg-base-300 rounded-md w-11 h-11">
                    <FaceFrownIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-inherit dark:text-inherit">{t("Benefit1Bullet1Title")}</h4>
                    <p className="mt-1 text-inherit dark:text-inherit">{t("Benefit1Bullet1Desc")}</p>
                  </div>
                </li>
                <li className="flex items-start mt-8 pl-8 pr-8 space-x-3">
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-1 bg-base-300 rounded-md w-11 h-11">
                    <CogIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-inherit dark:text-inherit">{t("Benefit1Bullet2Title")}</h4>
                    <p className="mt-1 text-inherit dark:text-inherit">{t("Benefit1Bullet2Desc")}</p>
                  </div>
                </li>
                <li className="flex items-start mt-8 pl-8 pr-8 space-x-3">
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-1 bg-base-300 rounded-md w-11 h-11">
                    <EyeDropperIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-inherit dark:text-inherit">{t("Benefit1Bullet3Title")}</h4>
                    <p className="mt-1 text-inherit dark:text-inherit">{t("Benefit1Bullet3Desc")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className={`flex flex-wrap items-center w-full lg:w-1/2`}>
          <div>
            <div className="flex flex-col w-full mt-4 pl-6 leading-tight">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-inherit lg:leading-tight lg:text-4xl dark:text-inherit">
                {t("Benefit2Title")}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-snug tracking-tighter text-inherit lg:text-xl xl:text-xl dark:text-inherit">
                {t("Benefit2SubTitle")}
              </p>
            </div>

            <div className="w-full mt-5 leading-snug tracking-tighter">
              <ul className="space-y-4">
                <li className="flex items-start mt-8 pl-8 pr-8 space-x-3">
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-1 bg-base-300 rounded-md w-11 h-11">
                    <CubeTransparentIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-inherit dark:text-inherit">{t("Benefit2Bullet1Title")}</h4>
                    <p className="mt-1 text-inherit dark:text-inherit">{t("Benefit2Bullet1Desc")}</p>
                  </div>
                </li>
                <li className="flex items-start mt-8 pl-8 pr-8 space-x-3">
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-1 bg-base-300 rounded-md w-11 h-11">
                    <HandThumbUpIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-inherit dark:text-inherit">{t("Benefit2Bullet2Title")}</h4>
                    <p className="mt-1 text-inherit dark:text-inherit">{t("Benefit2Bullet2Desc")}</p>
                  </div>
                </li>
                <li className="flex items-start mt-8 pl-8 pr-8 space-x-3">
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-1 bg-base-300 rounded-md w-11 h-11">
                    <LinkIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-inherit dark:text-inherit">{t("Benefit2Bullet3Title")}</h4>
                    <p className="mt-1 text-inherit dark:text-inherit">{t("Benefit2Bullet3Desc")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0`}>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 1000,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <div>
              <Image src={benefitTwoImg} width="750" height="750" alt="Benefits" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default BenefitsNew;
