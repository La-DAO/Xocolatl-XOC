import React from "react";
import { useTranslation } from "../context/LanguageContext";
import Container from "./container";

const TestimonialTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="flex w-full flex-col mt-4 items-center justify-center text-center">
      <div className="text-sm font-bold tracking-wider text-inherit uppercase">{t("testimonialPreTitle")}</div>
      <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-inherit lg:leading-tight lg:text-4xl dark:text-inherit">
        {t("testimonialTitle")}
      </h2>
      <p className="max-w-2xl py-4 text-lg leading-normal text-inherit lg:text-xl xl:text-xl dark:text-inherit">
        {t("testimonialDescription")}
      </p>
    </Container>
  );
};

export default TestimonialTitle;
