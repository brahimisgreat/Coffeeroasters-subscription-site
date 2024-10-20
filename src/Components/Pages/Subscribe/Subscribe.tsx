import React from 'react'
import './Subscribe.css'
import { CreatePlan } from './CreatePlan'
import { PickUrPlan } from './PickUrPlan'

export const Subscribe = () => {
  return (
    <div className='w-full flex flex-col items-center gap-28'>
        <CreatePlan />
        <PickUrPlan />
    </div>
  )
}
