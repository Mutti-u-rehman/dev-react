import { useEffect, useState } from "react";
import { NEW_MENU_API } from "../constant";

const useRestaurantMenu = (resID) => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => { 
        const data = await fetch(NEW_MENU_API + resID);
        const res = await data.json();
        setResInfo(res?.data?.cards);
    }

    return resInfo;
}

export default useRestaurantMenu;