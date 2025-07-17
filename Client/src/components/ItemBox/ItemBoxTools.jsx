import { CreateItemAsync, DeleteItemAsync, UpdateItemAsync } from "../../api/ItemApi";

// Delete buttons for the delete endpoint
export const deleteItemButtons = (setItemPopup, userId, inventoryId, itemId)=> {
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
                    const res =  await DeleteItemAsync(userId, inventoryId, itemId);
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
export const updateItemButtons = (setUpdateItemPopUp, userId, itemId, inventoryId, body)=> {
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
                    const res =  await UpdateItemAsync(userId, inventoryId, itemId, body);
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