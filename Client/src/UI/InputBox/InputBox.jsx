import React, { useState } from 'react'
import "./inputBox.css"
import { IoEye } from "react-icons/io5";
import Input from '../Input/Input';
import InputTitle from '../InputTitle/InputTitle';

export default function InputBox({type, title, input, setInput, placeHolder, checkValid, boxValue, required}) {
  const captureType = type;
  const [tempType, setTempType] = useState(type);

  const showPassword = ()=> {
    if (captureType === "password" && tempType === "password") setTempType("text");

    else if (captureType === "password" && tempType === "text") setTempType("password"); 
  }

  return (
    <div className="input-box-container">
        <InputTitle 
          title={title}
          required={required}
        />

      <div style={{"width": "100%"}}>
        <Input 
          type={type}
          input={input}
          setInput={setInput}
          placeHolder={placeHolder}
          requiredInput={checkValid}
          inputValue={boxValue}
          tempType={tempType}
        />

        {
          type === "password"? <button onClick={()=> showPassword()}><IoEye /></button> : <></>
        }
      </div>
    </div>
  )
}