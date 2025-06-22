import React, { useEffect, useState } from 'react';
import "./inventoryHome.css";

import InventoryBox from '../InventoryBox/InventoryBox';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';
import { useOutletContext, useParams } from 'react-router-dom';
import InventoryPopup from '../InventoryPopup/InventoryPopup';
import { DeleteInventoryAsync, GetAllInventoryAsync } from '../../api/InventoryApi';
import Popup from '../Popup/Popup';
import { deleteButtons, updateButtons, updateInputBoxes } from '../DashboardHome/DashHomeTools';
import DashHeader from '../DashHeader/DashHeader';


export default function InventoryHome({}) {
    const { logoutPopUp, setLogoutPopUp} = useOutletContext();
    const [inventoryPopup, setInventoryPopUp] = useState(false);
    const [inventoryAvailable, setInventoryAvailable] = useState(false);
    const [inventories, setInventories] = useState([]);
    const {userId} = useParams();
    const [targetInventory, setTargetInventory] = useState(0);
    const [deletePopup, setDeletePopup] = useState(false);
    
    // For the update request
    const [updatePopup, setUpdatePopup] = useState(false);
    const [updateBody, setUpdateBody] = useState({});
    const [updateName, setUpdateName] = useState("");
    const [updateCategory, setUpdateCategory] = useState("");


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
        <DashHeader 
            title={"My Inventories"}
            message={"Manage and organize your inventory collections"}
            buttonName={"Create Inventory"}
            execute={setInventoryPopUp}
        />

        <section className='inventory-bottom-section'>
            {
                inventories.map(x => {
                    const {category, inventoryId, itemCount, name} = x;
                    return <InventoryBox 
                        id={inventoryId}
                        category={category}
                        itemCount={itemCount}
                        name={name}
                        setUpdateName={setUpdateName}
                        setUpdateCategory={setUpdateCategory}
                        setUpdatePopup={setUpdatePopup}
                        setDeletePopUp={setDeletePopup}
                        setTargetInventory={setTargetInventory}
                    />
                })
            }
        </section>

        {
            // LOGOUT POPUP
            logoutPopUp? <LogoutPopUp setLogoutPopUp={setLogoutPopUp} /> : <p></p>
        }
        {
            // ADD INVENTORY POPUP
            inventoryPopup? <InventoryPopup setInventoryPopUp={setInventoryPopUp} /> : <p></p>
        }
        {
            // DELETE INVENTORY POPUP
            deletePopup? 
                <Popup message={"Are you sure you want to delete your inventory?"} 
                inputs={[]}
                buttons={deleteButtons(setDeletePopup, userId, targetInventory)}
                popup={setDeletePopup}
            /> : <p></p>
        }
        {
            // UPDATE INVENTORY POPUP
            updatePopup? <Popup 
                    message={"Update Inventory"}
                    inputs={updateInputBoxes(updateName, setUpdateName, updateCategory, setUpdateCategory)}
                    buttons={updateButtons(setUpdatePopup, userId, targetInventory, {"name": updateName, "category": updateCategory})}
                    popup={setUpdatePopup}
                />
            : <p></p>
        }

    </article>
  )
}