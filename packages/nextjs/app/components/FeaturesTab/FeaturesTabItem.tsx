import React from "react";
import Image from "next/image";
import { FeatureTab } from "../../../types/assets/featureTab";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, button, image, imageDark, link } = featureTab; // Destructure link property

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto px-6 lg:px-8">
      <div className="md:w-1/2 p-6 lg:p-8 tracking-tighter leading-snug">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary dark:text-white xl:text-sectiontitle2 mb-4">
          {title}
        </h2>
        <p className="mb-4 text-base lg:text-lg lg:pr-12">{desc1}</p>
        <p className="text-base lg:text-lg lg:pr-12 mb-6">{desc2}</p>
        <button
          onClick={() => window.open(link, "_blank")}
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
        >
          {button}
        </button>
      </div>
      <div className="relative mx-auto hidden aspect-[562/366] max-w-[450px] md:block md:w-1/2 mt-8">
        <Image src={image} alt={title} fill className="dark:hidden" />
        <Image src={imageDark} alt={title} fill className="hidden dark:block" />
      </div>
    </div>
  );
};

export default FeaturesTabItem;
