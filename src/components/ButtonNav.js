import React from "react";
import { NavLink } from "react-router-dom";

//* Restart, Go Back 고정 버튼 부분.
//* 아니면 버튼 생성하는 컴포넌트를 새로 만들어서, 재활용 하는 방향 으로 ?
const ButtonNav = () => {
  return (
    <div>
      <div className="button">
        <ul>
          <li>
            <NavLink to="/play">Restart</NavLink>
          </li>
          <li>
            <NavLink to="/">Go Back</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonNav;
