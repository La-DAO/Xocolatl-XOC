import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import SectionTitle from "@/app/components/Common/SectionTitle";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="Collateralized-Debt Position"
          paragraph="There are many benefits as to why you should use our platform. Here are some of the features that we provide."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
