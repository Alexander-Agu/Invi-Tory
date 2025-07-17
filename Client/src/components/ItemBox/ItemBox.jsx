import React, { use, useState } from 'react'
import { FiBox } from "react-icons/fi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import "./itemBox.css";
import Popup from '../Popup/Popup';
import { deleteItemButtons, updateItemButtons, updateItemInputBoxes } from './ItemBoxTools';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemBox({body}) {
    const { name, value, tag, createdAt, itemId, inventoryId, inventoryName} = body;
    // Popups
    const [deletePopup, setDeletePopup] = useState(false);
    const [updatePopup, setUpdatePopup] = useState(false);
    const [detailPopup, setDetailPopup] = useState(false);

    // Update item inputs
    const [updateName, setUpdateName] = useState(name);
    const [updateTag, setUpdateTag] = useState(tag);
    const {userId} = useParams();

    // Button click checks
    const [deleteButton, setDeleteButton] = useState(false);
    const [updateButton, setUpdateButton] = useState(false);

  return (
    <div className="item-box-container" onClick={()=> setDetailPopup(true)}>

        <div className="item-box-header">
            <div className='item-box-icon'><FiBox /></div>

            <div className="item-box-buttons" onClick={(e)=> e.stopPropagation()}>
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

        { // DELETE ITEM POPUP
            deletePopup? <Popup
                message={"Are you sure you want to delete your Item"}
                inputs={[]}
                buttons={deleteItemButtons(setDeletePopup, userId, inventoryId, itemId, deleteButton, setDeleteButton)}
                popup={setDeletePopup}
            /> : <p></p>
        }

        { // UPDATE ITEM POPUP
            updatePopup? <Popup 
                message={"Update Item"}
                inputs={updateItemInputBoxes(updateName, setUpdateName, updateTag, setUpdateTag)}
                buttons={updateItemButtons(setUpdatePopup, userId, itemId, inventoryId, {"name": updateName, "tag": updateTag}, updateButton, setUpdateButton)}
                popup={setUpdatePopup}
            /> : <p></p>
        }

        { // SHOW ITEM DETAIL POPUP
            detailPopup? <ItemDetail 
                popup={setDetailPopup}
                name={name}
                tag={tag}
                value={value}
                createdAt={createdAt} 
            /> : <p></p>
        }
    </div>
  )
}