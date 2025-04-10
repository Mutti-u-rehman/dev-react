import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    
    // Initially set based on the browser's current online status
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    
    useEffect(() => { 

        // add event listeners to update the state when the online status changes
        window.addEventListener("online", () => { setIsOnline(true) });
        window.addEventListener("offline", () => { setIsOnline(false) });

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            window.removeEventListener("online", () => { setIsOnline(true) });
            window.removeEventListener("offline", () => { setIsOnline(false) });
        };
    }, []);

    return isOnline;
}

export default useOnlineStatus;