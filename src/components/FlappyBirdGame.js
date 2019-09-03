import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlappyBird from "../components/FlappyBird";

class FlappyBirdGame extends Component {
  componentDidMount() {
    window.brfv4Example.start();
  }
  render() {
    return (
      <div className="container">
        <Link to={`/home/flappyBird`}>
          <button>flappyBird</button>
        </Link>

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
