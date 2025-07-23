import React from 'react'
import "./profileDetails.css"
import DetailInfo from '../../UI/DetailInfo/DetailInfo'
import { profileData } from './ProfileDetailTools'

export default function ProfileDetails() {
  return (
    <section className='profile-detail-app'>

        <div className="profile-detail-header">

            <h2>Account Information</h2>

            <button>
                <p>Edit Profile</p>
            </button>

        </div>

        
        <div className="profile-detail-names">

            <div className='detail-initial'>
                <p>A</p>
            </div>

            <div className="detail-names">
                <h2>Alexander Agu</h2>
                <p>@alagujhb024</p>
            </div>

        </div>

        <div className="profile-detail-footer">
            {
                profileData("agu@gmail.com", "alagujhb024", "2025", 60).map(x => {
                    const {icon, name, data} = x;

                    return <DetailInfo key={name}
                        type={name}
                        icon={icon}
                        data={data}
                    />
                })
            }
        </div>

    </section>
  )
}