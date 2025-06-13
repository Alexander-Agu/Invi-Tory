import React from 'react'
import "./recentActivity.css"
import { RiDeleteBin6Line } from "react-icons/ri";

export default function RecentActivity() {
  return (
    <div className="recent-activity">
        <div>
            <RiDeleteBin6Line className='recent-icon' style={{color: "red"}}/>
        </div>
        

        <p className='recent-type'>Deleted</p>
        <p> Item</p>
        <p style={{
            color: "#60a5fa"
        }}>"Bakugi"</p>
    </div>
  )
}