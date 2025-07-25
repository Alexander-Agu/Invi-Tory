import React, { useState } from 'react'
import "./profileDetails.css"
import DetailInfo from '../../UI/DetailInfo/DetailInfo'
import { profileData, updateButtons, updateInputBoxes } from './ProfileDetailTools'
import { useParams } from 'react-router-dom';
import Popup from '../Popup/Popup';



export default function ProfileDetails({data}) {
    const { firstname, lastname, username, email, createdAt, days, } = data;
    const { userId } = useParams();

    // Triggered button states
    const [updateButton, setUpdateButton] = useState(false);
    const [deleteButton, setDeleteButton] = useState(false);

    // Popup states
    const [updatePopup, setUpdatePopup] = useState(false);

    // Update texts
    const [updateFirstname, setUpdateFirstname] = useState("");
    const [updateLastname, setUpdateLastname] = useState("");

  return (
    <section className='profile-detail-app'>

        <div className="profile-detail-header">

            <h2>Account Information</h2>

            <button onClick={()=> {
                setUpdateFirstname(firstname);
                setUpdateLastname(lastname);
                setUpdatePopup(true)
                }}>

                <p>Edit Profile</p>
            </button>

        </div>

        
        <div className="profile-detail-names">

            <div className='detail-initial'>
                <p>{firstname[0].toUpperCase()}</p>
            </div>

            <div className="detail-names">
                <h2>{firstname} {lastname}</h2>
                <p>{username}</p>
            </div>

        </div>

        <div className="profile-detail-footer">
            {
                profileData(email, username, createdAt, days).map(x => {
                    const {icon, name, data} = x;

                    return <DetailInfo key={name}
                        type={name}
                        icon={icon}
                        data={data}
                    />
                })
            }
        </div>

        {
            updatePopup? <Popup 
                message={"Update basic profile information"}
                inputs={updateInputBoxes(updateFirstname, setUpdateFirstname, updateLastname, setUpdateLastname)}
                buttons={updateButtons(updatePopup, userId, {"firstname": updateFirstname, "lastname": updateLastname}, updateButton, setUpdateButton)}
                popup={setUpdatePopup}
            /> 
            : <p></p>
        }
    </section>
  )
}