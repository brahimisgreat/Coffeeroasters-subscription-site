import arrow from "../../../assets/plan/desktop/icon-arrow.svg";
import "./QuestionButtons.css";
import { useState } from "react";

export const QuestionButtons = ({question, type, id}) => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);

 

  console.log(active, active1, active2)

  


  return (
    <div id={id} className="qb flex flex-col items-center justify-center gap-6 ">
      <div className="flex items-center justify-between gap-10 md:w-full">
        <h2 className="text-gray-600 text-3xl font-bold">
          {question}
        </h2>

        <button onClick={() => setOpen(!open)}>
          <img src={arrow}  className={open? "w-8 h-3" : 'w-8 h-3 rotate-180'} />
        </button>
      </div>

<div className={!open? "flex flex-col w-full gap-6 md:flex-row " : "hidden"}>
      <div  className={active === 0? "greenblock w-full h-36  md:h-auto  "  : "block w-full h-36 md:h-auto"} onClick={() => setActive(0)} >
        <button className={active ===0? "text-white" : "text-slate-800"}>
            <h3 className="text-2xl font-bold text-left mb-2"  >{type[0].type}</h3>
            <p className="text-left">{type[0].desc}</p>
        </button>
      </div>

      <div  className={active === 1? "greenblock w-full h-36  md:h-auto" : "block w-full h-36 md:h-auto"} onClick={() => setActive1(1)}>
        <button className={active ===1? "text-white" : "text-slate-800"}>
            <h3 className="text-2xl font-bold text-left mb-2"  >{type[1].type}</h3>
            <p className="text-left">{type[1].desc}</p>
        </button>
      </div>

      <div  className={active === 2? "greenblock w-full h-36  md:h-auto" : "block w-full h-36 md:h-auto"} onClick={()=> setActive2(2)}>
        <button className={active ===2? "text-white" : "text-slate-800"}>
            <h3 className="text-2xl font-bold text-left mb-2" >{type[2].type}</h3>
            <p className="text-left">{type[2].desc}</p>
        </button>
      </div>
</div>
    </div>
  );
};
