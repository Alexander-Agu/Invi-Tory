import React, { useEffect, useState } from 'react';
import "./inventoryHome.css";
import { FaPlus } from "react-icons/fa";
import InventoryBox from '../InventoryBox/InventoryBox';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';
import { useOutletContext, useParams } from 'react-router-dom';
import InventoryPopup from '../InventoryPopup/InventoryPopup';
import { GetAllInventoryAsync } from '../../api/InventoryApi';


export default function InventoryHome({}) {
    const { logoutPopUp, setLogoutPopUp} = useOutletContext();
    const [inventoryPopup, setInventoryPopUp] = useState(false);
    const [inventoryAvailable, setInventoryAvailable] = useState(false);
    const [inventories, setInventories] = useState([]);
    const {userId} = useParams();


    useEffect(()=>{
        let isMounted = true;

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

        FetchData(userId);
        return () => {
            isMounted = false;
        };
    },[userId]);
    
  return (
    <article className="inventory-home">

        <section className='inventory-top-section'>
            <div className="inventory-intro">
                <h1>My Inventories</h1>
                <p>Manage and organize your inventory collections</p>
            </div>

            <button className='inventory-btn' onClick={()=> setInventoryPopUp(true)}>
                <FaPlus />
                <p>Create Inventory</p>
            </button>
        </section>

        <section className='inventory-bottom-section'>
            {
                inventories.map(x => {
                    const {category, inventoryId, itemCount, name} = x;
                    return <InventoryBox 
                        id={inventoryId}
                        category={category}
                        itemCount={itemCount}
                        name={name}
                    />
                })
            }
        </section>

        {
            logoutPopUp? <LogoutPopUp setLogoutPopUp={setLogoutPopUp} /> : <p></p>
        }
        {
            inventoryPopup? <InventoryPopup setInventoryPopUp={setInventoryPopUp} /> : <p></p>
        }

        
    </article>
  )
}