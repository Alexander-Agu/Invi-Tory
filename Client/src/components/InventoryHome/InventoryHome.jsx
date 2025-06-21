import React, { useEffect, useState } from 'react';
import "./inventoryHome.css";
import { FaPlus } from "react-icons/fa";
import InventoryBox from '../InventoryBox/InventoryBox';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';
import { useOutletContext, useParams } from 'react-router-dom';
import InventoryPopup from '../InventoryPopup/InventoryPopup';
import { DeleteInventoryAsync, GetAllInventoryAsync } from '../../api/InventoryApi';
import Popup from '../Popup/Popup';


export default function InventoryHome({}) {
    const { logoutPopUp, setLogoutPopUp} = useOutletContext();
    const [inventoryPopup, setInventoryPopUp] = useState(false);
    const [inventoryAvailable, setInventoryAvailable] = useState(false);
    const [inventories, setInventories] = useState([]);
    const {userId} = useParams();
    const [targetInventory, setTargetInventory] = useState(0);
    const [deletePopup, setDeletePopup] = useState(false);

    const deleteButtons = [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "lightgreen",
            "fontColor": "white",
            "execute": setInventoryPopUp
        },
        {
            "buttonId": 2,
            "name": "Delete",
            "color": "white",
            "fontColor": "black",
            "execute": async function  (userId) {
                try {
                    console.log(targetInventory);
                    const res =  await DeleteInventoryAsync(userId, targetInventory);
                    location.reload();
                    setInventoryPopUp(false)

                } catch (error) {
                    console.log(error)
                }
            }
        }
    ]


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
                        setDeletePopUp={setDeletePopup}
                        setTargetInventory={setTargetInventory}
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
        {
            deletePopup? 
                <Popup message={"Are you sure you want to delete your inventory?"} 
                inputs={[]}
                buttons={deleteButtons}
                popup={setDeletePopup}
            /> : <p></p>
        }

        
    </article>
  )
}