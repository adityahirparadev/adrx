import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Footer.css";
import Logo from "./Images/favicon.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">


          <div className="footer-about">
            <div className="footer-logo">
              <NavLink exact to="/">
                <img src={Logo} alt="ADRX Logo" />
              </NavLink>
            </div>
            <div className="footer-about-content">
              <p>
                ADRX unleashes transformative IT solutions, fueling business
                growth and innovation. From web and app development to
                performance marketing, our technology-driven approach elevates
                your brand.
              </p>
            </div>
            <div className="footer-social">
              <ul className=""></ul>
            </div>
          </div>

          <div className="footer-address">
            <div className="footer-addblock">
              <h3 className="footer-title">Email</h3>
              <NavLink className="footer-address-connect" to="mailto:hello@adrx.in">hello@adrx.in</NavLink>
            </div>
            <div className="footer-addblock">
              <h3 className="footer-title">Phone</h3>
              <NavLink className="footer-address-connect" to="tel:8866444124">+91 8866444124</NavLink>
            </div>
            <div className="footer-addblock">
              <h3 className="footer-title">Office</h3>
              <p>
                412, Silver Trade Center, <br />
                Near Moon Garden, <br />
                Utran, Surat - 394105
              </p>
            </div>
          </div>

          <div className="footer-menu">
            <h3 className="footer-title">Menu</h3>
            <ul className="">
              <li>
                <NavLink to="" className="footer-nav">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="footer-nav">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/workshop" className="footer-nav">
                  Workshop
                </NavLink>
              </li>
              {/* <li>
                  <NavLink to="/case-study" className="">
                    Case Study
                  </NavLink>
                </li> */}
              <li>
                <NavLink to="/career" className="footer-nav">
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="footer-nav">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Designed by{" "}
            <NavLink to="/" aria-label="ADRX Logo" aria-current="page">
              ADRX
            </NavLink>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
