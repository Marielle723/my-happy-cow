import background from "../assets/banner.png";
import searchicon from "../assets/searchicon.svg";
// import formebanner from "../assets/formebanner.svg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="banner-title">Find Vegan Restaurants Nearby</h1>
      <div className="banner-search-icon">
        <input
          name="search"
          type="text"
          placeholder="Search for city, region, or zipcode"
          //   value="{value}"
          // onChange="{function}"
        />
        <img alt="magnifying glass in purple box" src={searchicon} />
      </div>
      <p className="banner-ref">Photo by Rustic Vegan</p>
      {/* <img className="wave-form" alt="wave form white" src={formebanner} /> */}
    </div>
  );
};

export default Banner;
