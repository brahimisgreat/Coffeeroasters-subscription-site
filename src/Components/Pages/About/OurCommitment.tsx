import React from "react";
import "./OurCommitment.css";
import hero from "../../../assets/about/mobile/image-commitment.jpg";

export const OurCommitment = () => {
  return (
    <section className="flex flex-col gap-8 md:flex-row md:gap-12 lg:justify-evenly ">
      <div>
        <img className="hero h-96 w-full rounded-lg md:w-72 md:h-full " src={hero} />
      </div>

      <div className="flex flex-col gap-6 lg:justify-center ">
        <h2 className="text-black text-4xl font-bold">Our commitment</h2>
        <p className="oc text-black opacity-80 text-center md:w-80 md:text-left ">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
};
