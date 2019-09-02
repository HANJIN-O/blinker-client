import React from "react";

function App() {
  return (
    <div className='App'>
      <div id='_wrapper'>
        <div id='_content'>
          <video id='_webcam' playsInline style={{ display: "none" }}></video>
          <canvas id='_imageData'></canvas>
          <canvas id='_faceSub'></canvas>
          <canvas id='_t3d'></canvas>
          <canvas id='_f3d'></canvas>
          <canvas id='_drawing'></canvas>
          <div id='_progressBar'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
