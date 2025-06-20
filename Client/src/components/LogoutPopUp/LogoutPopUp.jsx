import React from 'react'
import "./logoutPopUp.css"

export default function LogoutPopUp({setLogoutPopUp}) {
  return (
    <div className="log-pop-up" onClick={()=> setLogoutPopUp(false)}>
        <div className="logout-app" onClick={(e) => e.stopPropagation()}>
            <h1>Are you sure you want to log out?</h1>

            <div className="logout-buttons">
                <button onClick={()=> setLogoutPopUp(false)}>No</button>

                <a href='/' className='log-a'>Yes</a>
            </div>

        </div>
    </div>
  )
}