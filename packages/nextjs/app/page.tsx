"use client";

// import Image from "next/image";
import FeaturesTab from "../app/components/FeaturesTab";
import Benefits from "../app/components/benefits";
import Cta from "../app/components/cta";
import { benefitOne, benefitTwo } from "../app/components/data";
import Faq from "../app/components/faq";
import Hero from "../app/components/hero";
import SectionTitle from "../app/components/sectionTitle";
import Testimonials from "../app/components/testimonials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="divider"></div>
      <SectionTitle pretitle="This is our pitch" title="Why $XOC?" />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/*       <SectionTitle pretitle="¡Mira el Video!" title="Sumérgete en el mundo de $XOC">
        <div>
          <p>¿Te preguntas cómo se lleva a cabo la magia de $XOC? ¿Quieres entender cómo funciona este innovador protocolo y cómo puedes comenzar a usarlo? ¡No busques más! Te presentamos un video que te llevará paso a paso a través del fascinante mundo de $XOC.</p>
      
          <h2>Descubre la magia de $XOC:</h2>
          
          <ul>
            <li>Aprende cómo funciona el protocolo.</li>
            <li>Descubre las posibilidades que ofrece.</li>
            <li>Prepárate para ser parte de la revolución financiera.</li>
            <li>¡Prepárate para una experiencia visual que te dejará con ganas de más!</li>
          </ul>
        </div>
      </SectionTitle> */}
      <div className="divider"></div>
      <SectionTitle pretitle="Curious?" title="Explore what you can do with $XOC" />
      <FeaturesTab />
      <div className="divider"></div>
      <SectionTitle pretitle="¡Inspiring testimonials!" title="Explore the voices of the $XOC community">
        Discover authentic testimonials from those who are part of the vibrant community building and using $XOC. From
        transformative experiences to success stories, here you&apos;ll find the inspiration you need to join this
        exciting financial revolution.
      </SectionTitle>
      <Testimonials />
      <div className="divider"></div>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        This section is for answering frequently asked questions from the emerging community around $XOC and all that
        jazz.
      </SectionTitle>
      <Faq />
      <div className="divider mt-24"></div>
      <Cta />
    </>
  );
};

export default Home;
