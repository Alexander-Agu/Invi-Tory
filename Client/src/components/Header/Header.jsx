import React from 'react'
import "./header.css"
import { BsBoxSeam } from "react-icons/bs";

export default function Header() {
  return (
    <header className='header'>
        <div className="headerOverlap">
            <div className="logo">
                <a href="/">
                    <BsBoxSeam style={{scale: 1.5, fontWeight: "bolder", color: "#2563eb"}}/>
                    <h2>Invi-Tory</h2>
                </a> 
            </div>

            <nav className='navbar'>
                <a href="#" className='Hsignin'>Sign In</a>
                <a href="#" className='Hsignup'>Get Started</a>
            </nav>
        </div>
    </header>
  )
}