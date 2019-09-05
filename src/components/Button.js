import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Button.css";

export default function Button() {
  return (
    <div>
      <Link to={`/game/flappyBird`}>
        <input type={`button`} className={`home-btn`}></input>
      </Link>
    </div>
  );
}
