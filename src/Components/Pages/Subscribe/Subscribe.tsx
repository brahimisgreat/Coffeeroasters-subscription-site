import React from 'react'
import './Subscribe.css'
import { CreatePlan } from './CreatePlan'
import { PickUrPlan } from './PickUrPlan'
import { DrinkCoffee } from './DrinkCoffee'
import { useState } from 'react'

interface Props {
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}


export const Subscribe = ({setCheckout}:Props) => {
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

        <div className='tinn flex flex-col items-center gap-10   '>
          <div className='last w-11/12 p-10 rounded-lg flex flex-col gap-3'>
            <h4 className='font-normal opacity-50'>Order Summary</h4>
            <p className='text-2xl leading-10'>“I drink my coffee as <span className='choice'>{selected1}</span>, with a<span className='choice'>{selected2}</span> type of bean. <span className='choice'>{selected3}</span> ground ala <span className='choice'>{selected4}</span>, sent to me <span className='choice'>{selected5}</span>.”</p>
          </div>
          <button className='btn text-xl'>Create your plan</button>
        </div>

        <div className='os-container rounded-lg  flex flex-col gap-7  items-center'>
          <div className='black absolute'>fdsfdsfdfds</div>
          <h3 className='os  text-white font-bold  rounded-lg  h-24 text-3xl flex items-center pl-10 w-full'>Order Summary</h3>
          <p className='text-2xl font-bold text-gray-500 w-72'>“I drink my coffee as <span className='choice'>{selected1}</span>, with a <span className='choice'>{selected2}</span> type of bean. <span className='choice'>{selected3}</span> ground ala <span className='choice'>{selected4}</span>, sent to me <span className='choice'>{selected5}</span>.”</p>
          <p className='leading-6 opacity-80 w-72 text-black'>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
          <button className='btn text-white w-72'>Checkout -$14.00 / mo</button>
        </div>
    </div>
  )
}
