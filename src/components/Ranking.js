import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Ranking extends Component {
  constructor() {
    super();
    this.state = { userInfo: [{ username: "이찬행", score: 50 }] }; // dummy
  }

  //* componentWillMount DOM manipulation X
  //* serverSide rendering => componentWillMount
  componentDidMount() {
    axios({
      url: "/rank/home",
      method: "get",
      params: {
        gameName: "flappyBird"
      },
      data: {
        username: "",
        score: 0
      }
    })
      .then(res => {
        this.setState({ userInfo: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // map 핑 한걸 뽑고

    return (
      <div>
        <h2>Blinker</h2>
        <h3>User Ranking</h3>
        <div>
          {this.state.userInfo.map((userdata, i) => (
            <div className="userRankingInfo">
              {" "}
              <span key={i}>{userdata.username}</span>{" "}
              <span>{userdata.score}</span>{" "}
            </div>
          ))}
        </div>
        <Link to={"/Home/flappybird"}>
          <button>Go back to Game</button>
        </Link>
      </div>
    );
  }
}
