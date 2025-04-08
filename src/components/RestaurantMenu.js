import { useParams } from "react-router";
import useRestaurantMenu from "../utiles/hooks/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const params = useParams();
  const menuInfo = useRestaurantMenu(params.resID);

  if (!menuInfo) return <></>;

  const menuItems =
    menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  return (
    <>
      <h1>{menuInfo[0]?.card?.card?.text}</h1>
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
        ""
      )}
    </>
  );
};

export default RestaurantMenu;
