import React from 'react'
import "./Sidebar.css"
import { BsBoxSeam } from "react-icons/bs";
import DashboardLink from '../../UI/DashboardLink/DashboardLink';
import AccountNav from '../../UI/AccountNav/AccountNav';
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
  return <>
  <input type="checkbox" style={{display: "none"}} id='sidebar' />
    <section className='sidebarContainer'>

        <div className="sideHeader">
            <label htmlFor="sidebar">
                <BsBoxSeam style={{ fontWeight: "bolder", color: "#2563eb"}}/>
                <h2>Invi-Tory</h2>
            </label>
        </div>

        <nav className='sidebarNav'>
            <DashboardLink />
            <DashboardLink />
            <DashboardLink />
        </nav>

        <div className="sidebarFooter">
            <AccountNav />
            <button className='logoutButton'>
                <BiLogOut />
                <p>Logout</p>
            </button>
        </div>
    </section>
  </>
}

export default Sidebar