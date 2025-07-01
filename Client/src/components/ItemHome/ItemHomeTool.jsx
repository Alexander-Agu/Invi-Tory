import { DeleteItemAsync, UpdateItemAsync } from "../../api/ItemApi";



// Delete buttons for the delete endpoint
export const deleteItemButtons = (setItemPopup, userId, targetInventory, targetItem)=> {
    return [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "lightgreen",
            "fontColor": "white",
            "execute": setItemPopup
        },
        {
            "buttonId": 2,
            "name": "Delete",
            "color": "white",
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
                    // location.reload();
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
            "inputBoxId": 1,
            "title": "Name",
            "input": name,
            "setInput": setName
        },
        {
            "inputBoxId": 2,
            "title": "Tag",
            "input": tag,
            "setInput": setTag
        }
    ]
}