import React from 'react'
import "./inventoryBox.css"
import { BsBoxSeam } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function InventoryBox({id, category, name, itemCount, setDeletePopUp, setUpdatePopup, setUpdateName, setUpdateCategory, setUpdateBody, setTargetInventory}) {
  const DeleteButton = () => {
    console.log("Jghkjl")
    setDeletePopUp(true);
    setTargetInventory(id);
  }

  const UpdateButton = () => {
    setUpdatePopup(true);
    setTargetInventory(id);
    setUpdateName(name);
    setUpdateCategory(category);
    // setUpdateBody({"name": name, "category": category});
  }

  return (
    <div className="inventory-box" key={id}>
        <section className='inventory-header'>
            <div className='inventory-icon' >
                <BsBoxSeam  />
            </div>
            

            <div className="inventory-buttonss">
                <button onClick={()=> UpdateButton()}>
                    <HiOutlinePencilSquare />
                </button>

                <button onClick={()=> DeleteButton()}>
                    <FaRegTrashAlt />
                </button>
            </div>
        </section>

        <section className='inventory-body'>
            <h2>{name}</h2>
            <p>{category}</p>
        </section>

        <section className='inventory-footer'>
            <p>{itemCount}</p>
            <p>Items</p>
        </section>
    </div>
  )
}