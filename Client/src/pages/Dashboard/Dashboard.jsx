import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHome from '../../components/DashboardHome/DashboardHome'
import { FetchUserAsync } from '../../api/UserApi';
import { Outlet, useParams } from 'react-router-dom';
import InventoryHome from '../../components/InventoryHome/InventoryHome';

export default function Dashboard() {
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [dashboardLoad, setDashboardLoad] = useState(true);
  const [name, setName] = useState("");
  const { userId } = useParams();

  useEffect(()=>{
    const FetchUser = async (userId) => {
      try {
        let res = await FetchUserAsync(userId);

        setName(res.firstname);
      } catch (error) {
        console.log(error);
      } finally{
        setDashboardLoad(false);
      }
    }

    FetchUser(userId);
  },[name]);

  if (dashboardLoad === false){
    return (
      <main className='dashboardContainer'>
          <Sidebar setLogoutPopUp={setLogoutPopUp} />
          <Outlet className="sa" context={{ logoutPopUp, setLogoutPopUp, name }} />
      </main>
    )
  } else{
    return <h1>LOADING.....</h1>
  }
}
