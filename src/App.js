import React from 'react';
import './App.css';
import PlayerContainer from 'griffith';
import { check_compatibility } from './Buildvideo.js'

const duration = 0;
let sources = check_compatibility();
const props = {
    id: 'videoadaptive',
    title: 'Video Adaptive Tutorial',
    standalone: true,
    cover: '',
    duration,
    sources,
    shouldObserveResize: true,
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlayerContainer {...props}/>
      </header>
    </div>
  );
}

export default App;
