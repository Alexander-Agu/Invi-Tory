import React from 'react'
import "./filter.css"
import { FaFilter } from "react-icons/fa";

export default function Filter({categories, targetCategory, }) {
  return (
    <div className="filter-container">
        <FaFilter style={{"color": "white"}} />

        <label for="category-filter">Filter by category: </label>

        <select name="categories" id="category-filter" onChange={(e)=> targetCategory(e.target.value)}>
          <option value="all">All</option>
          {
            categories.map(x => {
              const {inventoryId, category} = x;
              
              return <option key={inventoryId} value={category}>{category}</option>
            })
          }
        </select>

        <p></p>
    </div>
  )
}