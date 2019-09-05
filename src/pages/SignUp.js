import React, { Component } from "react";
import Button from "../components/Button";
import { Redirect } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    confirmPassword: "",
    error: false,
    done: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  post = (id, pwd) => {
    axios
      .post("/signup", {
        username: id,
        password: pwd
      })
      .then(res => {
        console.log("로그인성공", res);
        if (res.status === 200) {
          this.setState({ done: true });
        }
      })
      .catch(err => {
        console.log("에러", err);
        return this.setState({
          error: true
        });
      });
  };

  render() {
    let content = "";
    if (this.state.error) {
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
    } else {
      if (this.state.done) {
        content = (
          <div>
            <h1>SIGN UP</h1>
            <p>THANKS FOR SIGNING UP! PLEASE ENJOY BLINKER</p>
          </div>
        );
      } else {
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
      //* done() 부분을 <div> html 로 만들기 </div>
    }
    return <div>{content}</div>;
  }
}

export default SignUp;
