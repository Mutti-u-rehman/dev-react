import { useParams } from "react-router";
import useRestaurantMenu from "../utiles/hooks/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const params = useParams();
  const menuInfo = useRestaurantMenu(params.resID);

  if (!menuInfo) return <></>; // we can show shimmer here

  const menuItems =
    menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;
  
  // console.log(menuInfo);
  const allMenus =
    menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap((card) => card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? [card?.card?.card] : []);
  
  
  console.log(allMenus);

  return (
    <>
      <div className="flex flex-col justify-center">
        <img src={'sdfsd'} alt="Main image of the restaurant" />
        <h1>{menuInfo[0]?.card?.card?.text}</h1>

        <div className="flex flex-col m-4 border-2 border-gray-300 rounded-lg p-4">

          {/* header for expansion panel */}
          <div className="flex flex-row justify-between mb-6">
            <p className="bold">Heading</p>
            <div className="">↓</div>
          </div>

          {/* body of expansion panel */}
          <div className="flex justify-between">

            {/* panel content */}
            <div className="flex">
              <img src="src" alt="Restaurant image" />
              <div className="flex flex-col">
                <h2 className="bold">Restaurant Name</h2>
                <p>Restaurant Address</p>
                <p>Rating</p>
              </div>
            </div>
            
            {/* panel action */}
            <button className="bg-red-500 text-white rounded-lg px-4 py-2">delete</button>
          </div>

        </div>



      </div>
      {menuItems ? (
        <>
          <h3>Menu</h3>

          <ul>
            {menuItems.map((item) => {
              const { name, price, id } = item?.card?.info;
              return <li key={id}>{name + " " + price}</li>;
            })}
          </ul>
        </>
      ) : (
        "" // shimmer  here
      )}
    </>
  );
};

export default RestaurantMenu;
