import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utiles/constant";
import { Link } from "react-router";

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
      const res = await fetch(`${RESTAURANT_API}`);

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
          <Link to={"restaurantMenu/" + res?.info?.id} key={res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
