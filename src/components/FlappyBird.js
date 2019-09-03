import React, { Component } from "react";
import documentReady from "document-ready-promise";
import cdnPromise from "cdn-promise";

function loadScript() {
  return Promise.all([
    cdnPromise("/js/BRFv4Demo.js"),
    cdnPromise("/js/libs/createjs/preloadjs.min.js")
  ])
    .then(() => window.brfv4Example.start())
    .then(() => {
      return Promise.all([
        cdnPromise("https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"),
        cdnPromise("/games/flappyBird.js"),
        documentReady()
      ]);
    })
    .catch(err => {
      console.error(err);
    });
}

export default class FlappyBird extends Component {
  componentDidMount() {
    loadScript();
  }
  render() {
    return <div>flappybird</div>;
  }
}
