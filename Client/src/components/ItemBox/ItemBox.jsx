import React from 'react'
import { FiBox } from "react-icons/fi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import "./itemBox.css";

export default function ItemBox({id, inventoryId, name, tag, inventoryName, createdAt}) {
  return (
    <div className="item-box-container">

        <div className="item-box-header">
            <div className='item-box-icon'><FiBox /></div>

            <div className="item-box-buttons">
                <button className='btn-1'>
                    <HiMiniPencilSquare />
                </button>

                <button className='btn-2'>
                    <BsFillTrashFill />
                </button>
            </div>
        </div>


        <div className="item-box-body">
            <div className="item-box-main-body">
                <h2>{name}</h2>
                <p><FaTag /> <span>{tag === ""? <span>No Tah</span> : <span>{tag}</span>}</span></p>
                <p><FiBox /> <span>{inventoryName}</span></p>
            </div>

            <p>Added: {createdAt}</p>
        </div>

    </div>
  )
}