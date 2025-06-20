import React from 'react'
import "./inventoryStat.css"
import { FiBox } from "react-icons/fi";

export default function InventoryStat({name, units}) {
  return (
    <div className="inventory-stat">
        <div className="stat-name">
            <div className="stat-icon">
                <FiBox />
            </div>

            <h2>
                {name}
            </h2>
        </div>

        <p>
            {units} items
        </p>
        
    </div>
  )
}