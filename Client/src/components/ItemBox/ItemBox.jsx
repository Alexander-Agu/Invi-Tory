import React from 'react'
import { FiBox } from "react-icons/fi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import "./itemBox.css";

export default function ItemBox() {
  return (
    <div className="item-box-container">

        <div className="item-box-header">
            <div className='item-box-icon'><FiBox /></div>

            <div className="item-box-buttons">
                <button>
                    <HiMiniPencilSquare />
                </button>

                <button>
                    <BsFillTrashFill />
                </button>
            </div>
        </div>




    </div>
  )
}