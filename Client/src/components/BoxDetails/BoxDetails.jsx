import React from 'react'
import { FaCalculator } from "react-icons/fa";
import "./boxDetails.css"

export default function BoxDetails() {
  return (
    <article className='box-details-app'>
        <div className="box-detail-header">
            <FaCalculator style={{"color": "#10b981", "fontSize": "1.5rem"}} />
            <h2>Inventory Valuation (Weighted Average)</h2>
        </div>

        <div className="box-detail-container">
            <div className="box-details">
                <p className='detail-title'>Quantity:</p>

                <p className='detail-info'><span>zar</span> 45,000.00</p>
            </div>
            <div className="box-details">
                <p className='detail-title'>Quantity:</p>

                <p className='detail-info'><span>zar</span> 45,000.00</p>
            </div>
            <div className="box-details">
                <p className='detail-title'>Quantity:</p>

                <p className='detail-info'><span>zar</span> 45,000.00</p>
            </div>
            <div className="box-details">
                <p className='detail-title'>Quantity:</p>

                <p className='detail-info'><span>zar</span> 45,000.00</p>
            </div>
            <div className="box-details">
                <p className='detail-title'>Quantity:</p>

                <p className='detail-info'><span>zar</span> 45,000.00</p>
            </div>
            <div className="box-details">
                <p className='detail-title'>Quantity:</p>

                <p className='detail-info'><span>zar</span> 45,000.00</p>
            </div>
        </div>
    </article>
  )
}