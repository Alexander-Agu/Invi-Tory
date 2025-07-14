import React from 'react'
import "./inventoryBox.css"
import { BsBoxSeam } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link, useParams } from 'react-router-dom';


export default function InventoryBox({id, category, name, itemCount, setDeletePopUp, setUpdatePopup, setUpdateName, setUpdateCategory, setTargetInventory}) {
  const { userId } = useParams();

  const DeleteButton = () => {
    setDeletePopUp(true);
    setTargetInventory(id);
  }

  const UpdateButton = () => {
    setUpdatePopup(true);
    setTargetInventory(id);
    setUpdateName(name);
    setUpdateCategory(category);
  }

  return (
    <Link style={{"textDecoration": "none"}} to={`/dashboard/${userId}/inventory/${id}`} className="inventory-box" key={id}>
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
    </Link>
  )
}