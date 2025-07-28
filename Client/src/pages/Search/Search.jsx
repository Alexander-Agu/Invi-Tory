import React, { useState } from 'react'
import "./search.css"
import { Link } from 'react-router-dom'
import { FaCaretLeft } from "react-icons/fa6";
import SearchBox from '../../components/SearchBox/SearchBox';
import NotFound from "../../UI/NotFound/NotFound";
import { centerContent, responsiveAlign } from './SearchTools';

export default function Search() {
  // Conditional display states
  const [foundInventories, setFoundInventories] = useState(false);
  const [foundItems, setFoundItems] = useState(false);


  return (
    <main className='search-container'>
        <div className="search-header">
            <button>
                <FaCaretLeft />
                <p>Back</p>
            </button>

            <h1>Search Results</h1>
        </div>

        <SearchBox />

        <section className='inventory-results-container'>
          <h2 className='inventory-results-title'>Inventory results...</h2>

          <div 
            className="inventory-results"
            style={!foundInventories? centerContent : responsiveAlign} 
          >
            {
              !foundInventories? <NotFound text={"Search for inventories came up empty..."} /> : <p></p>
            }
          </div>
        </section>

        <section className='items-results-container'>
          <h2 className='items-results-title'>Item results...</h2>

          <div 
            className="item-results"
            style={!foundInventories? centerContent : responsiveAlign} 
          >
            {
              !foundItems? <NotFound text={"Search for items came up empty..."} /> : <p></p>
            }
          </div>
        </section>
    </main> 
  )
}