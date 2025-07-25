import React from 'react'
import "./loadScreen.css"

export default function LoadScreen() {
  return (
    <div className="loading-container">
    <div>
      <div className="loading-text">
        <span className="loading-letter">L</span>
        <span className="loading-letter">O</span>
        <span className="loading-letter">A</span>
        <span className="loading-letter">D</span>
        <span className="loading-letter">I</span>
        <span className="loading-letter">N</span>
        <span className="loading-letter">G</span>
      </div>
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  </div>
  )
}