import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Game, SignUp, SignIn, NotFound } from "../pages";
import Header from "../components/Header";
import Badrequest from "../pages/Badrequest";
import { instanceOf } from "prop-types";
import { Cookies } from "react-cookie";
// import GameMenu from "../pages/GameMenu";
import { withRouter } from "react-router-dom";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  // eslint-disable-next-line constructor-super
  constructor(props, { match }) {
    super(props);
    this.state = {
      match: match,
      loggedIn: document.cookie
    };
  }

  componentDidMount() {
    this.setState({
      loggedIn: document.cookie
    });
  }

  render() {
    // console.log(document.cookie);
    //
    //
    // console.log(this.match);
    //
    // console.log(this.state.match);
    //
    // console.log(this.props.match);

    console.log(this.props.match.path);



    // eslint-disable-next-line react/prop-types
    if (this.props.match.path !== "/game/flappyBird" && window.cameraStop) {
      console.log('카메라 스탑',window.cameraStop);
      window.cameraStop();
    }


    //400 bad request각 각 페이지에서 렌더링해주는 부분에서 분기를 처리해야겠음. 프레임워크에서 지원되는지는 모르겠음.

    if ( this.state.loggedIn === ''  || this.state.loggedIn) {
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
    } else {
      return (
        <div>
          <Header />
          <Switch>
            <Route component={Badrequest} />
          </Switch>
        </div>
      );
    }
  }
}

export default withRouter(App);
