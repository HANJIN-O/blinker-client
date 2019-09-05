import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Button.css";

export default function Button(props) {
  const btnClick = e => {
    props.post(props.username, props.password);
  };

  return (
    <div>
      <input
        id={props.id}
        type={props.type}
        className={props.class}
        name={props.name}
        value={props.value}
        onClick={btnClick}
      />
    </div>
  );
}
