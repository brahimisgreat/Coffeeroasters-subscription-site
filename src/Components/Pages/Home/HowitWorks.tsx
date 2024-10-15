import React from "react";
import "./Howitworks.css";

export const HowitWorks = () => {
  return (
    <div className="howitworks text-black text-center flex flex-col gap-24  items-center">
      <h3 className="text-2xl font-black text-gray-500 ">How it works</h3>

      <div className="flex flex-row w-full  gap-56  border-black relative">
        <div className="cir w-8 h-8 border-2 rounded-2xl border-teal-600  "/>
        <div className="w-8 h-8 border-2 rounded-2xl border-teal-600 "/>
        <div className="w-8 h-8 border-2 rounded-2xl border-teal-600 "/>
        <div className="line w-3/4 border border-black absolute top-4 "/>

      </div>

      <div className="flex flex-col gap-14 md:flex-row border ">
        <div className="flex flex-col items-center gap-4  ">
          <span className="text-7xl text-orange-200 font-black md:text-left md:w-full ">01</span>
          <h4 className="text-3xl font-black md:text-left">Pick your coffee</h4>
          <p className="leading-7 md:text-left">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-7xl text-orange-200 font-black md:text-left md:w-full ">02</span>
          <h4 className="text-3xl font-black md:text-left">Pick your coffee</h4>
          <p className="leading-7 md:text-left">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-7xl text-orange-200 font-black md:text-left md:w-full ">03</span>
          <h4 className="text-3xl font-black md:text-left">Pick your coffee</h4>
          <p className="leading-7 md:text-left">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
      </div>
      <button className="bg-teal-600 w-56 h-14 rounded-md md:self-start text-xl text-white font-black">Create your plan</button>
    </div>
  );
};
