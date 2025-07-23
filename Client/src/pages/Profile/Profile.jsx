import React from 'react'
import "./profile.css"
import ProfileDetails from '../../components/ProfiileDetails/ProfileDetails'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { profileCards } from './ProfileTools'
import { FaTrash } from "react-icons/fa";

export default function Profile() {
  return (
    <main className='profile-container'>

        <article className="profile-header">

            <button className='profile-home-btn'>
                Home
            </button>

            <div className="profile-app-intro">
                <h2>Your Profile</h2>
                <p>Manage your account information and security settings</p>
            </div>

        </article>

        <div className="profile-app">

            <section className='profile-app-details'>
                <ProfileDetails />
            </section>

            <section className='profile-app-messages'>
                {
                    profileCards().map(x => {
                        return <ProfileCard data={x} key={x.name}/>
                    })
                }
            </section>

        </div>
        

        <div className="delete-card">

            <div className="delete-card-info">
                
                <div>
                    <FaTrash style={{"color": "rgb(248, 113, 113"}} />
                </div>

                <div>
                    <h2>Delete Account</h2>
                    <p>Permanently delete your account and all associated data. This action cannot be undone.</p>
                </div>

            </div>

            <button className='delete-button'>
                <FaTrash /> <p>Delete Account</p>
            </button>

        </div>

    </main>
  )
}