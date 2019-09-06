import React, { Component } from "react";
import "../stylesheet/SignIn.css";
import Button from "../components/Button";
import { Redirect } from "react-router";
import axios from "axios";

class SignIn extends Component {
  state = {
    name: "",
    password: "",
    error: false,
    helperText: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  post(id, pwd) {
    console.log(id, pwd);

    axios
      .post("/signin", {
        username: id,
        password: pwd
      })
      .then(res => {
        console.log("로그인성공", res);
        if (res.status === 200) return <Redirect to={`/`} />;
      })
      .catch(err => {
        console.log("에러", err);
        this.setState({ helperText: "USERNAME OR PASSWORD IS INCORRECT" });
        // return self.setState({
        //     error: true
        // })
      });
  }

  render() {
    let content = "";
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
            />
            <p id="helperText">{this.state.helperText}</p>
            <Button
              id={`login-btn`}
              class={`submit-btn txtb`}
              type={`submit`}
              name={`signin`}
              value={``}
              username={this.state.name}
              password={this.state.password}
              post={this.post}
            />
            <Button
              id={`signup-btn`}
              class={`submit-btn txtb`}
              type={`submit`}
              name={`signUp`}
              value={``}
            />
          </form>
        </div>
      </div>
    );
    return <div>{content}</div>;
  }
}

export default SignIn;
