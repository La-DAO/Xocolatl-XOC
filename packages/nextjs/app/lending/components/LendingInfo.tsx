import React from "react";
import { useTranslation } from "~~/app/context/LanguageContext";

const LendingInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md mb-4">
      <div className="w-full p-2">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center lg:text-left text-primary">
          {t("LendingInfoTitle")}
        </h1>

        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">{t("LendingInfoSubtitle")}</h2>
          <p className="text-base lg:text-lg text-primary">{t("LendingInfoParagraph1")}</p>
        </section>

        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">{t("LendingInfoSubtitle2")}</h2>
          <p className="text-base lg:text-lg mb-3 lg:mb-4 text-primary">{t("LendingInfoParagraph2")}</p>
          <div className="text-base lg:text-lg text-primary">
            {t("LendingInfoStepsTitle")}
            <ol className="list-decimal list-inside text-primary">
              <li>{t("LendingInfoStep1")}</li>
              <li>{t("LendingInfoStep2")}</li>
              <li>{t("LendingInfoStep3")}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-3 lg:mb-4">{t("LendingInfoUseTitle")}</h2>
          <p className="text-base lg:text-lg text-primary mb-3 lg:mb-4">{t("LendingInfoUseSubTitle")}</p>
          <ul className="list-disc text-primary list-inside mb-3 lg:mb-4">
            <li>{t("LendingInfoPoint1")}</li>
            <li>{t("LendingInfoPoint2")}</li>
            <li>{t("LendingInfoPoint3")}</li>
          </ul>
          <p className="text-base lg:text-lg text-primary mt-4">{t("LendingClosing")}</p>
        </section>
      </div>
    </div>
  );
};

export default LendingInfo;
