import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../constant";

const useRestaurantList = () => { 

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => { 
        searchRestaurants();
    }, [searchText]);

    const fetchData = async () => {
        try {
            const response = await fetch(RESTAURANT_API);
            const resJson = await response.json();
            const allRestaurants = resJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            setAllRestaurants(allRestaurants);
            setFilteredRestaurants(allRestaurants);

        } catch (error) {
            console.error("Fail to fetch list of Restaurants:", error);
        }
    }

    const searchRestaurants = () => {
        const filteredRestaurantResult = !searchText ? allRestaurants : allRestaurants.filter((res) =>
            res?.info?.name
                ?.toLowerCase()
                ?.includes(searchText?.toLowerCase()?.trim()));
        
        setFilteredRestaurants(filteredRestaurantResult);
    }

    // Return the state and setter function for searchText
    return [filteredRestaurants, searchText, setSearchText];
}

export default useRestaurantList;