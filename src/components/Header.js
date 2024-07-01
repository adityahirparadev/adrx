import React from "react";
import "./CSS/Header.css";
import Logo from "./Images/favicon.png";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div>
          <NavLink exact to="/">
            <img src={Logo} alt="ADRX Logo" />
          </NavLink>
        </div>
        <Nav/>
      </header>
    </>
  );
};

export default Header;
