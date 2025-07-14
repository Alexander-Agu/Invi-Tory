import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import "./invitoryBoxHome.css"
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";
import BoxDetails from "../../components/BoxDetails/BoxDetails";
import { FiBox } from "react-icons/fi";
import ItemBox from '../../components/ItemBox/ItemBox';
import { GetInventoryAsync } from '../../api/InventoryApi';
import { useParams } from 'react-router-dom';
import LoadScreen from '../LoadScreen/LoadScreen';
import { parseInventoryData } from './InvitoryBoxHomeTools';

export default function InvitoryBoxHome() {
  const { userId, inventoryId } = useParams();
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [loadItems, setLoadingItems] = useState();
  

  useEffect(()=>{
    let isMounted = true;

    const FetchInventoryData =  async ()=> {
      try {

        const [dataRes] = await Promise.all([
          GetInventoryAsync(userId, inventoryId)
        ])
        console.log(dataRes)


        if (isMounted){
          setData(dataRes)
        }
      } catch (error) {
        if (isMounted){
          console.log(error)
        }
      } finally{
        setLoadingItems(false);
      }
    }

    if (isMounted) FetchInventoryData()


    return ()=> {
      isMounted = false;
    }
  },[userId, inventoryId]);


  return (
    <main className='invi-box-container'>

      {
        /// Display loading screen if data is still being fetched
        loadItems? <LoadScreen /> :
        
        <>
          <nav className='invi-box-navbar'>
            <div className="invi-box-nav-intro">
              <a href={`dashboard/${1}`} > <FaArrowLeft /> <span>Back to Inventories</span></a>

              <h2 className='invi-box-title'>{data.name} Details</h2>
            </div>

            <div className="invi-box-nav-buttons">
              <button><HiMiniPencilSquare /></button>
              <button><FaTrash /></button>
            </div>
          </nav>


          <article className='invi-box-details'>
            <section className='invi-box-left-details'>
              <BoxDetails icon={<FiBox style={{"color": "#2563eb", "fontSize": "1.5rem"}} />} title={"Inventory Data"} data={parseInventoryData(data)} />
            </section>

            <section className='invi-box-right-details'>
              {/* <BoxDetails /> */}
            </section>
          </article>


          <article className='invi-box-items'>
            <h2><FiBox style={{"color": "#2563eb"}} /> <span>Items in {data.name} {`(${data.itemCount})`}</span></h2>

            <section className='invi-box-item-container'>
              <ItemBox />
              <ItemBox />
              <ItemBox />
              <ItemBox />
              <ItemBox />
            </section>
          </article>
        </>
      }

    </main>
  )
}