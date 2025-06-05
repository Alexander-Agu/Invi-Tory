import React, { useState } from 'react'
import "./signUp.css"
import { BsBoxSeam } from "react-icons/bs";
import InputBox from '../../UI/InputBox/InputBox';

export default function SignUp() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [confirm, setConfirm] = useState("");


  return (
    <article className='sign-up-container'>

        <section className='sign-up-header'>

            <div className="sign-up-logo">
                <BsBoxSeam style={{ fontWeight: "bolder", color: "#2563eb"}}/>
            </div>

            <h2>
                Create Your Account
            </h2>

            <p>
                Join thousands of businesses using Invi-Tory to manage their inventory
            </p>

        </section>

        <section className='sign-up-names'>
            <InputBox 
                title={"Firstname"}
                input={firstname}
                setInput={setFirstname}
                placeHolder={"John"}
            />

            <InputBox 
                title={"Lastname"}
                input={lastname}
                setInput={setLastname}
                placeHolder={"Doe"}
            />
{/*             <div className="sign-name">

            </div>

            <div className="sign-name">

            </div> */}

        </section>

        <section className='sign-up-crit-info'>
            <InputBox 
                title={"Username"}
                input={username}
                setInput={setUsername}
                placeHolder={"ajsdjhb024"}
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
            <InputBox 
                title={"Confirm Password"}
                input={confirm}
                setInput={setConfirm}
                placeHolder={"Confirm your passsword"}
            />
        </section>

        <section className='sign-up-footer'>
            <button>Create Account</button>

            <p>
                Already have an account? 
                <a href="#">
                     Sign in here
                </a>
            </p>
        </section>

    </article>
  )
}