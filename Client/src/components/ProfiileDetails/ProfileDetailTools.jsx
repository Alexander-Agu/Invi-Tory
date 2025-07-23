import { TfiEmail } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";

export const profileData = (email, username, createdAt, days)=> {
    return [
        {
            icon: <TfiEmail style={{"color": "#60a5fa"}} />,
            name: "Email",
            data: email
        },
        {
            icon: <CgProfile style={{"color": "#34d399"}} />,
            name: "Username",
            data: username
        },
        {
            icon: <SlCalender style={{"color": "#a78bfa"}} />,
            name: "Member since",
            data: createdAt
        },
        {
            icon: <MdOutlineAccessTime style={{"color": "#fb923c"}} />,
            name: "Days Active",
            data: days
        },
    ];
}