import React, { Component } from "react";
import Button from "./Button";

export default class GameListItem extends Component {
  render() {
    return (
      <div>
        <h1>Flappy Bird</h1>
        <img src={``} alt={``} />
        <p>
          Flappy Bird is a side-scrolling mobile game featuring 2D retro style
          graphics. The objective is to direct a flying bird, named "Faby", who
          moves continuously to the right, between sets of Mario-like pipes. If
          the player touches the pipes, they lose.
        </p>
        <Button
          id={`login-btn`}
          class={`submit-btn txtb`}
          type={`submit`}
          name={`signin`}
          value={``}
          btnType={`START`}
        />
      </div>
    );
  }
}
