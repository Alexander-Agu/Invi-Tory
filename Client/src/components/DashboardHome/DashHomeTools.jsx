import { useState } from "react";
import { DeleteInventoryAsync, UpdateInventoryAsync } from "../../api/InventoryApi";
import { FiBox } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";


// Dashboard card data
export const dashboardData = (inventoryCount, itemCount) => {
    return [
        {
            "title": "Total Inventory",
            "icon": <FiBox style={{color: "#60a5fa", fontSize: "1.2rem"}} />,
            "total": inventoryCount,
            "type": "Inventories"
        },
        {
            "title": "Total items",
            "icon": <FiBox style={{color: "red", fontSize: "1.2rem"}} />,
            "total": itemCount,
            "type": "Items"
        },
        {
            "title": "Days using app",
            "icon": <IoIosTimer style={{color: "pink", fontSize: "1.2rem"}} />,
            "total": 1,
            "type": "Days"
        },
    ]
}


// Delete buttons for the delete endpoint
export const deleteButtons = (setInventoryPopUp, userId, targetInventory)=> {
    return [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "lightgreen",
            "fontColor": "white",
            "execute": setInventoryPopUp
        },
        {
            "buttonId": 2,
            "name": "Delete",
            "color": "white",
            "fontColor": "black",
            "execute": async function  () {
                try {
                    const res =  await DeleteInventoryAsync(userId, targetInventory);
                    location.reload();
                    setInventoryPopUp(false)

                } catch (error) {
                    console.log(error)
                }
            }
        }
    ]
}


// update buttons for the update endpoint
export const updateButtons = (setInventoryPopUp, userId, targetInventory, body)=> {
    return [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "white",
            "fontColor": "black",
            "execute": setInventoryPopUp
        },
        {
            "buttonId": 2,
            "name": "Update",
            "color": "#2563eb",
            "fontColor": "white",
            "execute": async function  () {
                try {
                    const res =  await UpdateInventoryAsync(userId, targetInventory, body);
                    location.reload();
                    setInventoryPopUp(false)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    ]
}


// update input boxes
export const updateInputBoxes = (name, setName, category, setCategory) => {
    return [
        {
            "type": "text",
            "inputBoxId": 1,
            "title": "Name",
            "input": name,
            "setInput": setName
        },
        {
            "type": "text",
            "inputBoxId": 2,
            "title": "Category",
            "input": category,
            "setInput": setCategory
        }
    ]
}