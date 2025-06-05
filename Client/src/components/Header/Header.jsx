import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <header className='header'>
        <div className="headerOverlap">
            <div className="logo">
                <h2>Invi-Tory</h2>
            </div>

            <nav className='navbar'>
                <a href="#" className='Hsignin'>Sign In</a>
                <a href="#" className='Hsignup'>Get Started</a>
            </nav>
        </div>
    </header>
  )
}