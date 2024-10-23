import React from 'react'
import { QuestionButtons } from './QuestionButtons'
import { data } from '../../../data'

export const DrinkCoffee = () => {

  console.log(data[0])

  return (
    <div className='flex flex-col gap-20'>
      {data.map((item) => {
        return <QuestionButtons question={item.question} type={item.answers} />
      })}
    </div>
  )
}
