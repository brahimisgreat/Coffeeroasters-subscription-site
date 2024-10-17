import React from 'react'
import { AboutInfo } from './AboutInfo'
import { OurCommitment } from './OurCommitment'

export const About = () => {
  return (
    <main className='w-full flex flex-col gap-24'>
        <AboutInfo />
        <OurCommitment />

    </main>
  )
}
