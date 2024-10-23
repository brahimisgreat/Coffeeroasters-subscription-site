import React, { useState } from "react";
import arrow from "../../../assets/plan/desktop/icon-arrow.svg";
import "./QuestionButtons.css";

export const QuestionButtons = ({question, type}) => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(true);
  console.log(type)


  return (
    <div className="qb flex flex-col items-center justify-center gap-10">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-600 text-3xl font-bold">
          {question}
        </h2>

        <button onClick={() => setOpen(!open)}>
          <img src={arrow}  className={open? "w-8 h-3" : 'w-8 h-3 rotate-180'} />
        </button>
      </div>

      <div className="block w-full h-36">
        <button className="text-slate-800">
            <h3 className="text-2xl font-bold text-left mb-2" >{type[0].type}</h3>
            <p className="text-left">{'Compatible with Nespresso systems and similar brewers'}</p>
        </button>
      </div>
    </div>
  );
};
