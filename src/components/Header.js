import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

import Dropdown from "../components/Dropdown";
import DropdownMore from "./DropdownMore";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMore, setDropdownMore] = useState(false);

  const handleClickMenu = () => {
    setMenuClick(!menuClick);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnterMore = () => {
    if (window.innerWidth < 960) {
      setDropdownMore(false);
    } else {
      setDropdownMore(true);
    }
  };

  const onMouseLeaveMore = () => {
    if (window.innerWidth < 960) {
      setDropdownMore(true);
    } else {
      setDropdownMore(false);
    }
  };

  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="menu-icon" onClick={handleClickMenu}>
            <Link to="/">{!menuClick ? <IoMenu /> : <IoClose />}</Link>
          </div>

          <Link to="/">
            <img alt="purple and white happy cow face" src={logo} />
          </Link>
          <nav className="navbar">
            <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
              <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {dropdown && <Dropdown />}
                Explore
              </li>
              <li>Contest</li>
              <li>Forum</li>
              <li>Blog</li>
              <li>Community</li>
              <li>The App</li>
              <li>Shop</li>
              <li
                onMouseEnter={onMouseEnterMore}
                onMouseLeave={onMouseLeaveMore}
              >
                {dropdownMore && <DropdownMore />}
                More
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <p className="header-search-icon">
            <FaSearch />
          </p>
          <p className="add-listing">Add Listing</p>
          <Link to="/popup">
            <p className="login">Login / Join</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
