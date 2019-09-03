import React, {Component} from 'react';

function loadScripts () {
  const brfv4demo = document.createElement ('script');
  brfv4demo.src = '/js/BRFv4Demo.js';
  document.body.appendChild (brfv4demo);

  const preloadjs = document.createElement ('script');
  preloadjs.src = '/js/libs/createjs/preloadjs.min.js';
  document.body.appendChild (preloadjs);

  const gameScriptCdn = document.createElement ('script');
  gameScriptCdn.src =
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js';
  document.body.appendChild (gameScriptCdn);

  const gameScript = document.createElement ('script');
  gameScript.src = '/games/flappyBird.js';
  document.body.appendChild (gameScript);
}

export default class FlappyBird extends Component {
  do_load = async () => {
    loadScripts ();
    setTimeout (() => {
      window.brfv4Example.start ();
    }, 3000);
  };

  render () {
    this.do_load ();
    return <div>flappybird</div>;
  }
}