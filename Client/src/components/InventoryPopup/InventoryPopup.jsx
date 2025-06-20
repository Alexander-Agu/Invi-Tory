import React, { useState } from 'react'
import "./inventoryPopup.css"
import InputBox from '../../UI/InputBox/InputBox';

export default function InventoryPopup({setInventoryPopUp}) {
  const [inventoryName, setInventoryName] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="inventory-popup" onClick={()=> setInventoryPopUp(false)}>
        <div className="inventory-popup-app" onClick={(e) => e.stopPropagation()}>
            <h2 className='inventory-popup-h2'>Create your inventory box</h2>
            {/* <p></p> */}
            <InputBox 
                title={"Inventory Name"}
                input={inventoryName}
                setInput={setInventoryName}
                placeHolder={"Laptops"}
                checkValid={0}
                boxValue={1}
                required={true}
            />

            <InputBox 
                title={"Category Type"}
                input={category}
                setInput={setCategory}
                placeHolder={"Electronics"}
                checkValid={0}
                boxValue={2}
                required={true}
            />

            <div className="inventory-buttons">
                <button style={{"backgroundColor": "white", "color": "black"}} onClick={()=> setInventoryPopUp(false)}>Cancel</button>
                <button style={{"backgroundColor": "lightgreen", "color": "white"}}>Create</button>
            </div>
        </div>
    </div>
  )
}