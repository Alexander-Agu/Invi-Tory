import React, { useEffect, useState } from 'react'
import "./itemHome.css"
import DashHeader from '../DashHeader/DashHeader'
import FilterItem from '../FilterItem/FilterItem';
import { useOutletContext } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';

export default function ItemHome() {
  // Filtering conditions
  const [targetCategory, setTargetCategory] = useState("all");
  const [targetInventoryName, setTargetInventoryName] = useState("all");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { logoutPopUp, setLogoutPopUp, inventories } = useOutletContext();
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(()=>{
    let isMounted = false;

    const FetchData = async ()=> {
      try {
        // const res = await 
      } catch (error) {
        console.log(error);
      } finally{
        setLoadingItems(false);
      }
    }
  },[]);



  return (
    <article className='item-home'>
        <DashHeader 
            title={"My Items"}
            message={"Manage all your inventory items"}
            buttonName={"Create Item"}
            execute={false}
        />


        <FilterItem 
          inventories={inventories} 
          targetCategory={targetCategory}
          targetInventoryName={targetInventoryName} 
        />

        <section className='item-bottom'>
          <ItemCard id={1} name={"Alex"} category={"Money"} inventoryName={"A lot"} createdAt={"2003"}/>
          <ItemCard id={1} name={"Alex"} category={"Money"} inventoryName={"A lot"} createdAt={"2003"}/>
          <ItemCard id={1} name={"Alex"} category={"Money"} inventoryName={"A lot"} createdAt={"2003"}/>
          <ItemCard id={1} name={"Alex"} category={"Money"} inventoryName={"A lot"} createdAt={"2003"}/>
          <ItemCard id={1} name={"Alex"} category={"Money"} inventoryName={"A lot"} createdAt={"2003"}/>
          <ItemCard id={1} name={"Alex"} category={"Money"} inventoryName={"A lot"} createdAt={"2003"}/>
        </section>
        
    </article>
  )
}