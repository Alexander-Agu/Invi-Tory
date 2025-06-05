import React from 'react'
import "./stat.css"


export default function Stat() {

    const statTexts = (numbers, statTitle) => {
        return <div className="stat-texts">
            <h2>{numbers}</h2>
            <p>{statTitle}</p>
        </div>
    }


  return (
    <section className='stat-container'>
        {statTexts("10,000+", "Active Users")}
        {statTexts("99.9%", "Uptime")}
        {statTexts("24/7", "Support")}
    </section>
  )
}