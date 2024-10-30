import React from "react";
import "./CreateYourPlan.css";
import { Link } from "react-router-dom";

export const CreateYourPlan = () => {
  return (
    <section className="create-your-plan rounded-xl  font-black flex flex-col items-center justify-center gap-6 ">
      <div className="billy flex flex-col items-center gap-6 md:relative md:right-28 md:justify-start ">
        <h1 className="w-64 text-center text-4xl md:text-5xl md:w-80 md:self-start lg:text-7xl lg:w-7/12 lg:text-left ">
          Great coffee made simple.
        </h1>
        <p className="w-64 font-normal opacity-80 text-center md:w-96 md:text-left  lg:self-start ">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to='subscribe'>
          <button className="bg-teal-600 hover:bg-teal-300 w-56 h-14 rounded-md md:self-start">
            Create your plan
          </button>
        </Link>
      </div>
    </section>
  );
};
