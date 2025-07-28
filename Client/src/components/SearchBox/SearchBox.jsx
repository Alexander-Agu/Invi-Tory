import React from 'react'
import "./searchBox.css"
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  return (
    <div className="search-box-container">
        <input type="text" placeholder={`Search inventories and items...`}/>

        <button>
            <IoSearch />
            <p>Search</p>
        </button>
    </div>
  )
}