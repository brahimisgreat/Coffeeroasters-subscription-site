import React from 'react'
import { AboutInfo } from './AboutInfo'
import { OurCommitment } from './OurCommitment'
import { Quality } from './Quality'

export const About = () => {
  return (
    <main className='w-full flex flex-col gap-40'>
        <AboutInfo />
        <OurCommitment />
        <Quality />

    </main>
  )
}
