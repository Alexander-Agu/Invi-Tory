import React, { useState } from 'react'
import SignIntro from '../SignIntro/SignIntro'
import "./signIn.css"
import InputBox from '../../UI/InputBox/InputBox';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");

  return (
    <article className='sign-in-container'>
        <SignIntro 
            title={"Welcome back"}
            content={"Join thousands of businesses using Invi-Tory to manage their inventory"}
        />

        <InputBox 
            title={"Email"}
            input={email}
            setInput={setEmail}
            placeHolder={"doe@gmail.com"}
        />
        <InputBox 
            title={"Password"}
            input={passcode}
            setInput={setPasscode}
            placeHolder={"Create a strong password"}
        />

        <section className='sign-in-footer'>
            <button>Create Account</button>

            <p>
                Don't have an account? 
                <a href="/register">
                     Sign Up Here
                </a>
            </p>
        </section>
    </article>
  )
}