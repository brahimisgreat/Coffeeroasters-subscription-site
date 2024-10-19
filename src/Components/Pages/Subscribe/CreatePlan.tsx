import React from "react";
import "./CreatePlan.css";

export const CreatePlan = () => {
  return (
    <section className="cp w-full h-96 rounded-lg flex flex-col items-center justify-center gap-10 px-3 ">
      <h2 className="text-4xl font-bold md:text-5xl md:mr-56 lg:text-7xl lg:relative lg:right-52">Create a plan</h2>
      <p className="text-center opacity-80 leading-7  md:w-96 md:text-left md:mr-36 lg:relative lg:right-64 ">
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </section>
  );
};
