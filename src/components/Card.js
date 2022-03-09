import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

import iceCream from "../assets/vegIcon/category_ice-cream.svg";
import juiceBar from "../assets/vegIcon/category_juice-bar.svg";
import vegOption from "../assets/vegIcon/category_veg-options.svg";
import vegStore from "../assets/vegIcon/category_veg-store.svg";
import vegan from "../assets/vegIcon/category_vegan.svg";
import vegetarian from "../assets/vegIcon/category_vegetarian.svg";
import healthstore from "../assets/vegIcon/category_health-store.svg";
import bakery from "../assets/vegIcon/category_bakery.svg";
import organization from "../assets/vegIcon/category_organization.svg";
import catering from "../assets/vegIcon/category_catering.svg";
import others from "../assets/vegIcon/category_other.svg";
import imgreplace from "../assets/imgreplace.svg";
import favori from "../assets/favori.png";

import LinesEllipsis from "react-lines-ellipsis";

const Card = (props) => {
  const getTown = (adress) => {
    console.log("adress==>" + adress);
    const adressSplit = adress.split(",");
    let town = adressSplit[1];
    let country = adressSplit[2];

    console.log(town + ", " + country);
    return town + ", " + country;
  };

  const ratingStar = (num) => {
    let rating = [];

    if (typeof num === "number") {
      let numTrunc = Math.trunc(num);
      for (let i = 0; i < numTrunc; i++) {
        rating.push(<FaStar style={{ color: "yellow" }} />);
      }

      if (num - numTrunc > 0) {
        rating.push(<FaRegStar style={{ color: "yellow" }} />);
      }

      // console.log("rating.length ==> " + rating.length);

      let maxRate = 5;
      let diff = maxRate - rating.length;
      // console.log("diff===>" + diff);

      if (diff > 0) {
        for (let j = 0; j < diff; j++) {
          rating.push(<FaStarHalf style={{ color: "yellow" }} />);
        }
      }
    } else {
      return "Please provide a number";
    }

    return rating;
  };

  return (
    <>
      {props.data.map((place) => {
        return (
          <div className="card" key={place.placeId}>
            <Link to={`/place/${place.placeId}`}>
              {place.thumbnail ? (
                <img
                  className="card-thumbnail"
                  src={place.thumbnail}
                  alt="foods"
                />
              ) : (
                <img className="card-thumbnail" src={imgreplace} alt="" /> //IMAGE BLANCHE A TROUVER COMMENT REMPLACER
              )}
              <div className="card-icon-name">
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
                ) : place.type === "Catering" ? (
                  <img className="icon" src={catering} alt="" />
                ) : (
                  <img className="icon" src={others} alt="" />
                )}
                <h2 className="card-place-name">{place.name}</h2>
              </div>
            </Link>
            <h3 className="card-town">{getTown(place.address)}</h3>
            <p className="card-rating">{ratingStar(place.rating)}</p>
            {/* <p className="card-description">{place.description}</p> */}

            <LinesEllipsis
              text={place.description}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />

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
