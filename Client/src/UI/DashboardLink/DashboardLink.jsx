import React from 'react'
import "./dashboardLink.css"
import { Link, NavLink } from 'react-router-dom'


export default function DashboardLink({name, link, icon}) {
  return (
    <div className="dashLinkContainer">
      <NavLink 
          key={name}
          // className='dashLink'
          to={link} end
          className={({isActive}) => isActive? "profile-link active": 'dashLink'}
        >

        {icon}
        <p>{name}</p>
      </NavLink>
      
    </div>
  )
}