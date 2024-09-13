"use client";

// import Image from "next/image";
import About from "./components/About/index";
import BenefitsNew from "./components/BenefitsNew";
import FAQs from "./components/FAQs";
import FeaturesTab from "./components/FeaturesTab";
import TestimonialTitle from "./components/TestimonialTitle";
import Hero from "./components/hero";
import SectionTitle from "./components/sectionTitle";
import Testimonials from "./components/testimonials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="divider"></div>
      <BenefitsNew />
      <div className="divider"></div>
      <SectionTitle pretitle="Curious?" title="Explore what you can do with $XOC" />
      <FeaturesTab />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <TestimonialTitle />
      <Testimonials />
      <div className="divider"></div>
      <FAQs />
    </>
  );
};

export default Home;
