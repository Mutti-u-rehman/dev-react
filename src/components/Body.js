import RestaurantCard from "./RestaurantCard";
import { RESPONSE } from "../utiles/mockData";
import { useEffect, useState } from "react";
import { PROXY_API, RESTAURANT_API } from "../utiles/constant";

export default Body = () => {
  // const response =
  //   RESPONSE?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants;

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`${RESTAURANT_API}`);
    const resJson = await res?.json();
    const allRestaurants =
      resJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(allRestaurants);
    setFilteredRestaurants(allRestaurants);
  };

  return (
    <div className="body-wrapper">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e?.target?.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = restaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase()?.trim())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants?.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
