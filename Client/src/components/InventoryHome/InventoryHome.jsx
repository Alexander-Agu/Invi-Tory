import React, { useEffect, useState } from 'react';
import "./inventoryHome.css";

import InventoryBox from '../InventoryBox/InventoryBox';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';
import { useOutletContext, useParams } from 'react-router-dom';
import InventoryPopup from '../InventoryPopup/InventoryPopup';
import { GetAllInventoryAsync } from '../../api/InventoryApi';
import Popup from '../Popup/Popup';
import { CreateButtons, CreateInputs, deleteButtons, updateButtons, updateInputBoxes } from '../InventoryHome/InvitoryHomeTool';
import DashHeader from '../DashHeader/DashHeader';
import Filter from '../Filter/Filter';
import { FilterInventories } from '../../tools/Filter';
import LoadScreen from '../../pages/LoadScreen/LoadScreen';


export default function InventoryHome({}) {
    const { logoutPopUp, setLogoutPopUp, inventories } = useOutletContext();
    const [inventoryPopup, setInventoryPopUp] = useState(false);
    const [inventoryAvailable, setInventoryAvailable] = useState(false);
    const [load,setLoad] = useState(true);
    
    const [filteredInventory, setFilteredInventory] = useState([]);
    const {userId} = useParams();
    const [targetInventory, setTargetInventory] = useState(0);
    const [targetCategory, setTargetCategory] = useState("all");
    const [deletePopup, setDeletePopup] = useState(false);

    // Create inventory
      const [inventoryName, setInventoryName] = useState("");
      const [category, setCategory] = useState("");
      const [sharedCost, setSharedCost] = useState(0);
    
    // For the update request
    const [updatePopup, setUpdatePopup] = useState(false);
    const [updateBody, setUpdateBody] = useState({});
    const [updateName, setUpdateName] = useState("");
    const [updateCategory, setUpdateCategory] = useState("");
    const [updateSharedCost, setUpdateSharedCost] = useState();

    // Button clicks check
    const [deleteButton, setDeleteButton] = useState(false);
    const [updateButton, setUpdateButton] = useState(false);
    const [addButton, setAddButton] = useState(false);

    
    useEffect(()=>{
        let isMounted = true;

        const FetchData = async (userId) => {
            try {
                const [inventoriesRes] = await Promise.all([
                    GetAllInventoryAsync(userId)
                ]);

                if (isMounted){
                    setFilteredInventory(inventoriesRes);
                }
            } catch (error) {
                if (isMounted){
                    console.log(error)
                }
            } finally{
                if (isMounted){
                    setLoad(false);
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
                console.log(inventories[1].sharedCosts)
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
        {
            load? <LoadScreen /> :
            <>
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
                            const {category, inventoryId, itemCount, name, sharedCosts} = x;
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
                                sharedCosts={sharedCosts}
                                setSharedCosts={setUpdateSharedCost}
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
                    inventoryPopup? <Popup 
                        message={"Create Inventory"}
                        inputs={CreateInputs(inventoryName, setInventoryName, category, setCategory, sharedCost, setSharedCost)}
                        buttons={CreateButtons(setInventoryPopUp, userId, {"name": inventoryName, "category": category, "sharedCosts": sharedCost}, addButton, setAddButton)}
                        popup={setInventoryPopUp}
                    /> : <p></p>
                }
                {
                    // DELETE INVENTORY POPUP
                    deletePopup? 
                        <Popup message={"Are you sure you want to delete your inventory?"} 
                        inputs={[]}
                        buttons={deleteButtons(setDeletePopup, userId, targetInventory, deleteButton, setDeleteButton)}
                        popup={setDeletePopup}
                    /> : <p></p>
                }
                {
                    // UPDATE INVENTORY POPUP
                    updatePopup? <Popup 
                            message={"Update Inventory"}
                            inputs={updateInputBoxes(updateName, setUpdateName, updateCategory, setUpdateCategory, updateSharedCost, setUpdateSharedCost)}
                            buttons={updateButtons(setUpdatePopup, userId, targetInventory, {"name": updateName, "category": updateCategory, "sharedCosts": updateSharedCost}, updateButton, setUpdateBody)}
                            popup={setUpdatePopup}
                        />
                    : <p></p>
                }
            </>
        }
    </article>
  )
}