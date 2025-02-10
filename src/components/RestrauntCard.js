import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{sla.deliveryTime} Minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestrauntCard;
