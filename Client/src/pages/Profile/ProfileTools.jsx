import { FaLock } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdOutlineWarning } from "react-icons/md";

export const profileCards = ()=> {
    return [
        {
            icon: <FaLock style={{"fontSize": "2rem", "color": "#60a5fa"}}/>,
            bgColor: "#374151",
            borderColor: false,
            titleColor: "white",
            contentColor: "#9ca3af",
            title: "Keep your password secure",
            content: "Use a strong, unique password and never share it with anyone."
        },
        {
            icon: <IoEye style={{"fontSize": "2rem", "color": "#60a5fa"}}/>,
            bgColor: "#374151",
            titleColor: "white",
            contentColor: "#9ca3af",
            borderColor: false,
            title: "Monitor your account activity",
            content: "Regularly check your inventory and report any suspicious activity."
        },
        {
            icon: <MdOutlineWarning style={{"fontSize": "3rem", "color": "#fbbf24"}}/>,
            bgColor: "#794a235b",
            borderColor: "#fbbf24",
            titleColor: "#fbbf24",
            contentColor: "#fef3c7",
            title: "Keep Your Data Safe",
            content: "Never share your login credentials or personal information with others. Always log out when using shared devices."
        },
    ]
}