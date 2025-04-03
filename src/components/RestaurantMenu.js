import { useEffect, useState } from "react";
import { NEW_MENU_API } from "../utiles/constant.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState();
  const params = useParams();

  useEffect(() => {
    async function fetchMenu() {
      const data = await fetch(NEW_MENU_API + params.resID);
      const res = await data.json();

      console.log(res);
      setMenuInfo(res?.data?.cards);
    }

    fetchMenu();
  }, []);

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
