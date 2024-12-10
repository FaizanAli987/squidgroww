import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import plane from "../assets/images/plane.png";
import search from "../assets/images/search.png";
import searchsm from "../assets/images/searchsm.png";
import ham from "../assets/images/ham.png";

function Navbar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const sidemenuRef = useRef(null);

  const toggleSideMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidemenuRef.current && !sidemenuRef.current.contains(event.target)) {
      setIsSideMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isSideMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideMenuOpen]);

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="ham" onClick={toggleSideMenu}>
          <img src={ham} alt="Hamburger Menu" />
        </div>
        <div
          ref={sidemenuRef}
          className={`sidemenu ${isSideMenuOpen ? "open" : ""}`}
        >
          <div className="searchbar-side">
            <img src={searchsm} alt="Search Icon" /> <input type="text" />
          </div>
          <ul>
            <li>
              <Link to="/utilities">Utilities</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <Link to="/utilities">Utilities</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
          <div className="searchbar">
            <img src={search} alt="Search Icon" /> <input type="text" />
          </div>
          <div>
            <Link to="#" className="purplebtn">
              <img src={plane} alt="Plane Icon" /> Join the community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
