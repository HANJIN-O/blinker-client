import React from "react";
import FlappyBird from "./FlappyBird";
import "./FlappyBirdGame.css";
import ButtonNav from "./ButtonNav";

const FlappyBirdGame = () => {
  var e = document.createEvent("HTMLEvents");
  e.initEvent("TestEvent", true, true);

  (() => {
    // 이벤트 리스너 등록
    document.addEventListener(
      "TestEvent",
      // eslint-disable-next-line no-unused-vars
      function(e) {
        add();
      },
      false
    );
  })();
  let num = 0;
  const add = () => {
    num += 1;
    console.log(num);
  };

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

export default FlappyBirdGame;
