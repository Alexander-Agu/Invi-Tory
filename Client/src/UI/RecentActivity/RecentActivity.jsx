import React from 'react'
import "./recentActivity.css"
import { RiDeleteBin6Line } from "react-icons/ri";

export default function RecentActivity() {
  return (
    <div className="recent-activity">
        <div>
            <RiDeleteBin6Line style={{color: "red"}}/>
        </div>
        

        <h3>Deleted</h3>
        <p> Item</p>
        <p style={{
            color: "#60a5fa"
        }}>"Bakugi"</p>
    </div>
  )
}