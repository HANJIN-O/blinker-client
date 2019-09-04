import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Header from "../components/Header";
import Game from "../components/Game";

class GameMenu extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path={`/game/flappyBird`} component={Game} />
        </Switch>
      </div>
    );
  }
}

export default GameMenu;
