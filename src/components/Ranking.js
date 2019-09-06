import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Ranking.css";

const Dummy = [
  { username: "이찬행", score: 10 },
  { username: "노요셉", score: 5 }
];

export default class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: Dummy
    }; // dummy
  }

  //* componentWillMount DOM manipulation X
  //* serverSide rendering => componentWillMount
  componentDidMount() {
    let url = `http://ec2-13-209-35-43.ap-northeast-2.compute.amazonaws.com:5000`;

    axios({
      url: `${url}/getrank`,
      method: "get"
    })
      .then(res => {
        console.log("랭크", res);
        this.setState({ userInfo: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // map 핑 한걸 뽑고

    return (
      <div className={`ranking-container`}>
        <div className={`ranking-item`}>
          <div className={`ranking-item-row`}>
            <div className={`ranking-item-row-info`}>Blinker</div>
            <div className={`ranking-item-row-info`}>User Ranking</div>
          </div>
          <div className={`ranking-item-row`}>
            <div className={`ranking-item-row-header`}>
              <div className={`ranking-item-row-header-item`}></div>
              <div className={`ranking-item-row-header-item`}>USERNAME</div>
              <div className={`ranking-item-row-header-item`}>SCORE</div>
            </div>
          </div>
          <div className={`ranking-item-row`}>
            {this.state.userInfo.map((userdata, i) => (
              <div key={i} className={`ranking-item-row-body`}>
                <div className={`ranking-item-row-body-item`}></div>
                <div className={`ranking-item-row-body-item`}>
                  {userdata.username}
                </div>
                <div className={`ranking-item-row-body-item`}>
                  {userdata.score}
                </div>
              </div>
            ))}
          </div>
          <div className={`ranking-item-row`}>
            <Link to={"/Home/flappybird"}>
              <button>Go back to Game</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
