import logo from "../assets/logo.svg";
import searchicon from "../assets/searchicon.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          {" "}
          <Link to="/">
            <img alt="purple and white happy cow face" src={logo} />
          </Link>
          <nav>
            <ul>
              <li>Explore</li>
              <li>Contest</li>
              <li>Forum</li>
              <li>Blog</li>
              <li>Community</li>
              <li>The App</li>
              <li>Shop</li>
              <li>More</li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <img alt="magnifying glass" src={searchicon} />
          <p className="add-listing">Add Listing</p>
          <p className="login">Login / Join</p>
        </div>
      </div>
    </>
  );
};

export default Header;
