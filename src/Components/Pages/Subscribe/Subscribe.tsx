import React from 'react'
import './Subscribe.css'
import { CreatePlan } from './CreatePlan'
import { PickUrPlan } from './PickUrPlan'
import { DrinkCoffee } from './DrinkCoffee'


export const Subscribe = () => {
  return (
    <div className='w-full flex flex-col items-center gap-28 '>
        <CreatePlan />
        <PickUrPlan />
        <DrinkCoffee />

        <div>
          <div >
            <h4>Order Summary</h4>
            <p>“I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiére, sent to me Every Week.”</p>
          </div>
          <button className='btn'>Create your plan</button>
        </div>
    </div>
  )
}
