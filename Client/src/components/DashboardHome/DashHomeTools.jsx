import { useState } from "react";
import { FiBox } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";


// Dashboard card data
export const dashboardData = (inventoryCount, itemCount, days) => {
    return [
        {
            "title": "Total Inventory",
            "icon": <FiBox style={{color: "#60a5fa", fontSize: "1.2rem"}} />,
            "total": inventoryCount,
            "type": "Inventories"
        },
        {
            "title": "Total items",
            "icon": <FiBox style={{color: "red", fontSize: "1.2rem"}} />,
            "total": itemCount,
            "type": "Items"
        },
        {
            "title": "Days using app",
            "icon": <IoIosTimer style={{color: "pink", fontSize: "1.2rem"}} />,
            "total": days,
            "type": "Days"
        },
    ]
}