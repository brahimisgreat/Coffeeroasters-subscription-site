import React from 'react'
import './Ourhead.css'
import uk from '../../../assets/about/desktop/illustration-uk.svg'
import canada from '../../../assets/about/desktop/illustration-canada.svg'
import australia from '../../../assets/about/desktop/illustration-australia.svg'

export const Ourhead = () => {
  return (
    <section>
        <div><h3>Our headquarters</h3></div>
        <div>
            <div>
                <img src={uk} className=''/>
                <h3></h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
  )
}
