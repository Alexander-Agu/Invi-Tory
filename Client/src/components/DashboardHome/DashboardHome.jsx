import React from 'react'
import "./dashboardHome.css"
import DashCard from '../DashCard/DashCard'
import RecentActivity from '../../UI/RecentActivity/RecentActivity'

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

        <section className='inventory-stats'>
          <h2>Inventory Breakdown</h2>

          <div className="stats">

          </div>
        </section>

        <section className='recent-activities'>
          <h2>Recent Activity</h2>

          <div className="activities">
            <RecentActivity />
            <RecentActivity />
            <RecentActivity />
            <RecentActivity />
            <RecentActivity />
          </div>
        </section>

      </article>
    </section>
  )
}
