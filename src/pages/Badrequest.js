import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheet/NotFound.css";

export default class Badrequest extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="sorry">BAD REQUEST</div>
        <div className="error">400</div>
        <h1 className="ERROR"> BAD REQUEST </h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}
