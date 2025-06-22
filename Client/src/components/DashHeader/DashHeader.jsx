import React from 'react'
import "./dashHeader.css"
import { FaPlus } from "react-icons/fa";

export default function DashHeader({title, message, buttonName, execute}) {
  return (
        <section className='dashboard-header'>
            <div className="dashboard-intro">
                <h1>{title}</h1>
                <p>{message}</p>
            </div>

            <button className='dashboard-btn' 
                    onClick={()=> execute(true)}
                    style={{"display": execute === false? "none" : "block"}}
                >

                <FaPlus />
                <p>{buttonName}</p>
            </button>
        </section>
  )
}