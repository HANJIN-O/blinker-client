import React from "react";
import { Link } from "react-router-dom";

//* 0-signin 페이지 (로그인, 계정생성)
const SignIn = () => {
  return (
    <div>
      <Link to="/menu">
        <button>menu</button>
      </Link>

      <Link to="/createAccount">
        <button>createAcount</button>
      </Link>
    </div>
  );
};

export default SignIn;
