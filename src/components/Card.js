import iceCream from "../assets/vegIcon/category_ice-cream.svg";
import juiceBar from "../assets/vegIcon/category_juice-bar.svg";
import vegOption from "../assets/vegIcon/category_veg-options.svg";
import vegStore from "../assets/vegIcon/category_veg-store.svg";
import vegan from "../assets/vegIcon/category_vegan.svg";
import vegetarian from "../assets/vegIcon/category_vegetarian.svg";
import healthstore from "../assets/vegIcon/category_health-store.svg";
import bakery from "../assets/vegIcon/category_bakery.svg";
import organization from "../assets/vegIcon/category_organization.svg";
import others from "../assets/vegIcon/category_other.svg";
import imgreplace from "../assets/imgreplace.svg";
import favori from "../assets/favori.png";

import LinesEllipsis from "react-lines-ellipsis";

const Card = (props) => {
  const getTown = (adress) => {
    const adressSplit = adress.split(",");
    let town = adressSplit[1];
    let country = adressSplit[2];

    console.log(town + ", " + country);
    return town + ", " + country;
  };

  return (
    <>
      {props.data.map((place) => {
        return (
          <div className="card" key={place.placeId}>
            {place.thumbnail ? (
              <img className="thumbnail" src={place.thumbnail} alt="foods" />
            ) : (
              <img className="icon" src={vegOption} alt="" /> //IMAGE BLANCHE A TROUVER COMMENT REMPLACER
            )}

            {place.type === "Veg Store" ? (
              <img className="icon" src={vegStore} alt="store icon" />
            ) : place.type === "veg-options" ? (
              <img className="icon" src={vegOption} alt="" />
            ) : place.type === "Juice Bar" ? (
              <img className="icon" src={juiceBar} alt="drink icon" />
            ) : place.type === "vegan" ? (
              <img className="icon" src={vegan} alt="" />
            ) : place.type === "vegetarian" ? (
              <img className="icon" src={vegetarian} alt="" />
            ) : place.type === "Health Store" ? (
              <img className="icon" src={healthstore} alt="" />
            ) : place.type === "Bakery" ? (
              <img className="icon" src={bakery} alt="" />
            ) : place.type === "Organization" ? (
              <img className="icon" src={organization} alt="" />
            ) : (
              <img className="icon" src={others} alt="" />
            )}
            <h2 className="place-name">{place.name}</h2>
            {/* <h3>{() => getTown(place.adress)}</h3> */}
            {/* <p>{() => getStar(place.rating)}</p> */}
            <p>{place.description}</p>
            {/* <LinesEllipsis
              text={place.description}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            /> */}
            <img
              className="favori-heart"
              src={favori}
              alt="little pink heart in round white shape"
            />
          </div>
        );
      })}
    </>
  );
};

export default Card;
