import { useState } from "react";
import { DeleteInventoryAsync } from "../../api/InventoryApi";

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