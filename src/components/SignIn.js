import React from "react";
import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";

//* 0-signin 페이지 (로그인, 계정생성)
const SignIn = () => {
  return (
    <div>
      <Link to="/tempHome">Sign In</Link>
      <CreateAccount />
    </div>
  );
};

export default SignIn;
