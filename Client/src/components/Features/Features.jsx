import React from 'react'
import "./feature.css"
import Card from '../Card/Card'
import { features } from './feature'


export default function Features() {
  return (
    <section className='features'>
        <h2 className='featTitle'>
            Everything You Need to Manage Inventory
        </h2>
        <p className='featIntroText'>
            Powerful features designed to streamline your inventory operations and boost efficiency.
        </p>

        <div className="featuresContainer">
            {
                features.map(x => {
                    const {icon, title, description} = x;

                    return <Card
                        icon={icon}
                        title={title}
                        content={description}
                    />
                })
            }
        </div>
    </section>
  )
}