import React, { useState } from 'react'
import "./dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHome from '../../components/DashboardHome/DashboardHome'

export default function Dashboard() {
  const [logoutPopUp, setLogoutPopUp] = useState(false);

  return (
    <main className='dashboardContainer'>
        <Sidebar setLogoutPopUp={setLogoutPopUp} />
        <DashboardHome logoutPopUp={logoutPopUp} setLogoutPopUp={setLogoutPopUp}/>
    </main>
  )
}
