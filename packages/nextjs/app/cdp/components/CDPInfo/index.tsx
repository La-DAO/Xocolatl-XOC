import React from "react";
import Image from "next/image";
import { useTranslation } from "~~/app/context/LanguageContext";

const CDPInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-4/5 m-auto mt-8 p-6 bg-white flex flex-col lg:flex-row rounded-2xl shadow-md mb-4">
      <div className="w-full lg:w-3/5 mb-8 lg:mb-0 lg:mr-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center lg:text-left text-primary">
          {t("CDPInfoTitle")}
        </h1>

        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">{t("CDPInfoSubtitle")}</h2>
          <p className="text-base lg:text-lg text-primary">{t("CDPParagraph1")}</p>
        </section>

        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">{t("CDPInfoSubtitle2")}</h2>
          <p className="text-base lg:text-lg mb-3 lg:mb-4 text-primary">{t("CDPParagraph2")}</p>
          <div className="text-base lg:text-lg text-primary">
            {t("CDPInfoStepsTitle")}
            <ol className="list-decimal list-inside text-primary">
              <li>{t("CDPInfoStep1")}</li>
              <li>{t("CDPInfoStep2")}</li>
              <li>{t("CDPInfoStep3")}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-3 lg:mb-4">{t("CDPInfoUseTitle")}</h2>
          <p className="text-base lg:text-lg text-primary mb-3 lg:mb-4">{t("CDPInfoUseSubTitle")}</p>
          <ul className="list-disc text-primary list-inside mb-3 lg:mb-4">
            <li>{t("CDPInfoPoint1")}</li>
            <li>{t("CDPInfoPoint2")}</li>
            <li>{t("CDPInfoPoint3")}</li>
          </ul>
          <p className="text-base lg:text-lg text-primary mt-4">{t("CDPClosing")}</p>
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
