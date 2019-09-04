import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import CreateAccount from "../pages/CreateAccount";
import NotFound from "../components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/*<Route path="/game" component={Game} />*/}
            {/*<Route path="/signOut" component={SignOut} />*/}
            <Route path="/home" component={Home} />
            <Route path="/signup" component={CreateAccount} />
            <Route path="/" exact component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
