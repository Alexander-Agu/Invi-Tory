import React from 'react'
import "./card.css"

export default function Card({icon, title, content}) {
  return (
    <div className="card-container">
        <div className="card-icon">
            {icon}
        </div>

        <div className="card-title">
            {title}
        </div>

        <div className="card-content">
            {content}
        </div>
    </div>
  )
}