import React from 'react'
import "./inventoryStat.css"
import { FiBox } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';

export default function InventoryStat({name, units, id}) {
    const {userId} = useParams()
  return (
    <Link to={`/dashboard/${userId}/inventory/${id}`} className="inventory-stat">
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
        
    </Link>
  )
}