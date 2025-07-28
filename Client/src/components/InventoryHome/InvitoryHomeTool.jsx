import { CreateInventoryAsync, DeleteInventoryAsync, UpdateInventoryAsync } from "../../api/InventoryApi";

// Delete buttons for the delete endpoint
export const deleteButtons = (setInventoryPopUp, userId, targetInventory, deleteButton, setDeleteButton)=> {
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
                    setDeleteButton(true);
                    const res =  await DeleteInventoryAsync(userId, targetInventory);
                    location.reload();
                    setInventoryPopUp(false)

                } catch (error) {
                    setDeleteButton(false);
                    console.log(error)
                }
            }
        }
    ]
}


// update buttons for the update endpoint
export const updateButtons = (setInventoryPopUp, userId, targetInventory, body, updateButton, setUpdateButton)=> {
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
                    const res =  await UpdateInventoryAsync(userId, targetInventory, body);
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


// Create buttons
export const CreateButtons = (setInventoryPopUp, userId, body, addButton, setAddButton)=> {
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
            "name": "Create",
            "color": "#2563eb",
            "fontColor": "white",
            "execute": async function  () {
                setAddButton(false)
                if (addButton) return;

                try {
                    setAddButton(true);
                    const res =  await CreateInventoryAsync(userId, body);
                    location.reload();
                    setInventoryPopUp(false)
                } catch (error) {
                    setAddButton(false);
                    console.log(error)
                }
            }
        }
    ]
}



// Create Item inputs
export const CreateInputs = (inventoryName, setInventoryName, inventoryCategory, setInventoryCategory, sharedCosts, setSharedCosts)=> {
    return [
        {
            "type": "text",
            "inputBoxId": 1,
            "title": "Name",
            "input": inventoryName,
            "setInput": setInventoryName,
            "placeHolder": "Inventory Name"
        },
        {
            "type": "text",
            "inputBoxId": 2,
            "title": "Category",
            "input": inventoryCategory,
            "setInput": setInventoryCategory,
            "placeHolder": "Inventory category"
        },
        {
            "type": "number",
            "inputBoxId": 3,
            "title": "Shared Cost",
            "input": sharedCosts,
            "setInput": setSharedCosts,
            // "placeHolder": "Inventory category"
        }
    ];
}