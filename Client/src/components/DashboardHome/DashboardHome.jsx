import React from 'react'
import "./dashboardHome.css"
import DashCard from '../DashCard/DashCard'

export default function DashboardHome() {
  return (
    <section className='dashboardHome'>

      <article className='dash-intro'>

        <h1>Welcome Alexander</h1>
        <p>
          Here's what's happening with your inventory today
        </p>

      </article>

      <article className='dash-sum-stats'>
        <DashCard />
        <DashCard />
        <DashCard />
      </article>

      <article className='dash-individual-stats'>

      </article>
    </section>
  )
}
