import { CreateItemAsync, DeleteItemAsync, UpdateItemAsync } from "../../api/ItemApi";



// Delete buttons for the delete endpoint
export const deleteItemButtons = (setItemPopup, userId, targetInventory, targetItem)=> {
    return [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "white",
            "fontColor": "black",
            "execute": setItemPopup
        },
        {
            "buttonId": 2,
            "name": "Delete",
            "color": "red",
            "fontColor": "black",
            "execute": async function  () {
                try {
                    const res =  await DeleteItemAsync(userId, targetInventory, targetItem);
                    setItemPopup(false)
                    location.reload();
                } catch (error) {
                    console.log(error)
                }
            }
        }
    ]
}


// update buttons for the update endpoint
export const updateItemButtons = (setUpdateItemPopUp, userId, targetItemId, targetInventoryId, body)=> {
    return [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "white",
            "fontColor": "black",
            "execute": setUpdateItemPopUp
        },
        {
            "buttonId": 2,
            "name": "Update",
            "color": "#2563eb",
            "fontColor": "white",
            "execute": async function  () {
                try {
                    console.log(`${userId} ${targetInventoryId}`)
                    const res =  await UpdateItemAsync(userId, targetInventoryId, targetItemId, body);
                    location.reload();
                    setUpdateItemPopUp(false)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    ]
}


// update input boxes
export const updateItemInputBoxes = (name, setName, tag, setTag) => {
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
            "title": "Tag",
            "input": tag,
            "setInput": setTag
        }
    ]
}


// buttons for the create item endpoint
export const createItemButtons = (setCreatePopup, userId, inventoryId, body, createButton, setCreateItemButton)=> {
    console.log(userId)
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
                setCreateItemButton(false);
                if (createButton) return;

                try {
                    setCreateItemButton(true);
                    const res =  await CreateItemAsync(userId, inventoryId, body);
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