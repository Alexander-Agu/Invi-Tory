import React, { useEffect, useState } from 'react';
import "./inventoryHome.css";

import InventoryBox from '../InventoryBox/InventoryBox';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';
import { useOutletContext, useParams } from 'react-router-dom';
import InventoryPopup from '../InventoryPopup/InventoryPopup';
import { DeleteInventoryAsync, FilterInventoryAsync, GetAllInventoryAsync } from '../../api/InventoryApi';
import Popup from '../Popup/Popup';
import { deleteButtons, updateButtons, updateInputBoxes } from '../DashboardHome/DashHomeTools';
import DashHeader from '../DashHeader/DashHeader';
import Filter from '../Filter/Filter';
import { FilterInventories } from '../../tools/Filter';


export default function InventoryHome({}) {
    const { logoutPopUp, setLogoutPopUp, inventories } = useOutletContext();
    const [inventoryPopup, setInventoryPopUp] = useState(false);
    const [inventoryAvailable, setInventoryAvailable] = useState(false);
    
    const [filteredInventory, setFilteredInventory] = useState([]);
    const {userId} = useParams();
    const [targetInventory, setTargetInventory] = useState(0);
    const [targetCategory, setTargetCategory] = useState("all");
    const [deletePopup, setDeletePopup] = useState(false);
    
    // For the update request
    const [updatePopup, setUpdatePopup] = useState(false);
    const [updateBody, setUpdateBody] = useState({});
    const [updateName, setUpdateName] = useState("");
    const [updateCategory, setUpdateCategory] = useState("");

    console.log(targetCategory)
    useEffect(()=>{
        let isMounted = true;

        const FetchData = async (userId) => {
            try {
                const [inventoriesRes] = await Promise.all([
                    GetAllInventoryAsync(userId)
                ]);

                if (isMounted){
                    // setInventories(inventoriesRes)
                    setFilteredInventory(inventoriesRes);
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


    useEffect(()=> {
        const filterInventory = async ()=> {
            try {
                // const res = await FilterInventoryAsync(userId, {"category": targetCategory})
                const res = FilterInventories(inventories, targetCategory);

                setFilteredInventory(res);
            } catch (error) {
                console.log(error)
            }
        }

        if (inventories.length > 0) {
            filterInventory();
        }

        // FilterInventory()
    }, [targetCategory, inventories])
    
    
  return (
    <article className="inventory-home">
        <DashHeader 
            title={"My Inventories"}
            message={"Manage and organize your inventory collections"}
            buttonName={"Create Inventory"}
            execute={setInventoryPopUp}
        />

        <Filter inventories={inventories} targetCategory={setTargetCategory} />

        <section className='inventory-bottom-section'>
            {
                filteredInventory.map(x => {
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