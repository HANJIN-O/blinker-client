import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignOut from "../components/SignOut";
import Game from "../components/Game";
import Ranking from "../components/Ranking";
import CreateAccount from "../pages/CreateAccount";
import Play from "../components/Play";
import TempHome from "../components/TempHome";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/home" component={Home} />
            <Route path="/signOut" component={SignOut} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/play" component={Play} />
            <Route path="/tempHome" component={TempHome} />
            <Route path="/" exact component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}
