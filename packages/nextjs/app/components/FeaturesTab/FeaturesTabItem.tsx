import React from "react";
import Image from "next/image";
import { FeatureTab } from "../../../types/assets/featureTab";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, button, image, imageDark, link } = featureTab; // Destructure link property

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-19">
      <div className="md:w-1/2 p-6 lg:p-12 tracking-tighter leading-snug">
        <h2 className="mb- text-2xl lg:text-3xl font-bold text-primary dark:text-white xl:text-sectiontitle2">
          {title}
        </h2>
        <p className="mb-4 text-base lg:text-lg pr-8 lg:pr-16">{desc1}</p>
        <p className="text-base lg:text-lg pr-8 lg:pr-16 mb-6">{desc2}</p>
        <button
          onClick={() => window.open(link, "_blank")}
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
        >
          {button}
        </button>
      </div>
      <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2 mt-8">
        <Image src={image} alt={title} fill className="dark:hidden" />
        <Image src={imageDark} alt={title} fill className="hidden dark:block" />
      </div>
    </div>
  );
};

export default FeaturesTabItem;
