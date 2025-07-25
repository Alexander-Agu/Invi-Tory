import React from 'react'
import "./input.css"

export default function Input({type, input, setInput, placeHolder, requiredInput, inputValue, tempType = "null" }) {

  
  return <input className='input' 
    type={tempType != "null"? tempType: type} 
    onChange={e => setInput(e.target.value)}
    value={input}
    placeholder={placeHolder}
    style={{
      "border": requiredInput === inputValue? "1px solid red": "1px solid #4b5563",
      "borderRadius": type === "password"? "8px 0px 0px 8px": "8px",
      "borderRight": type === "password"? "none": "1px solid #4b5563"
    }}
  />
}