import React from 'react'
import "./inventoryBox.css"
import { BsBoxSeam } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function InventoryBox() {
  return (
    <div className="inventory-box">
        <section className='inventory-header'>
            <div className='inventory-icon' >
                <BsBoxSeam  />
            </div>
            

            <div className="inventory-buttons">
                <button>
                    <HiOutlinePencilSquare />
                </button>

                <button>
                    <FaRegTrashAlt />
                </button>
            </div>
        </section>

        <section className='inventory-body'>
            <h2>Laptop's</h2>
            <p>Electronics</p>
        </section>

        <section className='inventory-footer'>
            <p>0</p>
            <p>Items</p>
        </section>
    </div>
  )
}