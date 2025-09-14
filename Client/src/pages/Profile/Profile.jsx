import React, { useEffect, useState } from 'react'
import "./profile.css"
import ProfileDetails from '../../components/ProfiileDetails/ProfileDetails'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { deleteButtons, profileCards } from './ProfileTools'
import { FaTrash } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { FetchUserAsync } from "../../api/UserApi";
import LoadScreen from "../../pages/LoadScreen/LoadScreen";
import Popup from "../../components/Popup/Popup";

export default function Profile() {
    const [profile, setProfile] = useState({});
    const { userId } = useParams();

    // Load states
    const [loadProfile, setLoadProfile] = useState(true);

    // Popup states
    const [deletePopup, setDeletePopup] = useState(false);

    // Triggered button states
    const [deleteButton, setDeleteButton] = useState(false);


    useEffect(()=>{
        let isMounted = true;

        const FetchData = async ()=> {
            try {
                if (isMounted){
                    const res = await FetchUserAsync(userId);

                    setProfile(res);
                }
            } catch (error) {
                if (isMounted){
                    console.log(error);
                }
            } finally{
                setLoadProfile(false);
            }
        }

        if (isMounted) FetchData()

        return ()=> {
            isMounted = false;
        }
    },[userId])


  return (
    <main className='profile-container'>
        {
            loadProfile? <LoadScreen /> :
            <>
                <article className="profile-header">

                    <a href={`/dashboard/${userId}/home`} className='profile-home-btn'>
                        Home
                    </a>

                    <div className="profile-app-intro">
                        <h2>Your Profile</h2>
                        <p>Manage your account information and security settings</p>
                    </div>

                </article>

                <div className="profile-app">

                    <section className='profile-app-details'>
                        <ProfileDetails data={profile} />
                    </section>

                    <section className='profile-app-messages'>
                        {
                            profileCards().map((x, index) => {
                                return <ProfileCard data={x} key={index}/>
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

                    <button className='delete-button' onClick={()=> setDeletePopup(true)}>
                        <FaTrash /> <p>Delete Account</p>
                    </button>

                </div>
            </>
        }

        {
            deletePopup? <Popup 
                message={"Are you sure you want to delete account?"}
                inputs={[]}
                buttons={deleteButtons(deletePopup, userId, deleteButton, setDeleteButton)}
                popup={setDeletePopup}
            />            
            : <p></p>
        }


    </main>
  )
}