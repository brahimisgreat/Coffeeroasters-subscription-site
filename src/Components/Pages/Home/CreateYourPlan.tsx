import React from 'react'
import './CreateYourPlan.css'

export const CreateYourPlan = () => {
  return (
    <section className='create-your-plan rounded-xl  font-black flex flex-col items-center justify-center gap-6'>
        <h1 className='w-64 text-center text-4xl'>Great coffee made simple.</h1>
        <p className='w-64 font-normal text-center ' >Start your mornings with the world’s best coffees. Try our expertly curated artisan 
        coffees from our best roasters delivered directly to your door, at your schedule.</p>
        <button className='bg-emerald-700 w-56 h-14 rounded-md'>Create your plan</button>
    </section>
  )
}
