import React from 'react'
import "./input.css"

export default function Input({type, input, setInput, placeHolder, requiredInput, inputValue}) {

  
  return <input className='input' 
    type={type} 
    onChange={e => setInput(e.target.value)}
    value={input}
    placeholder={placeHolder}
    style={{"border": requiredInput === inputValue? "1px solid red": "1px solid #4b5563"}}
  />
}