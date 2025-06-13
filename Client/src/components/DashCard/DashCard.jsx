import React from 'react'
import "./dashCard.css"
import { FiBox } from "react-icons/fi";

export default function DashCard() {
  return (
    <div className="dash-card">
        <div className="dash-card-header">
            <p style={{color: "#d1d5db"}}>Total Inventory</p>
            <FiBox style={{color: "#60a5fa"}} />
        </div>

        <div className="dash-stat">
            <h2 style={{color: "white"}}>127</h2>
            <p style={{color: "#6b7280"}}>Inventories</p>
        </div>
    </div>
  )
}