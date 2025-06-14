import { RiBox2Line } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { RiDropboxLine } from "react-icons/ri";

export const sidebarLinks = [
    {
        path: "#",
        name: "Home",
        icon: <IoHomeSharp className='dash-link-icon' />
    },
    {
        path: "#",
        name: "Inventory",
        icon: <RiBox2Line className='dash-link-icon' />
    },
    {
        path: "#",
        name: "Items",
        icon: <RiDropboxLine className='dash-link-icon' />
    },
]