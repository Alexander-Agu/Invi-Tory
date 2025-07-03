import React, { useEffect, useState } from 'react'
import "./itemHome.css"
import DashHeader from '../DashHeader/DashHeader'
import FilterItem from '../FilterItem/FilterItem';
import { useOutletContext, useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import { GetAllItemsAsync } from '../../api/ItemApi';
import { FilterItems } from '../../tools/Filter';
import CreateItem from '../CreateItem/CreateItem';
import LogoutPopUp from '../LogoutPopUp/LogoutPopUp';
import Popup from '../Popup/Popup';
import { deleteItemButtons, updateItemButtons, updateItemInputBoxes } from './ItemHomeTool';
import LoadScreen from '../../pages/LoadScreen/LoadScreen';


export default function ItemHome() {
  // Filtering conditions
  const [targetCategory, setTargetCategory] = useState("all");
  const [targetInventoryName, setTargetInventoryName] = useState("all");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const { logoutPopUp, setLogoutPopUp, inventories } = useOutletContext();
  const [deleteItemPopup, setDeleteItemPopup] = useState(false);
  const { userId } = useParams();

  // Create, Delete and Update popup values
  const [targetInventoryId, setTargetInventoryId] = useState(0);
  const [targetItemId, setTargetItemId] = useState(0);
  const [loadingItems, setLoadingItems] = useState(true);
  const [createItemPopup, setCreateItemPopup] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);

  // Update parameter
  const [updateName, setUpdateName] = useState();
  const [updateTag, setUpdateTag] = useState();

  // Fetch data from backend
  useEffect(()=>{
    let isMounted = true;

    const FetchData = async ()=> {
      try {

        if (isMounted){
          const res = await GetAllItemsAsync(userId);
          setItems(res);
          setFilteredItems(res);
        }

      } catch (error) {

        console.log(error);

      } finally{

        if (isMounted){
          setLoadingItems(false);
        }
      }
    }


    if (isMounted) FetchData();


    return () => {
      isMounted = false;
    }
  },[userId]);


  // Filter items
  useEffect(()=>{
    const filterItems = async ()=> {
      try {
        // const res = await FilterInventoryAsync(userId, {"category": targetCategory})
        const res = FilterItems(items, targetCategory, targetInventoryName);
        // console.log(res)
        setFilteredItems(res)
      } catch (error) {
        console.log(error)
      }
    }

    if (items.length > 0) {
      filterItems();
    }
  },[userId, items, targetCategory, targetInventoryName])

  return (
    <article className='item-home'>
      {
        loadingItems? <LoadScreen /> :
        <>
          <DashHeader 
              title={"My Items"}
              message={"Manage all your inventory items"}
              buttonName={"Create Item"}
              execute={setCreateItemPopup}
          />


          <FilterItem 
            inventories={inventories} 
            targetCategory={setTargetCategory}
            targetInventoryName={setTargetInventoryName}
            category={targetCategory}
          />

          <section className='item-bottom'>
            {
              filteredItems.map(x => {
                const { itemId, inventoryId, name, tag, value, createdAt, inventoryCategory, inventoryName } = x;

                return <ItemCard
                  id={itemId}
                  inventoryId={inventoryId}
                  name={name}
                  category={inventoryCategory}
                  inventoryName={inventoryName}
                  createdAt={createdAt}
                  setTargetInventoryId={setTargetInventoryId}
                  setTargetItemId={setTargetItemId}
                  setDeleteItemPopup={setDeleteItemPopup}
                  setUpdatePopup={setUpdatePopup}
                  setUpdateName={setUpdateName}
                  setUpdateTag={setUpdateTag}
                  tag={tag}
                />
              })
            }
          </section>

          {
            // LOGOUT POPUP
            logoutPopUp? <LogoutPopUp setLogoutPopUp={setLogoutPopUp} /> : <p></p>
          }

          { // CREATE ITEM POPUP
            createItemPopup? <CreateItem setCreateItem={setCreateItemPopup} />: <p></p>
          }

          { // DELETE ITEM POPUP
            deleteItemPopup? 
              <Popup message={"Are you sure you want to delete your inventory?"} 
              inputs={[]}
              buttons={deleteItemButtons(setDeleteItemPopup, userId, targetInventoryId, targetItemId)}
              popup={setDeleteItemPopup}
            /> : <p></p>
          }
          {
            // UPDATE INVENTORY POPUP
            updatePopup? <Popup 
                message={"Update Item"}
                inputs={updateItemInputBoxes(updateName, setUpdateName, updateTag, setUpdateTag)}
                buttons={updateItemButtons(setUpdatePopup, userId, targetItemId, targetInventoryId, {"name": updateName, "tag": updateTag})}
                popup={setUpdatePopup}
              />
            : <p></p>
          }
        </>
      }
        
    </article>
  )
}