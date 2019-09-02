import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = { score: 0 };
  }

  componentDidMount() {
    const scriptCdn = document.createElement("script");
    scriptCdn.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js";
    document.body.appendChild(scriptCdn);

    const script = document.createElement("script");
    script.src = "/games/flappyBird.js";
    document.body.appendChild(script);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div id="_wrapper">
          <div id="_content">
            <video id="_webcam" playsInline style={{ display: "none" }} />
            <canvas id="_imageData" />
            <canvas id="_faceSub" />
            <canvas id="_t3d" />
            <canvas id="_f3d" />
            <canvas id="_drawing" />
            <div id="_progressBar" />
          </div>
        </div>
      </div>
    );
  }
}
