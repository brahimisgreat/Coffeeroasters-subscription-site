import React from 'react'
import { QuestionButtons } from './QuestionButtons'
import { data } from '../../../data'
import { Link } from 'react-router-dom'

export const DrinkCoffee = () => {

  console.log(data[0])

  return (
    <div className='flex flex-col gap-20  md:w-full'>
      <div className='hidden lg:flex flex-col text-black'>
        <div>
         <Link><span>01</span><span>Preferences</span></Link> 
        </div>
        <div>
        <Link><span>02</span><span>Bean Type</span></Link> 
        </div>
        <div>
        <Link><span>03</span><span>Quantity</span></Link> 
        </div>
        <div>
        <Link><span>04</span><span>grind Options</span></Link> 
        </div>
        <div>
        <Link> <span>05</span><span>Deliveries</span></Link> 
        </div>
      </div>

      {data.map((item) => {
        return <QuestionButtons question={item.question} type={item.answers} />
      })}
    </div>
  )
}
