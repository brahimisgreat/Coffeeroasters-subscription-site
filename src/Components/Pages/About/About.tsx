import React from 'react'
import { AboutInfo } from './AboutInfo'
import { OurCommitment } from './OurCommitment'
import { Quality } from './Quality'
import { Ourhead } from './OurHead'

export const About = () => {
  return (
    <main className='w-full flex flex-col gap-24'>
        <AboutInfo />
        <OurCommitment />
        <Quality />
        <Ourhead />

    </main>
  )
}
