import { CDN_URL_2 } from "../utiles/constant";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    props?.resData?.info;
  return (
    <div className="flex-col border border-gray-100 border-solid rounded-lg w-[200px]">
      <img
        className="w-[200px] h-40 rounded-t-lg"
        src={CDN_URL_2 + cloudinaryImageId}
        alt="Cusine image"
      />
      <h3 className="font-bold">{name}</h3>

      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  const NewRestaurantCard = (props) => {
    return (
      <>
        <h4 className="absolute bg-black text-white rounded-r-md mt-2.5 px-1 opacity-60">
          Promoted
        </h4>
        <RestaurantCard {...props} />
      </>
    );
  };

  return NewRestaurantCard;
};

export default RestaurantCard;
