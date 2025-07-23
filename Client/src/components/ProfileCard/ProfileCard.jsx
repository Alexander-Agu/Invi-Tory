import React from 'react'
import "./profileCard.css"

/*   */

export default function ProfileCard({data}) {
    const {borderColor, bgColor, titleColor, contentColor,icon, title, content} = data;

  return (
    <div className="profile-card-container" style={{"backgroundColor": bgColor, "border": borderColor != false? `1px solid ${borderColor}`: "none" }}>
        {icon}
        <div className="profile-card-message">

            <h2 style={{"color": titleColor}}>
                {title}
            </h2>

            <p style={{"color": contentColor}}>
                {content}
            </p>

        </div>


    </div>
  )
}