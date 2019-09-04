import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <Link to="/">Go to Home</Link>
        <h1 className="title">잘못된 접근 !!!!!</h1>
      </div>
    );
  }
}
