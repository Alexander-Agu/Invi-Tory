import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHome from '../../components/DashboardHome/DashboardHome'
import { FetchUserAsync } from '../../api/UserApi';
import { Outlet, useParams } from 'react-router-dom';
import InventoryHome from '../../components/InventoryHome/InventoryHome';
import { GetAllInventoryAsync } from '../../api/InventoryApi';
import ItemHome from '../../components/ItemHome/ItemHome';

export default function Dashboard() {
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [dashboardLoad, setDashboardLoad] = useState(true);
  const [name, setName] = useState("");
  const { userId } = useParams();
  const [inventories, setInventories] = useState([]);

  useEffect(()=>{
    let isMounted = true;

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

    const FetchData = async (userId) => {
      try {
          const [inventoriesRes] = await Promise.all([
            GetAllInventoryAsync(userId)
          ]);

          if (isMounted){
            setInventories(inventoriesRes)
          }
      } catch (error) {
          if (isMounted){
            console.log(error)
          }
      } finally{
          if (isMounted){

        }
      }
    }
    
    
    if (isMounted){
      FetchUser(userId);
      FetchData(userId);
    }

    return () => {
      isMounted = false;
    };

  },[userId]);

  if (dashboardLoad === false){
    return (
      <main className='dashboardContainer'>
          <Sidebar setLogoutPopUp={setLogoutPopUp} />
          <Outlet className="sa" context={{ logoutPopUp, setLogoutPopUp, name, inventories, setInventories }} />
      </main>
    )
  } else{
    return <h1>LOADING.....</h1>
  }
}
