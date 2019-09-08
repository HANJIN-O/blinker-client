import React, { Component } from "react";
import GameListItem from "../components/GameListItem"
import "../stylesheet/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={`home-container`}>
          <div className={`home-item`}>
            <GameListItem />
          </div>
          <div className={`home-item`}>
            <GameListItem />
          </div>
          <div className={`home-item`}>
            <GameListItem />
          </div>
        </div>
      </div>
    );
  }
}
