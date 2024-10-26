import React from "react";
import arrow from "../../../assets/plan/desktop/icon-arrow.svg";
import { useState } from "react";
import "./DrinkCoffee.css";

export const DrinkCoffee = () => {
  const [open, setOpen] = useState(false);
  const [selected5, setSelected5] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [selected4, setSelected4] = useState("");

  console.log(selected1 );

  return (
    <section className="text-black flex flex-col gap-20 ">
      <div className=" flex flex-col gap-10">
        <div className="flex justify-between gap-10 items-center w-80">
          <h2 className="text-2xl text-gray-500 font-bold w-56">
            How do you drink your coffee?
          </h2>
          <img
            className={!open ? "" : "rotate-180"}
            src={arrow}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={open? "flex" : "hidden"}>
          <div className="flex flex-col gap-4" >
            <button className={selected1 ==="capsule"? "greenbutt flex flex-col gap-2":"butt text-black flex flex-col gap-2"} value={selected1} onClick={()=>setSelected1("capsule")}>
              <h3 className="text-2xl font-bold">Capsule</h3>
              <p className="text-left">
                Compatible with Nespresso systems and similar brewers
              </p>
            </button>
            <button  className={selected1 ==="filter"? "greenbutt flex flex-col gap-2":"butt text-black flex flex-col gap-2"} value={selected1} onClick={() => setSelected1("filter")}>
              <h3 className="text-2xl font-bold">Filter</h3>
              <p className="text-left">
              For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </button>
            <button  className={selected1 ==="espresso"? "greenbutt flex flex-col gap-2":"butt text-black flex flex-col gap-2"} value={selected1} onClick={()=> setSelected1("espresso")}>
              <h3 className="text-2xl font-bold">Espresso</h3>
              <p className="text-left">
              Dense and finely ground beans for an intense, flavorful experience
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-10">
        <div className="flex justify-between gap-10 items-center w-80">
          <h2 className="text-2xl text-gray-500 font-bold w-56">
            What type of coffee?
          </h2>
          <img
            className={!open ? "" : "rotate-180"}
            src={arrow}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={open ? "flex" : "hidden"}>
          <div className="flex flex-col gap-4">
            <button  className={selected2 ==="single orgin"? "greenbutt flex flex-col gap-2":"butt text-black flex flex-col gap-2"} value={selected2} onClick={()=> setSelected2("single orgin")}>
              <h3 className="text-2xl font-bold">Single Origin</h3>
              <p className="text-left">
              Distinct, high quality coffee from a specific family-owned farm
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Decaf</h3>
              <p className="text-left">
              Just like regular coffee, except the caffeine has been removed
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Blended</h3>
              <p className="text-left">
              Combination of two or three dark roasted beans of organic coffees
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-10">
        <div className="flex justify-between gap-10 items-center w-80">
          <h2 className="text-2xl text-gray-500 font-bold w-56">
            How much would you like?
          </h2>
          <img
            className={!open ? "" : "rotate-180"}
            src={arrow}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={open ? "flex" : "hidden"}>
          <div className="flex flex-col gap-4">
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">250g</h3>
              <p className="text-left">
              Perfect for the solo drinker. Yields about 12 delicious cups.
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">500g</h3>
              <p className="text-left">
              Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">1000g</h3>
              <p className="text-left">
              Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-10">
        <div className="flex justify-between gap-10 items-center w-80">
          <h2 className="text-2xl text-gray-500 font-bold w-56">
            Want us to grind them?
          </h2>
          <img
            className={!open ? "" : "rotate-180"}
            src={arrow}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={open ? "flex" : "hidden"}>
          <div className="flex flex-col gap-4">
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Wholebean</h3>
              <p className="text-left">
              Best choice if you cherish the full sensory experience
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Filter</h3>
              <p className="text-left">
              For drip or pour-over coffee methods such as V60 or Aeropress
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Cafetiere</h3>
              <p className="text-left">
              Course ground beans specially suited for french press coffee
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-10">
        <div className="flex justify-between gap-10 items-center w-80">
          <h2 className="text-2xl text-gray-500 font-bold w-56">
            How often should we deliver?
          </h2>
          <img
            className={!open ? "" : "rotate-180"}
            src={arrow}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={open ? "flex" : "hidden"}>
          <div className="flex flex-col gap-4">
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Every week</h3>
              <p className="text-left">
              $7.20 per shipment. Includes free first-class shipping.
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Every 2 weeks</h3>
              <p className="text-left">
              $9.60 per shipment. Includes free priority shipping.
              </p>
            </button>
            <button className="butt text-black flex flex-col gap-2 ">
              <h3 className="text-2xl font-bold">Every month</h3>
              <p className="text-left">
              $12.00 per shipment. Includes free priority shipping.
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
