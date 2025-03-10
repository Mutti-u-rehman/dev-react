import { useEffect, useState } from "react";
import { MENU_API } from "../utiles/constant";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState();

  useEffect(async () => {
    const data = await fetch(MENU_API);
    const res = await data.json();

    console.log(res);
    setMenuInfo(res);
  }, []);

  return (
    <>
      <h1>Name of the Restaurant</h1>
      <h3>Menu</h3>

      <ul>
        <li>Baryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </>
  );
};

export default RestaurantMenu;
