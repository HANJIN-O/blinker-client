import React from "react";
import FlappyBird from "../components/FlappyBird";
import "./Game.css";
import ButtonNav from "../components/ButtonNav";

const Game = () => {
  return (
    <div>
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
};

export default Game;
