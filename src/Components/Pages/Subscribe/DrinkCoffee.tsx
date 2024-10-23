import React from 'react'
import { QuestionButtons } from './QuestionButtons'
import { data } from '../../../data'

export const DrinkCoffee = () => {

  console.log(data[0])

  return (
    <div>
      {data.map((item) => {
        return <QuestionButtons question={item.question} type={item.answers} />
      })}
    </div>
  )
}
