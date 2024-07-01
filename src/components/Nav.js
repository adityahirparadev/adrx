import React from "react";
import {NavLink} from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <ul className="">
        <li className="">
          <NavLink
            className="header-nav"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="header-nav"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="header-nav"
            to="/workshop"
          >
            Workshop
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="header-nav"
            to="/career"
          >
            Career
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="header-nav"
            to="/contact-us"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
