import React from 'react'
import "./dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHome from '../../components/DashboardHome/DashboardHome'

export default function Dashboard() {
  return (
    <main className='dashboardContainer'>
        <Sidebar />
        <DashboardHome />
    </main>
  )
}
