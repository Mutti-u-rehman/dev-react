import RestaurantCard from "./RestaurantCard";
import { RESPONSE } from "../utiles/mockData";
import { useEffect, useState } from "react";

export default Body = () => {
  const response =
    RESPONSE?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const resJson = await res?.json();
    const allRestaurants =
      resJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(allRestaurants);
  };

  return (
    <div className="body-wrapper">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
