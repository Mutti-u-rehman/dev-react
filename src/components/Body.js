import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useRestaurantList from "../utiles/hooks/useRestaurantList";

export default Body = () => {

  const {
    filteredRestaurants,
    searchText,
    setSearchText
  } = useRestaurantList();

  // console.log(filteredRestaurants[0]?.info?.id);


  return (
    <div className="body-wrapper">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              // setSearchText(e?.target?.value)
            }}
          />
          <button
            // onClick={() => { setFilteredRestaurants(searchText) }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          // onClick={() => {
          //   const filteredRestaurants = restaurants?.filter(
          //     (res) => res?.info?.avgRating > 4.3
          //   );
          //   setFilteredRestaurants(filteredRestaurants);
          // }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((res) => (
          <Link to={"restaurantMenu/" + res?.info?.id} key={res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
