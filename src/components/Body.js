import RestaurantCard from "./RestaurantCard";
import { RESPONSE } from "../utiles/mockData";
import { useState } from "react";

export default Body = () => {
  const response =
    RESPONSE?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const [restaurants, setRestaurants] = useState(response);
  console.log(response);

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
