import { BsBoxSeam } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { IoShieldOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";



export const features = [
    {
        icon: <BsBoxSeam />,
        title: "Inventory Tracking",
        description: "Stay on top of your stock levels and movements. Invitory makes it simple to know what you have, what you’ve used, and what you need to restock."
    },
    {
        icon: <IoPersonOutline />,
        title: "User Profile Management",
        description: "Each user can create and manage their own profile, making it easy to personalize and securely access their inventory."
    },
    {
        icon: <IoShieldOutline />,
        title: "Secure & Reliable",
        description: "Enterprise-grade security with role-based access control and secure data encryption."
    },
    {
        icon: <IoAnalyticsOutline />,
        title: "Inventory Valuation",
        description: "Get an accurate picture of your inventory’s worth at any time. Invitory helps you understand the value of your stock with up-to-date calculations."
    },
    {
        icon: <IoCashOutline />,
        title: "Weighted Average Calculation",
        description: "Automatically calculates weighted average costs, ensuring you always know the real cost per item across multiple purchases."
    },
    {
        icon: <RxLightningBolt />,
        title: "Fast Performance",
        description: "Lightning-fast performance built on ASP.NET and SQL Server for maximum efficiency."
    }
]