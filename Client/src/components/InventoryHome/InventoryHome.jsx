import React, { useState } from 'react';
import "./inventoryHome.css";
import { FaPlus } from "react-icons/fa";
import InventoryBox from '../InventoryBox/InventoryBox';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';
import { useOutletContext } from 'react-router-dom';
import InventoryPopup from '../InventoryPopup/InventoryPopup';


export default function InventoryHome({}) {
    const { logoutPopUp, setLogoutPopUp} = useOutletContext();
    const [inventoryPopup, setInventoryPopUp] = useState(false);
    const [inventoryAvailable, setInventoryAvailable] = useState(false);
    
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