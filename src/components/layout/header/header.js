import React from "react";
import logo from "../../../assets/logo.svg";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Market Info</h1>
    </header>
  );
}

export default Header;
