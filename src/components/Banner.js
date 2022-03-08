import background from "../assets/banner.png";
import searchicon from "../assets/searchicon.svg";
// import formebanner from "../assets/formebanner.svg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      <h1>Find Vegan Restaurants Nearby</h1>
      <div className="banner-search-icon">
        <input
          name="search"
          type="text"
          placeholder="Search for city, region, or zipcode"
          //   value="{value}"
          // onChange="{function}"
        />
        <img alt="magnifying glass in purple box" src={searchicon} />
        <p>Photo by Rustic Vegan</p>
      </div>
      {/* <img className="wave-form" alt="wave form white" src={formebanner} /> */}
    </div>
  );
};

export default Banner;
