import React from 'react'
import "./register.css"
import { FaArrowLeft } from "react-icons/fa6";
import SignUp from '../../components/SignUp/SignUp';

export default function Register() {
  return (
    <main className='register-main'>
        <a href="/">
        <FaArrowLeft />
        Back Home
        </a>
        <SignUp />
    </main>
  )
}
