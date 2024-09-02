"use client";

// import Image from "next/image";
import About from "./components/About/index";
import FeaturesTab from "./components/FeaturesTab";
import TestimonialTitle from "./components/TestimonialTitle";
import Benefits from "./components/benefits";
import { benefitOne, benefitTwo } from "./components/data";
import Faq from "./components/faq";
import Hero from "./components/hero";
import SectionTitle from "./components/sectionTitle";
import Testimonials from "./components/testimonials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="divider"></div>
      <SectionTitle pretitle="This is our pitch" title="Why $XOC?" />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <div className="divider"></div>
      <SectionTitle pretitle="Curious?" title="Explore what you can do with $XOC" />
      <FeaturesTab />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <TestimonialTitle />
      <Testimonials />
      <div className="divider"></div>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        This section is for answering frequently asked questions from the emerging community around $XOC and all that
        jazz.
      </SectionTitle>
      <Faq />
    </>
  );
};

export default Home;
