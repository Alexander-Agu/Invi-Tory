import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import "./backHome.css"
export default function BackHome() {
  return (
        <a href="/" className='register-home'>
            <p className='shift'><FaArrowLeft /></p>
            <p>Back Home</p>
        </a>
  )
}