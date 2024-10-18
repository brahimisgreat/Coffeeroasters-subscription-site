import React from 'react'
import { AboutInfo } from './AboutInfo'
import { OurCommitment } from './OurCommitment'
import { Quality } from './Quality'
import { Ourhead } from './Ourhead'

export const About = () => {
  return (
    <main className='w-full flex flex-col gap-40'>
        <AboutInfo />
        <OurCommitment />
        <Quality />
        <Ourhead />

    </main>
  )
}
