import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Header.css";

// eslint-disable-next-line
const NavBar = ({ children }) => <div className="menu-item">{children}</div>;
const Header = () => {
  return (
    <div>
      <div className="menu">
        <NavBar>
          {/*<span>USERNAME</span>*/}
          <div className={`header-blink`}></div>
        </NavBar>
        <NavBar>
          <div>HIGHEST SCORE</div>
        </NavBar>
        <NavBar>
          <Link to="/game/ranking">
            <div>RANKING</div>
          </Link>
        </NavBar>
      </div>
    </div>
  );
};
export default Header;
