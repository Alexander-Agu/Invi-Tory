import React from 'react'
import "./signUp.css"
import { BsBoxSeam } from "react-icons/bs";

export default function SignUp() {
  return (
    <article className='sign-up-container'>

        <section className='sign-up-header'>

            <div className="sign-up-logo">
                <BsBoxSeam style={{scale: 1.5, fontWeight: "bolder", color: "#2563eb"}}/>
            </div>

            <h2>
                Create Your Account
            </h2>

            <p>
                Join thousands of businesses using Invi-Tory to manage their inventory
            </p>

        </section>

        <section className='sign-up-names'>

        </section>

        <section className='sign-up-crit-info'>

        </section>

        <section className='sign-up-footer'>

        </section>

    </article>
  )
}