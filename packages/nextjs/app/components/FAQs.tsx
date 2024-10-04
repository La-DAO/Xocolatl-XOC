import React from "react";
import { useTranslation } from "../context/LanguageContext";
import Container from "./container";

const FAQs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container className="flex w-full flex-col mt-4 items-center justify-center text-center">
      <h2 className="text-sm font-bold tracking-wider text-inherit uppercase">{t("faqPreTitle")}</h2>
      <p className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-inherit lg:leading-tight lg:text-4xl dark:text-inherit">
        {t("faqTitle")}
      </p>
      <p className="mt-3 text-lg text-inherit max-w-2xl">{t("faqDescription")}</p>
      <div className="mb-5 w-full max-w-2xl">
        <details className=" bg-base-100 p-4 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 m-4">
          <summary className="outline-none cursor-pointer focus:underline focus:text-inherit font-semibold marker:text-inherit group-open:before:rotate-90  before:origin-center relative  before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
            {t("faqQuestion1")}
          </summary>
          <hr className="my-2 scale-x-150" />
          <div className="text-sm sm:text-base m-4 -mt-2 p-4 bg-base-100">{t("faqAnswer1")}</div>
        </details>

        <details className=" bg-base-100 p-4 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 m-4">
          <summary className="outline-none cursor-pointer focus:underline focus:text-inherit font-semibold marker:text-inherit group-open:before:rotate-90  before:origin-center relative  before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
            {t("faqQuestion2")}
          </summary>
          <hr className="my-2 scale-x-150" />
          <div className="text-sm sm:text-base m-4 -mt-2 p-4 bg-base-100">{t("faqAnswer2")}</div>
        </details>

        <details className=" bg-base-100 p-4 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500">
          <summary className="outline-none cursor-pointer focus:underline focus:text-inherit font-semibold marker:text-inherit group-open:before:rotate-90  before:origin-center relative  before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
            {t("faqQuestion3")}
          </summary>
          <hr className="my-2 scale-x-150" />
          <div className="text-sm sm:text-base m-4 -mt-2 p-4 bg-base-100">{t("faqAnswer3")}</div>
        </details>

        <details className=" bg-base-100 p-4 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 m-4">
          <summary className="outline-none cursor-pointer focus:underline focus:text-inherit font-semibold marker:text-inherit group-open:before:rotate-90  before:origin-center relative  before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
            {t("faqQuestion4")}
          </summary>
          <hr className="my-2 scale-x-150" />
          <div className="text-sm sm:text-base m-4 -mt-2 p-4 bg-base-100">{t("faqAnswer4")}</div>
        </details>
      </div>
    </Container>
  );
};

export default FAQs;
