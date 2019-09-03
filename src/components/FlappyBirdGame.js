import React, { Component } from "react";
import FlappyBird from "../components/FlappyBird";

class FlappyBirdGame extends Component {
  componentDidMount() {
    window.brfv4Example.start();
  }
  render() {
    return (
      <div className="container">
        <div id="_wrapper">
          <div id="_content">
            <video id="_webcam" playsinline style={{ display: "none" }} />
            <canvas id="_imageData" />
            <canvas id="_faceSub" />
            <canvas id="_t3d" />
            <canvas id="_f3d" />
            <canvas id="_drawing" />
            <div id="_progressBar" />
          </div>
        </div>
        <div id="gameContainer">
          <div id="gameOver"></div>
          <FlappyBird />
        </div>
      </div>
    );
  }
}

export default FlappyBirdGame;
