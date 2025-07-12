"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "~~/app/context/LanguageContext";

const LiquidityInfoExplanation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-2xl shadow-md mb-4">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">{t("LiquidityInfoTitle")}</h1>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">
                {t("LiquidityInfoSubtitle")}
              </h2>
              <p className="text-base lg:text-lg text-primary">{t("LiquidityInfoParagraph1")}</p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">
                {t("LiquidityInfoSubtitle2")}
              </h2>
              <p className="text-base lg:text-lg mb-3 lg:mb-4 text-primary">{t("LiquidityInfoParagraph2")}</p>
              <div className="text-base lg:text-lg text-primary">
                {t("LiquidityInfoStepsTitle")}
                <ol className="list-decimal list-inside text-primary">
                  <li>{t("LiquidityInfoStep1")}</li>
                  <li>{t("LiquidityInfoStep2")}</li>
                  <li>{t("LiquidityInfoStep3")}</li>
                  <li>{t("LiquidityInfoStep4")}</li>
                </ol>
              </div>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">
                {t("LiquidityInfoSubtitle3")}
              </h2>
              <p className="text-base lg:text-lg mb-3 lg:mb-4 text-primary">{t("LiquidityInfoParagraph3")}</p>
              <div className="text-base lg:text-lg text-primary">
                <ul className="list-disc text-primary list-inside mb-3 lg:mb-4">
                  <li>{t("LiquidityInfoPoint1")}</li>
                  <li>{t("LiquidityInfoPoint2")}</li>
                  <li>{t("LiquidityInfoPoint3")}</li>
                  <li>{t("LiquidityInfoPoint4")}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-3 lg:mb-4">
                {t("LiquidityInfoUseTitle")}
              </h2>
              <p className="text-base lg:text-lg text-primary mb-3 lg:mb-4">{t("LiquidityInfoUseSubTitle")}</p>
              <ul className="list-disc text-primary list-inside mb-3 lg:mb-4">
                <li>{t("LiquidityInfoUsePoint1")}</li>
                <li>{t("LiquidityInfoUsePoint2")}</li>
                <li>{t("LiquidityInfoUsePoint3")}</li>
              </ul>
              <p className="text-base lg:text-lg text-primary mt-4">{t("LiquidityClosing")}</p>
            </section>
          </div>

          {/* Right Column - Large Image */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/Open Doodles - Coffee.svg"
                alt="Liquidity Pool"
                width={400}
                height={400}
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityInfoExplanation;
