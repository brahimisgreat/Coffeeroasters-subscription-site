import React from "react";
import arrow from "../../../assets/plan/desktop/icon-arrow.svg";
import { useState } from "react";
import "./DrinkCoffee.css";

export const DrinkCoffee = ({selected5}) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  // const [selected5, setSelected5] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [selected4, setSelected4] = useState("");

  return (
    <section className="text-black flex flex-col gap-20 md:w-full lg:flex-row  ">

      <div className="hidden lg:text-2xl lg:font-bold lg:flex lg:flex-col ">
        <a href="#hdc" className="text-gray-500 border-gray-400 border-b-2 w-60  py-4 ">01 <span className="ml-4 text-slate-700">perferences</span> </a>
        <a href="#wtc" className="text-gray-500 border-gray-400 border-b-2 w-60  py-4 ">02 <span className="ml-4 text-slate-700">Bean Type</span> </a>
        <a href="#hwl" className="text-gray-500 border-gray-400 border-b-2 w-60  py-4 ">03 <span className="ml-4 text-slate-700">Quantity</span> </a>
        <a href="#wgt" className="text-gray-500 border-gray-400 border-b-2 w-60  py-4 ">04 <span className="ml-4 text-slate-700">Grind Option</span> </a>
        <a href="#hsd" className="text-gray-500  w-60  py-4 ">05 <span className="ml-4 text-slate-700">Deliveries</span> </a>
      </div>

      <div className="text-black flex flex-col gap-20 md:w-full  ">
        <div id="hdc" className=" flex flex-col gap-10  ">
          <div className="flex justify-between gap-10 items-center w-80 md:w-full ">
            <h2 className="text-2xl text-gray-500 font-bold w-56 md:w-auto md:text-4xl">
              How do you drink your coffee?
            </h2>
            <img
              className={!open ? "" : "rotate-180"}
              src={arrow}
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className={open ? "flex" : "hidden"}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
              <button
                className={
                  selected1 === "capsule"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2"
                }
                value={selected1}
                onClick={() => setSelected1("capsule")}
              >
                <h3 className="text-2xl font-bold">Capsule</h3>
                <p className="text-left">
                  Compatible with Nespresso systems and similar brewers
                </p>
              </button>
              <button
                className={
                  selected1 === "filter"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2"
                }
                value={selected1}
                onClick={() => setSelected1("filter")}
              >
                <h3 className="text-2xl font-bold">Filter</h3>
                <p className="text-left">
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </button>
              <button
                className={
                  selected1 === "espresso"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2"
                }
                value={selected1}
                onClick={() => setSelected1("espresso")}
              >
                <h3 className="text-2xl font-bold">Espresso</h3>
                <p className="text-left">
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </button>
            </div>
          </div>
        </div>

        <div id="wtc" className="flex flex-col gap-10">
          <div className="flex justify-between gap-10 items-center w-80 md:w-full">
            <h2 className="text-2xl text-gray-500 font-bold w-56 md:text-4xl md:w-full ">
              What type of coffee?
            </h2>
            <img
              className={!open2 ? "" : "rotate-180"}
              src={arrow}
              onClick={() => setOpen2(!open2)}
            />
          </div>

          <div className={open2 ? "flex" : "hidden"}>
            <div className="flex flex-col gap-4 md:flex-row">
              <button
                className={
                  selected2 === "single orgin"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2"
                }
                value={selected2}
                onClick={() => setSelected2("single orgin")}
              >
                <h3 className="text-2xl font-bold">Single Origin</h3>
                <p className="text-left">
                  Distinct, high quality coffee from a specific family-owned
                  farm
                </p>
              </button>
              <button
                className={
                  selected2 === "decaf"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected2}
                onClick={() => setSelected2("decaf")}
              >
                <h3 className="text-2xl font-bold">Decaf</h3>
                <p className="text-left">
                  Just like regular coffee, except the caffeine has been removed
                </p>
              </button>
              <button
                className={
                  selected2 === "blended"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected2}
                onClick={() => setSelected2("blended")}
              >
                <h3 className="text-2xl font-bold">Blended</h3>
                <p className="text-left">
                  Combination of two or three dark roasted beans of organic
                  coffees
                </p>
              </button>
            </div>
          </div>
        </div>

        <div id="hwl" className=" flex flex-col gap-10">
          <div className="flex justify-between gap-10 items-center w-80 md:w-full">
            <h2 className="text-2xl text-gray-500 font-bold w-56 md:text-4xl md:w-full">
              How much would you like?
            </h2>
            <img
              className={!open3 ? "" : "rotate-180"}
              src={arrow}
              onClick={() => setOpen3(!open3)}
            />
          </div>

          <div className={open3 ? "flex" : "hidden"}>
            <div className="flex flex-col gap-4 md:flex-row">
              <button
                className={
                  selected3 === "250g"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected3}
                onClick={() => setSelected3("250g")}
              >
                <h3 className="text-2xl font-bold">250g</h3>
                <p className="text-left">
                  Perfect for the solo drinker. Yields about 12 delicious cups.
                </p>
              </button>
              <button
                className={
                  selected3 === "500g"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected3}
                onClick={() => setSelected3("500g")}
              >
                <h3 className="text-2xl font-bold">500g</h3>
                <p className="text-left">
                  Perfect option for a couple. Yields about 40 delectable cups.
                </p>
              </button>
              <button
                className={
                  selected3 === "1000g"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected3}
                onClick={() => setSelected3("1000g")}
              >
                <h3 className="text-2xl font-bold">1000g</h3>
                <p className="text-left">
                  Perfect for offices and events. Yields about 90 delightful
                  cups.
                </p>
              </button>
            </div>
          </div>
        </div>
        

        <div id="wgt" className=" flex flex-col gap-10">
          <div className="flex justify-between gap-10 items-center w-80 md:w-full">
            <h2 className="text-2xl text-gray-500 font-bold w-56 md:text-4xl md:w-full">
              Want us to grind them?
            </h2>
            <img
              className={!open4 ? "" : "rotate-180"}
              src={arrow}
              onClick={() => setOpen4(!open4)}
            />
          </div>

          <div className={open4 ? "flex" : "hidden"}>
            <div className="flex flex-col gap-4 md:flex-row">
              <button
                className={
                  selected4 === "wholebean"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected4}
                onClick={() => setSelected4("wholebean")}
              >
                <h3 className="text-2xl font-bold">Wholebean</h3>
                <p className="text-left">
                  Best choice if you cherish the full sensory experience
                </p>
              </button>
              <button
                className={
                  selected4 === "filter"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected4}
                onClick={() => setSelected4("filter")}
              >
                <h3 className="text-2xl font-bold">Filter</h3>
                <p className="text-left">
                  For drip or pour-over coffee methods such as V60 or Aeropress
                </p>
              </button>
              <button
                className={
                  selected4 === "cafetiere"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected4}
                onClick={() => setSelected4("cafetiere")}
              >
                <h3 className="text-2xl font-bold">Cafetiere</h3>
                <p className="text-left">
                  Course ground beans specially suited for french press coffee
                </p>
              </button>
            </div>
          </div>
        </div>

        <div id="hsd" className=" flex flex-col gap-10 ">
          <div className="flex justify-between gap-10 items-center w-80  md:w-full">
            <h2 className="text-2xl text-gray-500 font-bold w-56 md:text-4xl md:w-full">
              How often should we deliver?
            </h2>
            <img
              className={!open5 ? "" : "rotate-180"}
              src={arrow}
              onClick={() => setOpen5(!open5)}
            />
          </div>

          <div className={open5 ? "flex" : "hidden"}>
            <div className="flex flex-col gap-4 md:flex-row">
              <button
                className={
                  selected5 === "every week"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected5}
                onClick={() => setSelected5("every week")}
              >
                <h3 className="text-2xl font-bold">Every week</h3>
                <p className="text-left">
                  $7.20 per shipment. Includes free first-class shipping.
                </p>
              </button>
              <button
                className={
                  selected5 === "every 2 weeks"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected5}
                onClick={() => setSelected5("every 2 weeks")}
              >
                <h3 className="text-2xl font-bold">Every 2 weeks</h3>
                <p className="text-left">
                  $9.60 per shipment. Includes free priority shipping.
                </p>
              </button>
              <button
                className={
                  selected5 === "every month"
                    ? "greenbutt flex flex-col gap-2"
                    : "butt text-black flex flex-col gap-2 "
                }
                value={selected5}
                onClick={() => setSelected5("every month")}
              >
                <h3 className="text-2xl font-bold">Every month</h3>
                <p className="text-left">
                  $12.00 per shipment. Includes free priority shipping.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
