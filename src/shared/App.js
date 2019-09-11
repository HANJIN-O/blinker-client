import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Game, SignUp, SignIn, NotFound } from "../pages";
// import GameMenu from "../pages/GameMenu";

export default class App extends Component {
  // eslint-disable-next-line constructor-super
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
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
