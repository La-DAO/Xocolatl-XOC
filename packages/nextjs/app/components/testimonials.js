import React from "react";
import Image from "next/image";
import Acid from "../../public/acidlazzer.png";
import Chuy from "../../public/chuypunk.png";
import Jorge from "../../public/jorge.png";
import Container from "./container";
import { useTranslation } from "~~/app/context/LanguageContext";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-neutral px-14 rounded-2xl py-14 dark:bg-neutral dark:text-secondary">
            <p className="text-2xl leading-normal text-base-100 dark:text-inherit">
              {t("quote1")} <Mark>{t("quote1Highlight")}</Mark> {t("quote1Cont")}
            </p>
            <Avatar image={Jorge} name="Jorge Magni" title={t("title1")} />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-neutral px-14 rounded-2xl py-14 dark:bg-neutral dark:text-secondary">
            <p className="leading-normal text-base-100 dark:text-inherit">
              {t("quote2")} <Mark>{t("quote2Highlight")}</Mark> {t("quote2Cont")}
            </p>
            <Avatar image={Chuy} name="Chuy Garcia" title={t("title2")} />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-neutral px-14 rounded-2xl py-14 dark:bg-neutral dark:text-secondary">
            <p className="text-2xl leading-normal text-base-100 dark:text-inherit">
              <Mark>{t("quote3Highlight")}</Mark> {t("quote3Cont")}
            </p>
            <Avatar image={Acid} name="AcidLazzer" title={t("title3")} />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={props.image} width="40" height="40" alt="Avatar" placeholder="blur" />
      </div>
      <div>
        <div className="text-lg font-medium text-base-100 dark:text-inherit">{props.name}</div>
        <div className="text-base-100 dark:text-inherit">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
