import React from "react";
import "./Howitworks.css";
import { Link } from "react-router-dom";

export const HowitWorks = () => {
  return (
    <div className="howitworks text-black text-center flex flex-col gap-24 md:gap-16   items-center ">
      <h3 className="text-2xl font-black text-gray-500 md:text-left md:w-full lg:ml-72">How it works</h3>

      

      <div className="flex flex-col gap-14 md:flex-row  lg:items-center ">
        <div className="flex flex-col items-center gap-4 lg:items-start lg:w-72 lg:gap-9">
          <span className="text-7xl text-orange-200 font-black md:text-left md:w-full ">01</span>
          <h4 className="text-3xl font-black md:text-left  border  ">Pick your coffee</h4>
          <p className="leading-7 md:text-left ">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start lg:w-72 lg:gap-9">
          <span className="text-7xl text-orange-200 font-black md:text-left md:w-full ">02</span>
          <h4 className="text-3xl font-black md:text-left">Pick your coffee</h4>
          <p className="leading-7 md:text-left">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start lg:w-72 lg:gap-9">
          <span className="text-7xl text-orange-200 font-black md:text-left md:w-full ">03</span>
          <h4 className="text-3xl font-black md:text-left">Pick your coffee</h4>
          <p className="leading-7 md:text-left">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
      </div>
      <Link to="/subscribe">
      <button className="bg-teal-600 hover:bg-teal-300 w-56 h-14 rounded-md md:self-start text-xl text-white font-black lg:ml-36">Create your plan</button>
      </Link>
    </div>
  );
};
