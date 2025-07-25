import { TfiEmail } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { DeleteAccountAsync, UpdateUserInformationAsync } from "../../api/UserApi";

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


// update buttons for the update endpoint
export const updateButtons = (setPopup, userId, body, updateButton, setUpdateButton)=> {
    return [
        {
            "buttonId": 1,
            "name": "Cancel",
            "color": "white",
            "fontColor": "black",
            "execute": setPopup
        },
        {
            "buttonId": 2,
            "name": "Update",
            "color": "#2563eb",
            "fontColor": "white",
            "execute": async function  () {
                if (updateButton) return;

                try {
                    setUpdateButton(true);
                    const res =  await UpdateUserInformationAsync(userId, body);
                    location.reload();
                    setPopup(false)
                } catch (error) {
                    setUpdateButton(false);
                    console.log(error)
                }
            }
        }
    ]
}


// update input boxes
export const updateInputBoxes = (firstname, setFirstname, lastname, setLastname) => {
    return [
        {
            "type": "text",
            "inputBoxId": 1,
            "title": "Firstname",
            "input": firstname,
            "setInput": setFirstname,
            "placeHolder": firstname
        },
        {
            "type": "text",
            "inputBoxId": 2,
            "title": "Lastname",
            "input": lastname,
            "setInput": setLastname,
            "placeHolder": lastname
        }
    ]
}