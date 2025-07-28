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
import ItemBox from '../ItemBox/ItemBox';


export default function ItemHome() {
  // Filtering conditions
  const [targetCategory, setTargetCategory] = useState("all");
  const [targetInventoryName, setTargetInventoryName] = useState("all");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const { logoutPopUp, setLogoutPopUp, inventories } = useOutletContext();
  const { userId } = useParams();

  // Create, Delete and Update popup values
  const [loadingItems, setLoadingItems] = useState(true);
  const [createItemPopup, setCreateItemPopup] = useState(false);

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
        const res = FilterItems(items, targetCategory, targetInventoryName);
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

                return <ItemBox key={itemId}
                  body={x}
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
        </>
      }
        
    </article>
  )
}