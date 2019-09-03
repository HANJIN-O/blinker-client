import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import Game from "../components/Game";
import Ranking from "../components/Ranking";
import CreateAccount from "../components/CreateAccount";
import FlappyBird from "../components/FlappyBird";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/signOut" exact component={SignOut} />
            <Route path="/createAccount" exact component={CreateAccount} />
            <Route path="/game" exact component={Game} />
            <Route path="/ranking" exact component={Ranking} />
          </Switch>
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
            <div id="gameOver"></div>
            <FlappyBird />
          </div>
        </div>
      </Router>
    );
  }
}

//* video, span 전부 flappyBird로 옮기기.
