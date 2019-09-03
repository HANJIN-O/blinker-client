import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
// import CreateAccount from "../pages/CreateAccount";
import SignIn from "../pages/SignIn";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          {/* <Route path="/signup" component={CreateAccount} /> */}
        </Switch>
      </div>
    );
  }
}

//* video, span 전부 flappyBird로 옮기기.
