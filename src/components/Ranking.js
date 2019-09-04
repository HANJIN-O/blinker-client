import React from "react";
import { Link } from "react-router-dom";

const Ranking = () => {
  return (
    <div>
      <Link to={`/home/ranking`}>
        <button>ranking</button>
      </Link>
    </div>
  );
};

export default Ranking;
