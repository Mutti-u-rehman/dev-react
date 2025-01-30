import RestaurantCard from "./RestaurantCard";
import { RESPONSE } from "../utiles/mockData";
import { useEffect, useState } from "react";
import { PROXY_API, PROXY_CORS_API, RESTAURANT_API } from "../utiles/constant";

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
    try {
      const res = await fetch(`${PROXY_CORS_API}${RESTAURANT_API}`);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const resJson = await res?.json();
      const allRestaurants =
        resJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(allRestaurants);
      setFilteredRestaurants(allRestaurants);
    } catch (error) {
      console.error("Fetch error:", error);
    }
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
