import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { useParams } from 'react-router-dom'
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import "./invitoryBoxHome.css"
import BoxDetails from '../../components/BoxDetails/BoxDetails';

export default function InvitoryBoxHome() {
    const { userId } = useParams();

  return (
    <main className='invitory-box-home-container'>
        <div className="invitory-box-home-app">
            <div className="invitory-box-header">
                <nav className='invitory-box-nav'>
                    <a className='invi-box-home-link' href={`dashboard/${userId}`}><FaArrowLeft /></a>

                    <div className="invi-box-logo">
                        <div className='invi-box-icon'>
                            <FiBox />   
                        </div>
                        

                        <div className="invi-box-title">
                            <h2>Laptops</h2>
                            <p>Inventory Details</p>
                        </div>
                    </div>
                </nav>

                <div className="invi-box-buttons">
                    <button><FaPenToSquare /></button>
                    <button><FaTrash /></button>
                </div>

            </div>

            <div className="invitory-box-footer">
                <div className="invi-box-details">
                    <div className="invi-box-left">
                        <BoxDetails />
                    </div>

                    <div className="invi-box-right">
                        <BoxDetails />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}