import React from 'react'
import { FiBox } from "react-icons/fi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import "./itemBox.css";

export default function ItemBox() {
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
                <h2>MacBook Pro 14</h2>
                <p><FaTag /> <span>hggbj1762</span></p>
                <p><FiBox /> <span>Laptops</span></p>
            </div>

            <p>Added: 2024-01-15</p>
        </div>

    </div>
  )
}