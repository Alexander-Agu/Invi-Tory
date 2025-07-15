import React, { useState } from 'react'
import { FiBox } from "react-icons/fi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import "./itemBox.css";
import Popup from '../Popup/Popup';
import { deleteItemButtons, updateItemButtons, updateItemInputBoxes } from './ItemBoxTools';
import { useParams } from 'react-router-dom';

export default function ItemBox({id, inventoryId, name, tag, inventoryName, createdAt}) {
    const [deletePopup, setDeletePopup] = useState(false);
    const [updatePopup, setUpdatePopup] = useState(false);

    const [updateName, setUpdateName] = useState(name);
    const [updateTag, setUpdateTag] = useState(tag);
    const {userId} = useParams();

  return (
    <div className="item-box-container">

        <div className="item-box-header">
            <div className='item-box-icon'><FiBox /></div>

            <div className="item-box-buttons">
                <button className='btn-1' onClick={()=> setUpdatePopup(true)}>
                    <HiMiniPencilSquare />
                </button>

                <button className='btn-2' onClick={()=> setDeletePopup(true)}>
                    <BsFillTrashFill />
                </button>
            </div>
        </div>


        <div className="item-box-body">
            <div className="item-box-main-body">
                <h2>{name}</h2>
                <p><FaTag /> <span>{tag === ""? <span>No Tag</span> : <span>{tag}</span>}</span></p>
                <p><FiBox /> <span>{inventoryName}</span></p>
            </div>

            <p>Added: {createdAt}</p>
        </div>

        {
            deletePopup? <Popup
                message={"Are you sure you want to delete your Item"}
                inputs={[]}
                buttons={deleteItemButtons(setDeletePopup, userId, inventoryId, id)}
                popup={setDeletePopup}
            /> : <p></p>
        }

        {
            updatePopup? <Popup 
                message={"Update Item"}
                inputs={updateItemInputBoxes(updateName, setUpdateName, updateTag, setUpdateTag)}
                buttons={updateItemButtons(setUpdatePopup, userId, id, inventoryId, {"name": updateName, "tag": updateTag})}
                popup={setUpdatePopup}
            /> : <p></p>
        }

    </div>
  )
}