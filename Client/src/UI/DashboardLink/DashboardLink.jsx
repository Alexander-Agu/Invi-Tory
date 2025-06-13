import React from 'react'
import "./dashboardLink.css"
import { CiHome } from "react-icons/ci";

export default function DashboardLink() {
  return (
    <div className="dashLinkContainer">
        <a href="#" className='dashLink'>
            <CiHome />
            <p>Home</p>
        </a>
    </div>
  )
}