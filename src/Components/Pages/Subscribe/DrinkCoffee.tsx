import React from 'react'
import { QuestionButtons } from './QuestionButtons'
import { data } from '../../../data'
import { Link } from 'react-router-dom'

export const DrinkCoffee = () => {

  console.log(data)

  return (
    <div className='lg:flex lg:flex-row lg:justify-between gap-40'>
      <div className='hidden lg:flex flex-col text-black gap-8'>
        <div className='text-2xl opacity-80 font-bold'>
         <a href='#a' className='flex gap-4' ><span>01</span><span>Preferences</span></a> 
        </div>
        <div className='text-2xl opacity-80 font-bold'>
          <a href='#b' className='flex gap-4'><span>02</span><span>Bean Type</span></a> 
        </div>
        <div className='text-2xl opacity-80 font-bold'>
          <a href='#c' className='flex gap-4'><span>03</span><span>Quantity</span></a> 
        </div>
        <div className='text-2xl opacity-80 font-bold'>
          <a href='#d' className='flex gap-4'><span>04</span><span>grind Options</span></a> 
        </div>
        <div className='text-2xl opacity-80 font-bold'>
          <a href='#e' className='flex gap-4'> <span>05</span><span>Deliveries</span></a> 
        </div>
      </div>

      <div className='flex flex-col gap-16'>
      {data.map((item, index) => {
        return <QuestionButtons key={index} id={item.id} question={item.question} type={item.answers} />
      })}
      </div>
    </div>
  )
}
