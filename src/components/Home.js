import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/signIn">Sign In</Link>
      <Link to="/createAccount">Create Account</Link>
    </div>
  );
};

export default Home;
