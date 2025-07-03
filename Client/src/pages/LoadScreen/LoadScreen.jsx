import React from 'react'
import "./loadScreen.css"

export default function LoadScreen() {
  return (
    <div class="loading-container">
    <div>
      <div class="loading-text">
        <span class="loading-letter">L</span>
        <span class="loading-letter">O</span>
        <span class="loading-letter">A</span>
        <span class="loading-letter">D</span>
        <span class="loading-letter">I</span>
        <span class="loading-letter">N</span>
        <span class="loading-letter">G</span>
      </div>
      <div class="loading-dots">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>
  </div>
  )
}