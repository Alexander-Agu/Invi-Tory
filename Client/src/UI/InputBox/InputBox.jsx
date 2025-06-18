import React from 'react'
import "./inputBox.css"
import { FaStarOfLife } from "react-icons/fa6";

export default function InputBox({title, input, setInput, placeHolder, checkValid, boxValue, required}) {
  return (
    <div className="input-box-container">
        <h2>
            {title} {required? <FaStarOfLife  style={{"color": "red", "fontSize": "5px"}}/> : <p></p>}
        </h2>

        <input
            style={{"border": checkValid === boxValue? "1px solid red": "1px solid #4b5563"}} 
            className='input-box'
            type="text" 
            onChange={e => setInput(e.target.value)} 
            value={input} 
            placeholder={placeHolder} 
        />
    </div>
  )
}