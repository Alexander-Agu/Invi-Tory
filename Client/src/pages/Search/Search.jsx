import React from 'react'
import "./search.css"
import { Link } from 'react-router-dom'
import { FaCaretLeft } from "react-icons/fa6";

export default function Search() {
  return (
    <main className='search-container'>
        <div className="search-header">
            <button>
                <FaCaretLeft />
                <p>Back</p>
            </button>

            <h1>Search Results</h1>
        </div>
    </main> 
  )
}