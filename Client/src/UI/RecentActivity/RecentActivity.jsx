import React from 'react'
import "./recentActivity.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

export default function RecentActivity({id, request, type, name}) {

  let icon;
  if (request === "Delete") icon = <RiDeleteBin6Line className='recent-icon' style={{color: "red"}}/>
  if (request === "Create") icon = <MdAdd className='recent-icon' style={{color: "lightgreen"}} />
  if (request === "Update") icon = <IoCreateOutline className='recent-icon' style={{color: "#2563eb"}} />
  
  return (
    <div className="recent-activity" key={id}>
        <div>
            {icon}
        </div>
        

        <p className='recent-type'>{request}</p>
        <p> {type}</p>
        <p style={{
            color: "#60a5fa"
        }}>"{name}"</p>
    </div>
  )
}