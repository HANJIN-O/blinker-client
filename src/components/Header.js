import React from "react";
import "./Header.css";

// eslint-disable-next-line
const NavBar = ({ children }) => <div className="menu-item">{children}</div>;
const Header = () => {
  return (
    <div>
      <div className="menu">
        <NavBar>
          <span>USERNAME</span>
        </NavBar>
        <NavBar>
          <span>HIGHEST SCORE</span>
        </NavBar>
        <NavBar>
          <span>RANKING</span>
        </NavBar>
      </div>
    </div>
  );
};
export default Header;
