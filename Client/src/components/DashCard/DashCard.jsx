import React from 'react'
import "./dashCard.css"


export default function DashCard({title, icon, total, type}) {
  return (
    <div className="dash-card">
        <div className="dash-card-header">
            <p style={{color: "#d1d5db"}}>{title}</p>
            {icon}
        </div>

        <div className="dash-stat">
            <h2 style={{color: "white"}}>{total}</h2>
            <p style={{color: "#6b7280"}}>{type}</p>
        </div>
    </div>
  )
}