import React, { useState } from 'react'
import "./dashboardHome.css"
import DashCard from '../DashCard/DashCard'
import RecentActivity from '../../UI/RecentActivity/RecentActivity'
import InventoryStat from '../../UI/InventoryStat/InventoryStat'
import { FiBox } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import NotFound from '../../UI/NotFound/NotFound'
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp'

export default function DashboardHome({logoutPopUp, setLogoutPopUp}) {
  const [noInventory, setNoInventory] = useState(true);
  const [noRecentActivity, setNoRecentActivity] = useState(true);

  
  return (
    <section className='dashboardHome'>

      <article className='dash-intro'>

        <h1>Welcome Alexander</h1>
        <p>
          Here's what's happening with your inventory today
        </p>

      </article>

      <article className='dash-sum-stats'>
        <DashCard title={"Total Inventory"} icon={<FiBox style={{color: "#60a5fa", fontSize: "1.2rem"}} />} total={1} type={"Inventories"} />
        <DashCard title={"Total Items"} icon={<FiBox style={{color: "red", fontSize: "1.2rem"}} />} total={127} type={"Items"} />
        <DashCard title={"Days using app"} icon={<IoIosTimer style={{color: "pink", fontSize: "1.2rem"}} />} total={7} type={"Days"} />
      </article>

      <article className='dash-individual-stats'>

        <section className='inventory-stats'>
          <h2>Inventory Breakdown</h2>

          {
            noInventory? <NotFound text={"No Inventory"} /> : 
            <div className="stats">
              <InventoryStat />
              <InventoryStat />
              <InventoryStat />
              <InventoryStat />
              <InventoryStat />
              <InventoryStat />
              <InventoryStat />
              <InventoryStat />
            </div>
          }
        </section>

        <section className='recent-activities'>
          <h2>Recent Activity</h2>

          {
            noRecentActivity? <NotFound text={"No Recent Activity"} /> :
            <div className="activities">
              <RecentActivity />
              <RecentActivity />
              <RecentActivity />
              <RecentActivity />
              <RecentActivity />
            </div>
          }
        </section>
        {
          logoutPopUp? <LogoutPopUp setLogoutPopUp={setLogoutPopUp}/> : null
        }
      </article>
    </section>
  )
}
