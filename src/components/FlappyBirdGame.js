import FlappyBird from "./FlappyBird";
import "./FlappyBirdGame.css";
import ButtonNav from "./ButtonNav";
import axios from "axios";
import React, { Component } from "react";

class FlappyBirdGame extends Component {
  constructor() {
    super();
    this.e = document.createEvent("HTMLEvents");
    this.e.initEvent("bridScore", true, true);
    this.state = {
      score: 0
    };
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

  componentDidMount() {
    // 이트 리스너 등록
    document.addEventListener(
      "birdScore",
      // eslint-disable-next-line no-unused-vars
      e => {
        this.setState(() => {
          return { score: e.detail.birdscore };
        });
      },
      false
    );

    document.addEventListener(
      "birdGameOver",
      // eslint-disable-next-line no-unused-vars
      this.post,
      false
    );
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
