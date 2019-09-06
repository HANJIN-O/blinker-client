import React, { Component } from "react";
import Button from "../components/Button";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      error: false,
      done: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  post = (id, pwd) => {
    console.log(id, pwd);
    axios
      .post(`http://13.209.35.43:5000/signup`, {
        username: id,
        password: pwd
      })
      .then(res => {
        console.log("회원가입", res);
        if (res.status === 200) {
          this.setState({ done: true });
        }
      })
      .catch(err => {
        if (err.response) {
          console.log("err", err.response.data);
        }
        console.log("에러", err);
        this.setState({
          error: true
        });
      });
  };

  render() {
    let content = "";
    if (this.state.done) {
      console.log("done true");
      content = (
        <div>
          <h1>SIGN UP</h1>
          <p>THANKS FOR SIGNING UP! PLEASE ENJOY BLINKER</p>
          <div>
            <Link to="/game">GO PLAY</Link>
          </div>
        </div>
      );
    } else if (!this.state.done) {
      console.log("done false");
      content = (
        <div className={`login-container`}>
          <div className={`login-header`}>BLINKER</div>
          <div className={`login-box`}>
            <form className={`login-form`}>
              <h3> PLEASE SIGNIN TO START THE GAME</h3>
              <input
                className={`txtb`}
                placeholder={`Username`}
                type={`text`}
                value={this.state.name}
                onChange={this.handleChange}
                name={`name`}
              />
              <input
                className={`txtb`}
                placeholder={`Password`}
                type={`password`}
                value={this.state.password}
                onChange={this.handleChange}
                name={`password`}
              />{" "}
              <input
                className={`txtb`}
                placeholder={`ConfirmPassword`}
                type={`password`}
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                name={`confirmPassword`}
              />
              <Button
                id={`login-btn`}
                class={`submit-btn txtb`}
                type={`submit`}
                name={`signUp`}
                value={``}
                username={this.state.name}
                password={this.state.password}
                post={this.post}
              />
              {/* <input
              id={`signup-btn`}
              className={`submit-btn txtb`}
              type={`submit`}
              name={`signUp`}
              value={``}
            /> */}
            </form>
          </div>
        </div>
      );
    } else if (this.state.error) {
      console.log("error true");
      content = (
        <div className={`login-container`}>
          <div className={`login-header`}>BLINKER</div>
          <div className={`login-box`}>
            <form className={`login-form`}>
              <h3> PLEASE SIGNIN TO START THE GAME</h3>
              <input
                className={`txtb`}
                placeholder={`Username`}
                type={`text`}
                value={this.state.name}
                onChange={this.handleChange}
                name={`name`}
              />
              <input
                className={`txtb`}
                placeholder={`Password`}
                type={`password`}
                value={this.state.password}
                onChange={this.handleChange}
                name={`password`}
              />{" "}
              <input
                className={`txtb`}
                placeholder={`ConfirmPassword`}
                type={`password`}
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                name={`confirmPassword`}
              />
              <Button
                id={`login-btn`}
                class={`submit-btn txtb`}
                type={`submit`}
                name={`signUp`}
                value={``}
                username={this.state.name}
                password={this.state.password}
                post={this.post}
              />
              {/* <input
              id={`signup-btn`}
              className={`submit-btn txtb`}
              type={`submit`}
              name={`signUp`}
              value={``}
            /> */}
            </form>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default SignUp;
