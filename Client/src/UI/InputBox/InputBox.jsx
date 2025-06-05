import React from 'react'
import "./inputBox.css"

export default function InputBox({title, input, setInput, placeHolder}) {
  return (
    <div className="input-box-container">
        <h2>
            {title}
        </h2>

        <input
            className='input-box'
            type="text" 
            onChange={e => setInput(e.target.value)} 
            value={input} 
            placeholder={placeHolder} 
        />
    </div>
  )
}