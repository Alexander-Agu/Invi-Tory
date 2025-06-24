import React from 'react'
import "./filter.css"
import { FaFilter } from "react-icons/fa";
import { GetUniqueInventory } from '../../tools/Filter';

export default function Filter({inventories, targetCategory}) {
  return (
    <div className="filter-container">
        <FaFilter style={{"color": "white"}} />

        <label for="category-filter">Filter by category: </label>

        <select name="categories" id="category-filter" onChange={(e)=> targetCategory(e.target.value)}>
          <option value="all">All</option>
          {
            GetUniqueInventory(inventories).map(x => {
              // const [category] = x;
              
              return <option key={x} value={x}>{x}</option>
            })
          }
        </select>

        <p></p>
    </div>
  )
}