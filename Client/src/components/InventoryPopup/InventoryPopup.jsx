import React, { useState } from 'react'
import "./inventoryPopup.css"
import InputBox from '../../UI/InputBox/InputBox';
import { CreateInventoryAsync } from '../../api/InventoryApi';
import { useParams } from 'react-router-dom';

export default function InventoryPopup({setInventoryPopUp}) {
    const [inventoryName, setInventoryName] = useState("");
    const [category, setCategory] = useState("");
    const { userId } = useParams();

    // Button clicks check
    const [addButton, setAddButton] = useState(false);

    // Create inventory
    const CreateInventory = async (userId) => {
        let body = {
            "name": inventoryName,
            "category": category
        };

        if (addButton) return;

        try {
            setAddButton(true);
            const res = await CreateInventoryAsync(userId, body);
            location.reload();
            setInventoryPopUp(false)
        } catch (error) {
            setAddButton(false);
            console.log(error);
        }
    }

  return (
    <div className="inventory-popup" onClick={()=> setInventoryPopUp(false)}>
        <div className="inventory-popup-app" onClick={(e) => e.stopPropagation()}>
            <h2 className='inventory-popup-h2'>Create your inventory box</h2>
            {/* <p></p> */}
            <InputBox 
                type={"text"}
                title={"Inventory Name"}
                input={inventoryName}
                setInput={setInventoryName}
                placeHolder={"Laptops"}
                checkValid={0}
                boxValue={1}
                required={true}
            />

            <InputBox 
                type={"text"}
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
                <button style={{"backgroundColor": "lightgreen", "color": "white"}} onClick={()=> CreateInventory(userId)}>Create</button>
            </div>
        </div>
    </div>
  )
}