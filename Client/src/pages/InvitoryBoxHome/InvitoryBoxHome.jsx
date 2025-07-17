import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import "./invitoryBoxHome.css"
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";
import BoxDetails from "../../components/BoxDetails/BoxDetails";
import { FiBox } from "react-icons/fi";
import ItemBox from '../../components/ItemBox/ItemBox';
import { GetAllInventoryAsync, GetInventoryAsync } from '../../api/InventoryApi';
import { useParams } from 'react-router-dom';
import LoadScreen from '../LoadScreen/LoadScreen';
import { createItemButtons, createItemInputBoxes, deleteButtons, parseInventoryData, parseInventoryValuationData, updateButtons, updateInputBoxes } from './InvitoryBoxHomeTools';
import { FaCalculator } from "react-icons/fa";
import { GetInventoryValuationDataAsync } from '../../api/InventoryValuationApi';
import { BsGraphUpArrow } from "react-icons/bs";
import { GetInventoryItemsAsync } from '../../api/ItemApi';
import Popup from '../../components/Popup/Popup';
import CreateItem from '../../components/CreateItem/CreateItem';

export default function InvitoryBoxHome() {
  const { userId, inventoryId } = useParams();
  const [data, setData] = useState({});
  const [valuationData, setValuationData] = useState({});
  const [items, setItems] = useState([]);
  const [inventories, setInventories] = useState([]);

  const [loadData, setLoadData] = useState(true)
  const [loadItems, setLoadingItems] = useState(true);

  // POPUPS
  const [deletePopup, setDeletePopup] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);
  const [createItemPopup, setCreateItemPopup] = useState(false);

  // Update inventory parameters
  const [updateName, setUpdateName] = useState("");
  const [updateCategory, setUpdateCategory] = useState("");
  const [updateSharedCost, setUpdateSharedCost] = useState(1);

  // Create item inputs
  const [createName, setName] = useState("");
  const [createTag, setTag] = useState("");
  const [value, setValue] = useState(0);

  // Button click checks
  const [deleteButton, setDeleteButton] = useState(false);
  const [updateButton, setUpdateButton] = useState(false);
  const [createItemButton, setCreateItemButton] = useState(false);
  

  useEffect(()=>{
    let isMounted = true;

    const FetchInventoryData =  async ()=> {
      try {

        const [dataRes, valuationDataRes] = await Promise.all([
          GetInventoryAsync(userId, inventoryId),
          GetInventoryValuationDataAsync(userId, inventoryId),
        ])


        if (isMounted){
          setData(dataRes);
          setValuationData(valuationDataRes);
          console.log(items)

          setUpdateName(dataRes.name);
          setUpdateCategory(dataRes.category);
          setUpdateSharedCost(dataRes.sharedCosts);
        }
      } catch (error) {
        if (isMounted){
          console.log(error)
        }
      } finally{
        if (isMounted) setLoadData(false);
      }
    }

    const FetchInventoryItems = async ()=> {
      let isMounted = true
      try {

        if (isMounted){
          const res = await GetInventoryItemsAsync(userId, inventoryId);
          console.log(res);
          setItems(res);
        }
        
      } catch (error) {
        if (isMounted){
          console.log(error)
        }
      } finally{
        if (isMounted) setLoadingItems(false)
      }
    }

    if (isMounted) {
      FetchInventoryData()
      FetchInventoryItems()
    }


    return ()=> {
      isMounted = false;
    }
  },[userId, inventoryId]);


  return (
    <main className='invi-box-container'>

      {
        /// Display loading screen if data is still being fetched
        loadItems && loadData? <LoadScreen /> :
        
        <>
          <nav className='invi-box-navbar'>
            <div className="invi-box-nav-intro">
              <a href={`/dashboard/${userId}/inventory`} > <FaArrowLeft /> <span>Back to Inventories</span></a>

              <h2 className='invi-box-title'>{data.name} Details</h2>
            </div>

            <div className="invi-box-nav-buttons">
              <button onClick={()=> setUpdatePopup(true)}><HiMiniPencilSquare /></button>
              <button onClick={()=> setDeletePopup(true)}><FaTrash /></button>
            </div>
          </nav>


          <article className='invi-box-details'>
            <section className='invi-box-left-details'>
              <BoxDetails 
                icon={<FiBox style={{"color": "#2563eb", "fontSize": "1.5rem"}} />} 
                title={"Inventory Data"} 
                data={parseInventoryData(data)} 
              />
            </section>

            <section className='invi-box-right-details'>
              <BoxDetails 
                icon={<BsGraphUpArrow style={{"color": "#10b981", "fontSize": "1.5rem"}} />} 
                data={parseInventoryValuationData(valuationData)} 
                title={"Inventory Valuation (Weighted Average)"} 
              />
            </section>
          </article>


          <article className='invi-box-items'>
            
            <div className="invi-box-item-header">
              <h2 className='invi-box-items-intro'><FiBox style={{"color": "#2563eb"}} /> <span>Items in {data.name} {`(${data.itemCount})`}</span></h2>

              <button onClick={()=> setCreateItemPopup(true)}>Create Item</button>
            </div>

            <section className='invi-box-item-container'>
              {
                items.map(x => {
                  const {createdAt, inventoryId, inventoryName, itemId, name, tag} = x;
                  return <ItemBox key={itemId} 
                    body={x}
                  />
                })
              }
            </section>
          </article>
        </>
      }

      { // DELETE INVENTORY POPUP
        deletePopup? <Popup 
          message={"Are you sure you want to delete your Inventory?"}
          inputs={[]}
          buttons={deleteButtons(setDeletePopup, userId, inventoryId, deleteButton, setDeleteButton)}
          popup={setDeletePopup}
        /> : <p></p>
      }

      { // UPDATE INVENTORY POPUP
        updatePopup? <Popup 
          message={"Update Inventory"}
          inputs={updateInputBoxes(updateName, setUpdateName, updateCategory, setUpdateCategory, updateSharedCost, setUpdateSharedCost)}
          buttons={updateButtons(setUpdatePopup, userId, inventoryId, {"name": updateName, "category": updateCategory, "sharedCosts": updateSharedCost}, updateButton, setUpdateButton)}
          popup={setUpdatePopup}
        /> : <p></p>
      }

      { // CREATE ITEM POPUP
        createItemPopup? <Popup 
          message={"Create Item"}
          inputs={createItemInputBoxes(createName, setName, createTag, setTag, value, setValue, value, setValue)}
          buttons={createItemButtons(setCreateItemPopup, userId, inventoryId, {"name": createName, "tag": createTag, "value": value}, createItemButton, setCreateItemButton)}
          popup={setCreateItemPopup}
        /> : <p></p>
      }
    </main>
  )
}