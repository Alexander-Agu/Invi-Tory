import React from 'react';
import "./inventoryHome.css";
import { FaPlus } from "react-icons/fa";
import InventoryBox from '../InventoryBox/InventoryBox';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';


export default function InventoryHome({logoutPopUp, setLogoutPopUp}) {
  return (
    <article className="inventory-home">

        <section className='inventory-top-section'>
            <div className="inventory-intro">
                <h1>My Inventories</h1>
                <p>Manage and organize your inventory collections</p>
            </div>

            <button className='inventory-btn'>
                <FaPlus />
                <p>Create Inventory</p>
            </button>
        </section>

        <section className='inventory-bottom-section'>
            <InventoryBox />
            <InventoryBox />
            <InventoryBox />
            <InventoryBox />
            <InventoryBox />
            <InventoryBox />
            <InventoryBox />
            <InventoryBox />
        </section>

        {
            logoutPopUp? <LogoutPopUp setLogoutPopUp={setLogoutPopUp} /> : <p></p>
        }
    </article>
  )
}