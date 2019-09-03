import React from "react";
import ButtonNav from "./ButtonNav";
// import { Link } from "react-router-dom";

//* 지금은 Home 이지만 게임 페이지 - Play 가 될부분? 합치기.
const Home = () => {
  return (
    <div>
      {/* <Link to="/signIn">Sign In</Link> */}
      {/* <Link to="/createAccount">Create Account</Link> */}
      <ButtonNav />
    </div>
  );
};

export default Home;
