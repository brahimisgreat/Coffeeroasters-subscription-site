import React from 'react'
import { QuestionButtons } from './QuestionButtons'
import { data } from '../../../data'

export const DrinkCoffee = () => {

  console.log(data)
  return (
    <div>
      {data.map((item) => {
        return <QuestionButtons question={item.question} />
      })}
    </div>
  )
}
