import React from 'react'
import { CreateYourPlan } from './CreateYourPlan'
import { Ourcollection } from './Ourcollection'
import './Home.css'
export const Home = () => {
  return (
    <main className='home'>
      <CreateYourPlan />
      <Ourcollection />
      
    </main>
  )
}
