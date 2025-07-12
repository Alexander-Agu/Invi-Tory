import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import "./invitoryBoxHome.css"
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";
import BoxDetails from "../../components/BoxDetails/BoxDetails";
import { FiBox } from "react-icons/fi";
import ItemBox from '../../components/ItemBox/ItemBox';

export default function InvitoryBoxHome() {
  // const { userId } = useParams();
  const [items, setItems] = useState([]);
  const [loadItems, setLoadingItems] = useState();


  return (
    <main className='invi-box-container'>

      <nav className='invi-box-navbar'>
        <div className="invi-box-nav-intro">
          <a href={`dashboard/${1}`} > <FaArrowLeft /> <span>Back to Inventories</span></a>

          <h2 className='invi-box-title'>Laptops Details</h2>
        </div>

        <div className="invi-box-nav-buttons">
          <button><HiMiniPencilSquare /></button>
          <button><FaTrash /></button>
        </div>
      </nav>


      <article className='invi-box-details'>
        <section className='invi-box-left-details'>
          <BoxDetails />
        </section>

        <section className='invi-box-right-details'>
          <BoxDetails />
        </section>
      </article>


      <article className='invi-box-items'>
        <h2><FiBox style={{"color": "#2563eb"}} /> <span>Items in Laptops {`(${5})`} items</span></h2>

        <section className=''>
          <ItemBox />
        </section>
      </article>

    </main>
  )
}