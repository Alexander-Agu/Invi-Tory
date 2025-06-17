import React from 'react'
import "./register.css"
import SignUp from '../../components/SignUp/SignUp';
import BackHome from '../../UI/BackHome/BackHome';

export default function Register() {
  return (
    <main className='register-main'>
        <BackHome />
        <SignUp  />
    </main>
  )
}
