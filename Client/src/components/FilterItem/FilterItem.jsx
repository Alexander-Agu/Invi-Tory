import React from 'react'
import "./filterItem.css"
import { FaFilter } from "react-icons/fa";
import { GetInventoryNames, GetUniqueInventory } from '../../tools/Filter';

export default function FilterItem({ inventories, targetCategory, targetInventoryName, category}) {
  return (
    <div className="item-filter-container">
        <FaFilter style={{"color": "white"}} />

        <p>Filter by </p>

        <section className='filter-options'>

          <article className='filter-by-category'>

            <label htmlFor="item-category-filter"> Category: </label>

            <select name="categories" id="item-category-filter" onChange={(e)=> targetCategory(e.target.value)}>
              <option value="all">All</option>
              {
                GetUniqueInventory(inventories).map(x => {
                  
                  return <option key={x} value={x}>{x}</option>
                })
              }
            </select>

          </article>

          <article className='filter-by-name'>
            <label htmlFor="inventory-name-filter">Inventory name: </label>

            <select name="inventory-name-filter" id="inventory-name-filter" onChange={(e)=> targetInventoryName(e.target.value)}>
              <option value="all">All</option>
              {
                GetInventoryNames(inventories, category).map(x => {
                  
                  return <option key={x} value={x}>{x}</option>
                })
              }
            </select>
          </article>

        </section>

    </div>
  )
}