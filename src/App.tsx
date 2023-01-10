import React from 'react';
import './App.css';
import Display from './components/Display';
import Control from './components/Control';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Display />
      <Control />
    </div>
  );
}

export default App;
