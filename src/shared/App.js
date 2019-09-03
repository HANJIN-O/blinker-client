import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import Game from "../components/Game";
import Ranking from "../components/Ranking";
import CreateAccount from "../components/CreateAccount";
import Play from "../components/Play";
import TempHome from "../components/TempHome";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/menu" exact component={Home} />
            <Route path="/signOut" exact component={SignOut} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/game" component={Game} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/play" component={Play} />
            <Route path="/tempHome" component={TempHome} />
          </Switch>
        </div>
      </Router>
    );
  }
}
