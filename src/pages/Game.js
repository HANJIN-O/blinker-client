import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Header from "../components/Header";
import FlappyBirdGame from "../components/FlappyBirdGame";
import Home from "../pages/Home";
import GameListItem from "../components/GameListItem";
import "../stylesheet/Home.css";
import Ranking from "../components/Ranking";
import NotFound from "../components/NotFound";

//* 지금은 Home 이지만 게임 페이지 - Play 가 될부분? 합치기
class Game extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(props, match) {
    super();
    this.state = {
      loggedIn: true
    };
  }

  componentDidMount() {
    //쿠키에서 state 추가해줄것
  }

  render() {
    console.log(this.props.match);
    let content = "";
    if (this.state.loggedIn) {
      content = (
        <div>
          <Header />
          <Switch>
            <Route path={`/game/ranking`} component={Ranking} />
            <Route path={`/game/flappyBird`} component={FlappyBirdGame} />
            <Route exact path={`/game`} component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      );
    } else {
      return <Redirect to={`/login`} />;
    }
    return <div>{content}</div>;
  }
}

export default Game;
