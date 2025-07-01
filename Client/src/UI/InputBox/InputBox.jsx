import React from 'react'
import "./inputBox.css"
import { FaStarOfLife } from "react-icons/fa6";
import Input from '../Input/Input';
import InputTitle from '../InputTitle/InputTitle';

export default function InputBox({title, input, setInput, placeHolder, checkValid, boxValue, required}) {
  return (
    <div className="input-box-container">
        <InputTitle 
          title={title}
          required={required}
        />

        <Input 
          type={"text"}
          input={input}
          setInput={setInput}
          placeHolder={placeHolder}
          requiredInput={checkValid}
          inputValue={boxValue}
        />
    </div>
  )
}