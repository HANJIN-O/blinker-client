import FlappyBird from "./FlappyBird";
import "./FlappyBirdGame.css";
import ButtonNav from "./ButtonNav";
import axios from "axios";
import React, { Component } from "react";

class FlappyBirdGame extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
    window.reactMethod = this;
  }

  updateScore() {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state);
  }

  post() {
    axios({
      url: "/rank/home",
      method: "post",
      params: {},
      data: {
        username: "",
        score: 0
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.score}</div>
        <div className="container">
          <div className={`item`}>
            <div id="_wrapper">
              <div id="_content">
                <video id="_webcam" playsInline style={{ display: "none" }} />
                <canvas id="_imageData" />
                <canvas id="_faceSub" />
                <canvas id="_t3d" />
                <canvas id="_f3d" />
                <canvas id="_drawing" />
                <div id="_progressBar" />
              </div>
            </div>
          </div>
          <div className={`item`}>
            <div id="game-play-screen">
              <div id="game-play-screen-gameover">GAME OVER</div>
            </div>
            <FlappyBird />
          </div>
        </div>
        <div id={`button-nav`}>
          <ButtonNav />
        </div>
      </div>
    );
  }
}

export default FlappyBirdGame;
