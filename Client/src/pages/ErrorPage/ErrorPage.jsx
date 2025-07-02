import React from 'react'
import "./errorPage.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiHome9Fill } from "react-icons/ri";

export default function ErrorPage({type, title, message}) {
  return (
    <div className="errorContainer">
        <div className="errorApp">

          <div className="errorHeader">
            <h1>4<span>0</span>4</h1>

            <h2>Page not found</h2>

            <p>
              Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or the URL was typed incorrectly.
            </p>
          </div>

          <div className="errorFooter">
            <a href='#' className='errorBack'>
              <FaArrowLeftLong />

              <p>Go back</p>
            </a>

            <a href='#' className='errorHome'>
              <RiHome9Fill />

              <p>Home</p>
            </a>
          </div>

        </div>
    </div>
  )
}