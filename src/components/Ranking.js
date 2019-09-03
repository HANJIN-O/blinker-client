import Header from "../components/Header";
import React from "react";
import { Link } from "react-router-dom";

const Ranking = () => {
  return (
    <div>
      <Header />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Ranking;
