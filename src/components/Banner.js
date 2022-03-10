import mondaybg from "../assets/monday.png";
import thuesdaybg from "../assets/thuesday.webp";
import wednesdaybg from "../assets/wednesday.webp";
import thursdaybg from "../assets/thursday.webp";

import { FaSearch } from "react-icons/fa";
// import formebanner from "../assets/formebanner.svg";

const Banner = () => {
  return (
    <div
      className="banner"
      style={
        new Date().getDay() === 1
          ? { backgroundImage: `url(${mondaybg})` }
          : new Date().getDay() === 2
          ? { backgroundImage: `url(${thuesdaybg})` }
          : new Date().getDay() === 3
          ? { backgroundImage: `url(${wednesdaybg})` }
          : new Date().getDay() === 4
          ? { backgroundImage: `url(${thursdaybg})` }
          : new Date().getDay() === 5
          ? { backgroundImage: `url(${mondaybg})` }
          : new Date().getDay() === 6
          ? { backgroundImage: `url(${mondaybg})` }
          : new Date().getDay() === 0
          ? { backgroundImage: `url(${mondaybg})` }
          : { backgroundImage: `url(${mondaybg})` }
      }
    >
      <h1 className="banner-title">Find Vegan Restaurants Nearby</h1>
      <div className="banner-search-icon">
        <input
          name="search"
          type="text"
          placeholder="Search for city, region, or zipcode"
          //   value="{value}"
          // onChange="{function}"
        />
        <p className="banner-search-icon-p">
          <FaSearch />
        </p>
      </div>
      <p className="banner-ref">Photo by Rustic Vegan</p>
      {/* <img className="wave-form" alt="wave form white" src={formebanner} /> */}
    </div>
  );
};

export default Banner;
