import React from "react";
import "./Header.css";

// eslint-disable-next-line
const NavBar = ({ children }) => <div className="menu-item">{children}</div>;
const Header = () => {
  return (
    <div>
      <div className="menu">
        <NavBar>USERNAME</NavBar>
        <NavBar>HIGHEST SCORE</NavBar>
        <NavBar>RANKING</NavBar>
      </div>
    </div>
  );
};
export default Header;
