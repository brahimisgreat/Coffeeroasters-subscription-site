import React from 'react'
import { CreateYourPlan } from './CreateYourPlan'
import { Ourcollection } from './Ourcollection'
import './Home.css'
import { Whychoose } from './Whychoose'
export const Home = () => {
  return (
    <main className='home flex flex-col gap-32'>
      <CreateYourPlan />
      <Ourcollection />
      <Whychoose />
      
    </main>
  )
}
