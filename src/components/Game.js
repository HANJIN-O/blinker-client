import React from "react";
import FlappyBird from "../components/FlappyBird";
import Header from "./Header";

const Game = () => {
  return (
    <div>
      <Header />
      <div className="container">
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
        <div id="gameContainer">
          <div id="gameOver" />
          <FlappyBird />
        </div>
      </div>
    </div>
  );
};

export default Game;
