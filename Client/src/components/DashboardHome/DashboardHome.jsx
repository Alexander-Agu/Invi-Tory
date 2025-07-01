import React, { useEffect, useState } from 'react'
import "./dashboardHome.css"
import DashCard from '../DashCard/DashCard'
import RecentActivity from '../../UI/RecentActivity/RecentActivity'
import InventoryStat from '../../UI/InventoryStat/InventoryStat'
import NotFound from '../../UI/NotFound/NotFound'
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp'
import { useOutletContext, useParams } from 'react-router-dom'
import { GetInventoryCountAsync, GetItemCountAsync } from '../../api/UnitsApi'
import { GetAllInventoryAsync } from '../../api/InventoryApi'
import { GetAllUserRecentActivity } from '../../api/RecentActivityApi'
import DashHeader from '../DashHeader/DashHeader'
import { dashboardData } from './DashHomeTools'

export default function DashboardHome() {
  const [noInventory, setNoInventory] = useState(true);
  const [noRecentActivity, setNoRecentActivity] = useState(false);
  const { logoutPopUp, setLogoutPopUp, name, inventories } = useOutletContext();
  const [inventoryCount, setInventoryCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);
  const [dasHomeLoad, setDashHomeLoad] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [inventoryRes, itemRes, recentActivitiesRes] = await Promise.all([
          GetInventoryCountAsync(userId),
          GetItemCountAsync(userId),
          GetAllUserRecentActivity(userId)
        ]);

        if (isMounted) {
          setInventoryCount(inventoryRes);
          setItemCount(itemRes);
          setNoInventory(inventories.length === 0);
          setRecentActivities(recentActivitiesRes);
          setNoRecentActivity(recentActivitiesRes.length === 0);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load dashboard data');
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setDashHomeLoad(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [userId, inventories]);


  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <section className='dashboardHome'>
      {dasHomeLoad ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <DashHeader 
              title={`Welcome ${name}`}
              message={"Here's what's happening with your inventory today"}
              buttonName={""}
              execute={false}
          />

          <article className='dash-sum-stats'>
            {
              dashboardData(inventoryCount, itemCount).map(x => {
                const { title, icon, total, type } = x;
                return <DashCard key={type}
                  title={title} 
                  icon={icon} 
                  total={total} 
                  type={type} 
                />
              })
            }
          </article>

          <article className='dash-individual-stats'>
            <section className='inventory-stats'>
              <h2>Inventory Breakdown</h2>
              
              {noInventory ? (
                <NotFound text={"No Inventory"} />
              ) : (
                <div className="stats">
                  {inventories.map((inventory, index) => (
                    <InventoryStat 
                      key={`${inventory.name}-${index}`}
                      name={inventory.name} 
                      units={inventory.itemCount} 
                    />
                  ))}
                </div>
              )}
            </section>

            <section className='recent-activities'>
              <h2>Recent Activity</h2>
              
              {noRecentActivity ? (
                <NotFound text={"No Recent Activity"} />
              ) : (
                <div className="activities">
                  {
                    recentActivities.map(x => {
                      const {recentActivityId, request, type, name} = x;

                      return <RecentActivity key={recentActivityId}
                        id={recentActivityId}
                        request={type}
                        type={request}
                        name={name}
                      />
                    })
                  }
                </div>
              )}
            </section>
            
            {logoutPopUp && <LogoutPopUp setLogoutPopUp={setLogoutPopUp} />}
          </article>
        </>
      )}
    </section>
  )
}