import React from 'react'
import "./sidebar.css"
import { BsBoxSeam } from "react-icons/bs";
import DashboardLink from '../../UI/DashboardLink/DashboardLink';
import AccountNav from '../../UI/AccountNav/AccountNav';
import { BiLogOut } from "react-icons/bi";
import { sidebarLinks } from './Links';



function Sidebar({setLogoutPopUp, name}) {
  return <>
  <input type="checkbox" style={{display: "none"}} id='sidebar' />
    <section className='sidebarContainer'>

        <div className="sideHeader">
            <label htmlFor="sidebar">
                <BsBoxSeam style={{ fontWeight: "bolder", color: "#2563eb" }}/>
                <h2>Invi-Tory</h2>
            </label>
        </div>

        <nav className='sidebarNav'>
            {
                sidebarLinks.map(x => {
                    const {path, name, icon} = x;
                    return <DashboardLink key={name} name={name} link={path} icon={icon} />
                })
            }
        </nav>

        <div className="sidebarFooter">
            <AccountNav name={name} link={"#"} />
            <button className='logoutButton' onClick={()=> setLogoutPopUp(true)}>
                <BiLogOut />
                <p>Logout</p>
            </button>
        </div>
    </section>
  </>
}

export default Sidebar