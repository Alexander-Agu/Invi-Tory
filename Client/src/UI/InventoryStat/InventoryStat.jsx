import React from 'react'
import "./inventoryStat.css"
import { FiBox } from "react-icons/fi";

export default function InventoryStat() {
  return (
    <div className="inventory-stat">
        <div className="stat-name">
            <div className="stat-icon">
                <FiBox />
            </div>

            <h2>
                Laptop's
            </h2>
        </div>

        <p>
            500 items
        </p>
        
    </div>
  )
}