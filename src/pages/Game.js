import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import FlappyBirdGame from "../components/FlappyBirdGame";
import { Home, NotFound, Ranking } from "../pages";
import "../stylesheet/Home.css";
import Badrequest from "./Badrequest";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

//* 지금은 Home 이지만 게임 페이지 - Play 가 될부분? 합치기
class Game extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  // eslint-disable-next-line no-unused-vars
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.state = {
      loggedIn: cookies.get("username")
    };
  }

  componentDidMount() {
    const { cookies } = this.props;
    this.state = {
      loggedIn: cookies.get("username")
    };
  }

  render() {
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
      content = (
        <div>
          <Header />
          <Switch>
            <Route component={Badrequest} />
          </Switch>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default withCookies(Game);
