import React from 'react'
import './notFound.css'

export default function NotFound({text}) {
  return (
    <div className="notFound">
        <h2>
            {text}
        </h2>
    </div>
  )
}