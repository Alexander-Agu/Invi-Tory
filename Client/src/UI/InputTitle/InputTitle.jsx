import React from 'react'
import "./inputTitle.css"
import { FaStarOfLife } from "react-icons/fa6";

export default function InputTitle({title, required}) {
  return (
    <h2 className='input-title'>
        {title} {required? <FaStarOfLife  style={{"color": "red", "fontSize": "5px"}}/> : <p></p>}
    </h2>
  )
}