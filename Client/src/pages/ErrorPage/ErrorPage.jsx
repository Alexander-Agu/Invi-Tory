import React from 'react'
import "./errorPage.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiHome9Fill } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
import { GetToken, GetUserId } from '../../tools/ApiTools';

export default function ErrorPage({type, title, message}) {
  let tp = type.split("")
  const id = GetUserId();

  return (
    <div className="errorContainer">
        <div className="errorApp">

          <div className="errorHeader">
            <h1>{tp[0]}<span>{tp[1]}</span>{tp[2]}</h1>

            <h2>{title}</h2>

            <p>
              {message}
            </p>
          </div>

          <div className="errorFooter">
            <button  onClick={()=> window.history.back()} className='errorBack'>
              <FaArrowLeftLong />

              <p>Go back</p>
            </button>

            <Link to={id === ""? "/": `/dashboard/${id}`} className='errorHome'>
              <RiHome9Fill />
              <p>Home</p>
            </Link>
          </div>

        </div>
    </div>
  )
}