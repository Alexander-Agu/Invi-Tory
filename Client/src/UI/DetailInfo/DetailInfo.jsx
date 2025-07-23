import React from 'react'
import "./detailInfo.css"
import { TfiEmail } from "react-icons/tfi";

export default function DetailInfo({icon, type, data}) {
  return (
    <div className="detail-info-container">
        {icon}

        <div className="detail-info">
            <p className='detail-info-title'>{type}</p>
            <p className='detail-info-content'>{data}</p>
        </div>
    </div>
  )
}