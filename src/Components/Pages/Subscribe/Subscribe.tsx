import React from 'react'
import './Subscribe.css'
import { CreatePlan } from './CreatePlan'
import { PickUrPlan } from './PickUrPlan'
import { DrinkCoffee } from './DrinkCoffee'
import { useState } from 'react'


export const Subscribe = () => {
  const [selected5, setSelected5] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [selected4, setSelected4] = useState("");


  return (
    <div className='w-full flex flex-col items-center gap-28 '>
        <CreatePlan />
        <PickUrPlan />
        <DrinkCoffee  setSelected1={ setSelected1} selected1={selected1} setSelected2={ setSelected2} selected2={selected2} setSelected3={ setSelected3} selected3={selected3} setSelected4={ setSelected4} selected4={selected4} setSelected5={ setSelected5} selected5={selected5}/>

        <div className=' '>
          <div className='last w-11/12 p-10 rounded-lg flex flex-col gap-3'>
            <h4 className='font-normal opacity-50'>Order Summary</h4>
            <p className='text-2xl leading-10'>“I drink my coffee as <span className='choice'>{selected1}</span>, with a<span className='choice'>{selected2}</span> type of bean. <span className='choice'>{selected3}</span> ground ala <span className='choice'>{selected4}</span>, sent to me <span className='choice'>{selected5}</span>.”</p>
          </div>
          <button className='btn'>Create your plan</button>
        </div>
    </div>
  )
}
