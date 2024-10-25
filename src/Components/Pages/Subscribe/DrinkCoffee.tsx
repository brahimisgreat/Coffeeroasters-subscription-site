import React from "react";
import arrow from '../../../assets/plan/desktop/icon-arrow.svg'
import { useState } from "react";

export const DrinkCoffee = () => {

  const [open , setOpen] = useState(false)

  return (
    <section className="text-black">
      <div>
        <div className="flex justify-between gap-10 items-center">
          <h2 className="text-2xl text-gray-500 font-bold w-56">How do you drink your coffee?</h2>
          <img  src={arrow}/>
        </div>

        <div>
          <button>

          
            <h3>Step 2</h3>
            <p>What type of coffee?</p>
          
          </button>
        </div>
      </div>
    </section>
  );
};
