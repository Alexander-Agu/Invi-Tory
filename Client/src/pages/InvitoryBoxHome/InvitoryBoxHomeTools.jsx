import { CreateInventoryAsync, DeleteInventoryAsync, UpdateInventoryAsync } from "../../api/InventoryApi";
import { CreateItemAsync } from "../../api/ItemApi";

// Delete buttons for the delete endpoint
export const deleteButtons = (setInventoryPopUp, userId, inventoryId, deleteButton, setDeleteButton)=> {
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
            "name": "Delete",
            "color": "red",
            "fontColor": "black",
            "execute": async function  () {
                if (deleteButton) return;
                

                try {
                    setDeleteButton(true)
                    const res =  await DeleteInventoryAsync(userId, inventoryId);
                    window.history.back();
                    setInventoryPopUp(false)

                } catch (error) {
                    setDeleteButton(false)
                    console.log(error)
                }
            }
        }
    ]
}


// update buttons for the update endpoint
export const updateButtons = (setInventoryPopUp, userId, inventoryId, body, updateButton, setUpdateButton)=> {
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
                if (updateButton) return;

                try {
                    setUpdateButton(true);
                    const res =  await UpdateInventoryAsync(userId, inventoryId, body);
                    location.reload();
                    setInventoryPopUp(false)
                } catch (error) {
                    setUpdateButton(false);
                    console.log(error)
                }
            }
        }
    ]
}


// update input boxes
export const updateInputBoxes = (name, setName, category, setCategory, sharedCost, setSharedCost) => {
    return [
        {
            "type": "text",
            "inputBoxId": 1,
            "title": "Name",
            "input": name,
            "setInput": setName,
            "placeHolder": name
        },
        {
            "type": "text",
            "inputBoxId": 2,
            "title": "Category",
            "input": category,
            "setInput": setCategory,
            "placeHolder": category
        },
        {
            "type": "number",
            "inputBoxId": 3,
            "title": "Shared Cost",
            "input": sharedCost,
            "setInput": setSharedCost,
            "placeHolder": sharedCost
        },
    ]
}



// buttons for the create item endpoint
export const createItemButtons = (setCreatePopup, userId, inventoryId, itemId, body, createItemButton, setCreateItemButton)=> {
    return [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "white",
            "fontColor": "black",
            "execute": setCreatePopup
        },
        {
            "buttonId": 2,
            "name": "Create",
            "color": "#2563eb",
            "fontColor": "white",
            "execute": async function  () {
                if (createItemButton) return;


                try {
                    setCreateItemButton(true);
                    const res =  await CreateItemAsync(userId, inventoryId, itemId, body);
                    location.reload();
                    setCreatePopup(false)
                } catch (error) {
                    setCreateItemButton(false);
                    console.log(error)
                }
            }
        }
    ]
}


// create item input boxes
export const createItemInputBoxes = (name, setName, tag, setTag, value, setValue) => {
    return [
        {
            "type": "text",
            "inputBoxId": 1,
            "title": "Name",
            "input": name,
            "setInput": setName,
            "placeHolder": name
        },
        {
            "type": "text",
            "inputBoxId": 2,
            "title": "Tag",
            "input": tag,
            "setInput": setTag,
            "placeHolder": tag
        },
        {
            "type": "number",
            "inputBoxId": 3,
            "title": "Value \ Price",
            "input": value,
            "setInput": setValue,
            "placeHolder": value
        },
    ]
}



// Parses Inventory Data
export const parseInventoryData = (data) => {
    return [
        [ <span>Name: </span>, data.name ],
        [ <span>Category: </span>, data.category ],
        [ <span>Number of items: </span>, data.itemCount ],
    ]
}


// Parses Inventory Valuation Data
export const parseInventoryValuationData = (valuationData) => {
    return [
        [ <span>Quantity: </span>, valuationData.quintity ],
        [ <span>Total Purchase Cost: </span>, <span style={{"color": "#10b981"}}>R {valuationData.totalPurchaceCost} </span> ],
        [ <span>Weighted Average: </span>, <span style={{"color": "#10b981"}}> R {valuationData.weightedAvarage} </span> ],
        [ <span>Closing Stock: </span>, <span style={{"color": "#10b981"}}> R {valuationData.closingStock} </span> ],
        [ <span>Shared Costs: </span>, <span style={{"color": "#10b981"}}> R {valuationData.sharedCost} </span> ],
        [ <span>Updated At: </span>, valuationData.updatedDate ],
    ]
}