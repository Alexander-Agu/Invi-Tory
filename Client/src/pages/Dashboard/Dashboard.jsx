import React, { useState } from 'react'
import "./dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHome from '../../components/DashboardHome/DashboardHome'
import { FetchUserAsync } from '../../api/UserApi';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const { userId } = useParams();


  return (
    <main className='dashboardContainer'>
        <Sidebar setLogoutPopUp={setLogoutPopUp} />
        <DashboardHome logoutPopUp={logoutPopUp} setLogoutPopUp={setLogoutPopUp}/>
    </main>
  )
}
