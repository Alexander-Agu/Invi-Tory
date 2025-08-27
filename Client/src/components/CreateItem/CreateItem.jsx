import React, { useEffect, useState } from 'react'
import "./createItem.css"
import InputBox from '../../UI/InputBox/InputBox'
import { useOutletContext, useParams } from 'react-router-dom';
import { GetInventoryNamesAndId } from '../../tools/Filter';
import { CreateItemAsync } from '../../api/ItemApi';


export default function CreateItem({setCreateItem}) {
    const [itemName, setItemName] = useState("");
    const [tag, setTag] = useState("");
    const [value, setValue] = useState(0);
    const [expiryDate, setExpiryDate] = useState("yyyy/mm/dd");
    const [inventoryId, setInventoryId] = useState("");
    const { logoutPopUp, setLogoutPopUp, inventories } = useOutletContext();
    const { userId } = useParams();

    const [addButton, setAddButton] = useState(false);


    let body = {
        "name": itemName,
        "tag": tag,
        "value": value
    };

    const CreateItem = async (e)=> { // Creates item
        e.preventDefault();
        if (addButton) return;

        try {
            setAddButton(true);
            const res = await CreateItemAsync(userId, inventoryId, body)
            location.reload();
        } catch (error) {
            setAddButton(false);
            console.log(error)
        }
    }

  return (
    <div className="createitem-container" onClick={()=> setCreateItem(false)}>

        <div className="create-item-app" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Item</h2>
            <form onSubmit={CreateItem}>
                <div>
                    <label htmlFor="name">Item Name *</label>
                    <input onChange={e => setItemName(e.target.value)} type="text" id="name" placeholder="Enter item name" value={itemName} />
                </div>

                <div>
                    <label htmlFor="tag">Tag</label>
                    <input onChange={e => setTag(e.target.value)}  type="text" id="tag" placeholder="Enter item tag" value={tag} />
                </div>

                <div>
                    <label htmlFor="tag">Value</label>
                    <input onChange={e => setValue(e.target.value)}  type="number" id="tag" placeholder="Enter unit price" value={value} />
                </div>

                <div>
                    <label htmlFor="inventory">Inventory *</label>
                    <select id="inventory" onChange={e => setInventoryId(e.target.value)}>
                    <option value="">Select inventory</option>
                    {
                        GetInventoryNamesAndId(inventories).map(x => {
                            const [id, name] = x;

                            return <option key={id} value={id}>{name}</option>
                        })
                    }
                    </select>
                </div>

                {/* <div>
                    <label htmlFor="expiry">Expiry Date (Optional)</label>
                    <input onChange={e => setExpiryDate(e.target.value)}  type="date" id="expiry" value={expiryDate} />
                </div> */}

                <div className="actions">
                    <button type="button" className="btn btn-outline" onClick={()=> setCreateItem(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary" onClick={(e)=> CreateItem(e)}>Add Item</button>
                </div>
            </form>
        </div>
    </div>

  )
}