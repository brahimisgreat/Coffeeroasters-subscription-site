import React from "react";
import hero from '../../../assets/about/mobile/image-quality.jpg'
import heromd from '../../../assets/about/tablet/image-quality.jpg'

import './Quality.css'

export const Quality = () => {
  return (
    <section className="quality relative flex flex-col justify-end gap-2 md:w-full">
      <div className="relative bottom-16">
        <h3 className="text-3xl text-center font-bold mb-10 ">Uncompromising quality</h3>
        <p className="text-center opacity-80">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>

      <div className="absolute -top-14 right-9 md:left-14 md:-top-28">
        <img src={hero} className="w-64 rounded-lg md:hidden" />
        <img src={heromd} className=" rounded-lg hidden md:block" />
      </div>
    </section>
  );
};
