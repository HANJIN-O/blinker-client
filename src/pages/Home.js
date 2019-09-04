import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Ranking from "../components/Ranking";
import Header from "../components/Header";
import Game from "../components/Game";

//* 지금은 Home 이지만 게임 페이지 - Play 가 될부분? 합치기
class Home extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(props) {
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
          <Route path="/home/ranking" component={Ranking} />
          <Route path="/home/flappyBird" component={Game} />
        </div>
      );
    } else {
      return <Redirect to={`/login`} />;
    }
    return <div>{content}</div>;
  }
}

export default Home;
