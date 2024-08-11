import React from "react";
import Image from "next/image";
import Acid from "../../public/acidlazzer.png";
import Chuy from "../../public/chuypunk.png";
import Jorge from "../../public/jorge.png";
import Container from "./container";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-neutral px-14 rounded-2xl py-14 dark:bg-neutral dark:text-secondary">
            <p className="text-2xl leading-normal text-base-100 dark:text-inherit">
            $XOC is one of the first proposals to <Mark>revolutionize DeFi in Mexico.</Mark> Integrating a stable Mexican peso currency into the web ecosystem3.
            </p>
            <Avatar image={Jorge} name="Jorge Magni" title="Kairos Research" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-neutral px-14 rounded-2xl py-14 dark:bg-neutral dark:text-secondary">
            <p className=" leading-normal text-base-100 dark:text-inherit">
              The Mexican peso has been a global example of strength and resilience against the US Dollar. $XOC{" "}
              <Mark>unleashes this power in the DeFi ecosystem</Mark>, giving the rest of the world access to our
              economy, but more importantly creating a relationship between ETH and MXN, a vision that belongs to only
              those who are able to see the future that awaits.
            </p>
            <Avatar image={Chuy} name="Chuy Garcia" title="DappNode" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-neutral px-14 rounded-2xl py-14 dark:bg-neutral dark:text-secondary">
            <p className="text-2xl leading-normal text-base-100 dark:text-inherit">
              <Mark>$XOC is Mexico&rsquo;s best tool</Mark> to build a decentralized financial system. Financial empowerment is the key to a better future for all Mexicans.
            </p>
            <Avatar image={Acid} name="AcidLazzer" title="Ethereum Mexico" />
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
