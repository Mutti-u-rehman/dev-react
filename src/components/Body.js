import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useRestaurantList from "../utiles/hooks/useRestaurantList";
import useOnlineStatus from "../utiles/hooks/useIsOnline";
import { withPromotedLabel } from "../components/RestaurantCard";

export default Body = () => {
  const [filteredRestaurants, searchText, setSearchText] = useRestaurantList();

  const isUserOnline = useOnlineStatus();
  console.log(filteredRestaurants);

  // console.log(filteredRestaurants[0]?.info?.id);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (!isUserOnline) {
    return <h1>Looks like you are not online </h1>;
  }

  return (
    <div className="flex-col">
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

      <div className="flex flex-wrap gap-4">
        {filteredRestaurants?.map((res) => (
          <Link to={"restaurantMenu/" + res?.info?.id} key={res?.info?.id}>
            {res?.info?.avgRating > 4.2 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
