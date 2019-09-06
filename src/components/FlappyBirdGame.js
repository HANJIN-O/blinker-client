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

  // 이 함수는 /public/game/flappyBird.js에 die()함수에서 호출할 겁니다.
  // 그래서 게임이 끝났을때 서버로 요청을 보낼겁니당.
  post() {
    let url = `http://ec2-13-209-35-43.ap-northeast-2.compute.amazonaws.com`;
    console.log('포스트!!!!');
    axios({
      url: `${url}/score`,
      method: "post",
      data: {
        username: '곽두팔', // userId는 signin할때 props로 내려줘야겠죠.
        gameId: 1, // 현재는 게임이 한개라서 하드 코딩하는데 이 gameId는 어디서 관리할지 모르겠네요.
        score: this.state.score
      }
    })
      .then(res => {
        console.log('스코어보냈어요',res); // score를 서버에 HTTP POST 요청을 보낸후에 할 작업을 여기에 넣어주세요.
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className={`game-score`}>
          <span>SCORE:{this.state.score}</span>
        </div>
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
