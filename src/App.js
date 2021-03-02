import React from 'react';
import VideoJSPLayer from './players/videojs'
import pizzOven from './videos/pizza-oven.mp4'
import pizzaMaker from './videos/pizza-maker.mp4'
const App = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <div style={{ width: `100%` }}>
        <VideoJSPLayer source={pizzOven} />
        <VideoJSPLayer source={pizzaMaker} />
      </div>
    </div>
  );
}

export default App;
