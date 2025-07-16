import React from 'react'
import "./itemCard.css"
import { BsBoxSeam } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function ItemCard({id, inventoryId, name, category, inventoryName, createdAt, setTargetInventoryId, setTargetItemId, setDeleteItemPopup, setUpdatePopup, setUpdateName, setUpdateTag, tag}) {
    
    const DeletePopUp = ()=>{
        setDeleteItemPopup(true);
        setTargetInventoryId(inventoryId);
        setTargetItemId(id)
    }

    const UpdatePopup = ()=> {
        setUpdatePopup(true);
        setUpdateName(name);
        setUpdateTag(tag);
        setTargetInventoryId(inventoryId);
        setTargetItemId(id)
    }
  return (
    <div className="item-card" key={id}>
        <section className='item-header'>
            <div className='item-icon' >
                <BsBoxSeam  />
            </div>
            

            <div className="item-buttonss">
                <button onClick={()=> UpdatePopup()} >
                    <HiOutlinePencilSquare />
                </button>

                <button onClick={()=> DeletePopUp()} >
                    <FaRegTrashAlt />
                </button>
            </div>
        </section>

        <section className='item-body'>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>{inventoryName}</p>
        </section>

        <section className='item-footer'>
            <p>{createdAt}</p>
        </section>
    </div>
  )
}