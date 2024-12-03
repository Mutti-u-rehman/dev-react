import { CDN_URL_2 } from "../utiles/constant";

export default RestaurantCard = (props) => {
  console.log(props.resData.info);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    props?.resData.info;
  return (
    <div className="card-wrapper">
      <img src={CDN_URL_2 + cloudinaryImageId} alt="Cusine image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};
