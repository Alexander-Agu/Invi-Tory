import React from 'react'
import "./hero.css"

export default function Hero() {
  return (
    <section className='hero'>
        <h1>Master Your <span className='gradient-text'>Inventory</span></h1>

        <p>
            Streamline your inventory management with Invi-Tory's powerful, secure platform. Built with ASP.NET and SQL Server for enterprise-grade performance and reliability.
        </p>

        <nav className='heroNav'>
            <a href="/register" className='heroLink'>Join us today</a>
            <a href="#" className='heroLink request'>Request Demo</a>
        </nav>
    </section>
  )
}
