import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import "./footer.css"


export default function Footer() {
  return (
    <footer className='home-footer'>
        <div className="footer-logo">
            <BsBoxSeam style={{scale: 1.5, fontWeight: "bolder", color: "#2563eb"}}/>
            <h2>Invi-Tory</h2>
        </div>

        <p>
            © 2025 Invi-Tory. All rights reserved
        </p>
    </footer>
  )
}