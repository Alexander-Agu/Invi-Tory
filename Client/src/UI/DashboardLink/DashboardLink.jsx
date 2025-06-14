import React from 'react'
import "./dashboardLink.css"


export default function DashboardLink({name, link, icon}) {
  return (
    <div className="dashLinkContainer">
        <a href={link} className='dashLink'>
            {icon}
            <p>{name}</p>
        </a>
    </div>
  )
}