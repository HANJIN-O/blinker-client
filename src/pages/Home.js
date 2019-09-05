import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Header from "../components/Header";
import Game from "../components/Game";
import "../stylesheet/Home.css";

//* 지금은 Home 이지만 게임 페이지 - Play 가 될부분? 합치기
class Home extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(props, match) {
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
          <div className={`home-container`}>
            <div className={`home-item`}>
              <h1>Flappy Bird</h1>
              <img src={``} alt={``}/>
              <p>Flappy Bird is a side-scrolling mobile game featuring 2D retro style graphics. The objective is to direct a flying bird, named "Faby", who moves continuously to the right, between sets of Mario-like pipes. If the player touches the pipes, they lose.</p>
              <Link to={`/game/flappyBird`}>
                <input type={`button`} className={`home-btn`}>
                </input>
              </Link>
            </div>
            <div className={`home-item`}>
              <h1>Flappy Bird</h1>
              <img src={``} alt={``}/>
              <p>Flappy Bird is a side-scrolling mobile game featuring 2D retro style graphics. The objective is to direct a flying bird, named "Faby", who moves continuously to the right, between sets of Mario-like pipes. If the player touches the pipes, they lose.</p>
              <Link to={`/game/flappyBird`}>
                <input type={`button`} className={`home-btn`}>
                </input>
              </Link>
            </div>
            <div className={`home-item`}>
              <h1>Flappy Bird</h1>
              <img src={``} alt={``}/>
              <p>Flappy Bird is a side-scrolling mobile game featuring 2D retro style graphics. The objective is to direct a flying bird, named "Faby", who moves continuously to the right, between sets of Mario-like pipes. If the player touches the pipes, they lose.</p>
              <Link to={`/game/flappyBird`}>
                <input type={`button`} className={`home-btn`}>
                </input>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to={`/login`} />;
    }
    return <div>{content}</div>;
  }
}

export default Home;
