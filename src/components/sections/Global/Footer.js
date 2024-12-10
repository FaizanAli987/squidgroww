import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import plane from "../../../assets/images/plane.png";
import x from "../../../assets/images/x.png";
function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-desc">
            <p>
              SquidGrow is the ultimate secure utility token. Our goal is to
              rise to the top, providing unparalleled security for your
              investment.
            </p>
          </div>
        </div>
        <div className="footer-col footer-flex-col">
          <div className="social-logo">
            <img src={plane} alt="" />
            <img src={x} alt="" />
          </div>
          <ul className="footer-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">SGS</a>
            </li>
            <li>
              <a href="">Inkubate</a>
            </li>
            <li>
              <a href="">SilentSwap</a>
            </li>
            <li>
              <a href="">Bridge</a>
            </li>
            <li>
              <a href="">Knox Locker</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
