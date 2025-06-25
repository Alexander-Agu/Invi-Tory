import React, { useState } from 'react'
import "./createItem.css"
import InputBox from '../../UI/InputBox/InputBox'
import { useOutletContext } from 'react-router-dom';


export default function CreateItem() {
    const [itemName, setItemName] = useState("");
    const [inventoryName, setInventoryName] = useState("");
    const { logoutPopUp, setLogoutPopUp, inventories } = useOutletContext();

  return (
    <div className="createitem-container">

        <div class="create-item-app">
            <h2>Add New Item</h2>
            <form>
                <div>
                    <label for="name">Item Name *</label>
                    <input type="text" id="name" placeholder="Enter item name" />
                </div>

                <div>
                    <label for="tag">Tag *</label>
                    <input type="text" id="tag" placeholder="Enter item tag" />
                </div>

                <div>
                    <label for="tag">Value</label>
                    <input type="text" id="tag" placeholder="Enter unit price" />
                </div>

                <div>
                    <label for="inventory">Inventory *</label>
                    <select id="inventory">
                    <option value="">Select inventory</option>
                    <option value="Pantry">Pantry</option>
                    <option value="Freezer">Freezer</option>
                    <option value="Fridge">Fridge</option>
                    </select>
                </div>

                <div>
                    <label for="expiry">Expiry Date (Optional)</label>
                    <input type="date" id="expiry" />
                </div>

                <div class="actions">
                    <button type="button" class="btn btn-outline">Cancel</button>
                    <button type="submit" class="btn btn-primary">Add Item</button>
                </div>
            </form>
        </div>
    </div>

  )
}