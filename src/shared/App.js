import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../pages/Game";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../components/NotFound";
// import GameMenu from "../pages/GameMenu";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/*<Route path="/game" component={Game} />*/}
            {/*<Route path="/signOut" component={SignOut} />*/}
            <Route path="/game" component={Game} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
