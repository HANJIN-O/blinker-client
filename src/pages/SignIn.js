import React, { Component } from "react";
import "../stylesheet/SignIn.css";
import Button from "../components/Button";
import { Redirect } from "react-router";
import axios from "axios";
import url from "../lib/server";
// import axiosCookieJarSupport from "axios-cookiejar-support";
// import tough from "tough-cookie";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      error: false,
      ok: false
      // helperText: ""
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
      .post(
        `${url}/signin`,
        {
          username: id,
          password: pwd
        },
        {
          // jar: cookieJar,
          withCredentials: true
        }
      )
      .then(res => {
        if (res.status === 200) {
          console.log("로그인성공", res);
          this.setState({ ok: true });
          // console.log(cookieJar);
          // window.location = "/game";
        }
      })
      .catch(err => {
        console.log("로그인 실패", err);
        this.setState({ helperText: "USERNAME OR PASSWORD IS INCORRECT" });
        // return self.setState({
        //     error: true
        // })
      });
  };

  render() {
    let content = "";
    if (this.state.ok) {
      return <Redirect to="/game" />;
    } else {
      content = (
        <div className={`login-container`}>
          <div className={`login-header`}></div>
          <div className={`login-box`}>
            <form className={`login-form`}>
              <h3> PLEASE SIGNIN TO START THE GAME</h3>
              <input
                className={`input-login input-id`}
                placeholder={`USERNAME`}
                type={`text`}
                value={this.state.name}
                onChange={this.handleChange}
                name={`name`}
              />
              <input
                className={`input-login`}
                placeholder={`PASSWORD`}
                type={`password`}
                value={this.state.password}
                onChange={this.handleChange}
                name={`password`}
              />
              {this.state.helperText ? <h1>{this.state.helperText}</h1> : ""}
              <Button
                id={`login-btn`}
                class={`button button-red button-signin`}
                type={`submit`}
                name={`signin`}
                value={`SIGN IN`}
                btnType={`SIGN IN`}
                username={this.state.name}
                password={this.state.password}
                post={this.post}
              />
              <Button
                id={`signup-btn`}
                class={`button button-blue button-create-an-account`}
                type={`submit`}
                name={`signUp`}
                value={`CREATE AN ACCOUNT`}
                btnType={`CREATE AN ACCOUNT`}
              />
            </form>
          </div>
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

export default SignIn;
