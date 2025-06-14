import React from 'react'
import "./accountNav.css"

export default function AccountNav({name, link}) {
  return (
    <div className="accountNav">
        <a href={link}>
            <p className='initials'>{name[0].toUpperCase()}</p>
            <p className='name'>{name}</p>
        </a>
    </div>
  )
}