import React from "react";
import logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src={logo} alt="" />
      <p>Health Monitoring Dashboard</p>
    </div>
  );
}

export default Header;
