import React from 'react'
import "./signIntro.css"
import { BsBoxSeam } from "react-icons/bs";

export default function SignIntro({title, content}) {
  return (
        <section className='sign-intro'>

            <div className="sign-intro-logo">
                <BsBoxSeam style={{ fontWeight: "bolder", color: "#2563eb"}}/>
            </div>

            <h2>
                {title}
            </h2>

            <p>
                {content}
            </p>

        </section>
  )
}