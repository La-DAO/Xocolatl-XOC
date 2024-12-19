import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "~~/app/context/LanguageContext";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="mb-8 max-w-full text-center lg:text-left lg:mb-12 lg:max-w-none">
                <div className="w-full h-auto sm:hidden mb-4">
                  <Image
                    src="/eth-mex-min.jpg"
                    alt={t("imageAlt1")}
                    width={600}
                    height={400}
                    className="object-cover object-left mx-auto"
                  />
                </div>
                <h2 className="mb-4 text-2xl font-bold leading-snug text-dark dark:text-neutral sm:text-3xl sm:leading-tight">
                  {t("aboutTitle")}{" "}
                  <span className="bg-green-700 rounded-lg text-base-100 dark:text-neutral">{t("aboutHighlight")}</span>
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-neutral sm:text-base sm:leading-normal">
                  {t("aboutDesc")}
                </p>

                <a
                  href="https://github.com/La-DAO/xocolatl-contracts/blob/main/whitepaper/xocolatl_whitepaper.md"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-secondary dark:bg-neutral dark:text-primary dark:hover:bg-primary dark:hover:text-white"
                  rel="noopener noreferrer"
                >
                  {t("knowMore")}
                </a>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}>
                    <Image
                      src="/eth-mex-min.jpg"
                      alt={t("imageAlt1")}
                      fill
                      className="h-full w-full object-cover object-left"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/ethglobalmex-min.jpg"
                      alt={t("imageAlt2")}
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8 md:flex">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">{t("eventDate1")}</span>
                      <span className="block text-base font-semibold text-white mt-2">{t("eventTitle1")}</span>
                      <span className="block text-base font-medium text-white text-opacity-70">{t("eventDesc1")}</span>
                    </div>
                    <div>{/* Background SVGs */}</div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical m-20">
              <li>
                <div className="timeline-middle">{/* SVG icon */}</div>
                <div className="timeline-start mb-10 ml-10 md:text-end">
                  <time className="font-mono italic">{t("timelineDate1")}</time>
                  <div className="text-lg font-black">
                    {t("timelineTitle1")}{" "}
                    <Link href="https://ethglobal.com/events/ethmexico" className="underline">
                      ETHGlobal Mexico
                    </Link>{" "}
                    {t("at")}{" "}
                    <Link href="https://www.proyectospublicos.com/" className="underline">
                      Proyecto Publico Prim
                    </Link>
                  </div>
                  {t("timelineDesc1")}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">{/* SVG icon */}</div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">{t("timelineDate2")}</time>
                  <div className="text-lg font-black">{t("timelineTitle2")}</div>
                  {t("timelineDesc2")}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">{/* SVG icon */}</div>
                <div className="timeline-start mb-10 md:text-end ml-10">
                  <time className="font-mono italic">{t("timelineDate3")}</time>
                  <div className="text-lg font-black">{t("timelineTitle3")}</div>
                  {t("timelineDesc3")}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">{/* SVG icon */}</div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">{t("timelineDate4")}</time>
                  <div className="text-lg font-black">
                    {t("timelineTitle4")}{" "}
                    <Link href="https://devfolio.co/projects/credittalent-42f6" className="underline">
                      - CrediTalent.
                    </Link>{" "}
                  </div>

                  {t("timelineDesc4")}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">{/* SVG icon */}</div>
                <div className="timeline-start mb-10 md:text-end ml-10">
                  <time className="font-mono italic">{t("timelineDate5")}</time>
                  <div className="text-lg font-black">{t("timelineTitle5")}</div>
                  {t("timelineDesc5")}
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
