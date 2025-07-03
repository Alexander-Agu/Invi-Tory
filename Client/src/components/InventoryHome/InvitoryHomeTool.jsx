import { CreateInventoryAsync, DeleteInventoryAsync, UpdateInventoryAsync } from "../../api/InventoryApi";

// Delete buttons for the delete endpoint
export const deleteButtons = (setInventoryPopUp, userId, targetInventory)=> {
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
        }
    ]
}


// Create buttons
export const CreateButtons = (setInventoryPopUp, userId, body)=> {
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
                try {
                    const res =  await CreateInventoryAsync(userId, body);
                    location.reload();
                    setInventoryPopUp(false)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    ]
}



// Create Item inputs
export const CreateInputs = (inventoryName, setInventoryName, inventoryCategory, setInventoryCategory)=> {
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
        }
    ];
}