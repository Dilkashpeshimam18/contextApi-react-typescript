import React from 'react';
import './App.css';
import Display from './components/Display';
import { AppProvider } from './components/store/context';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Display />

      </AppProvider>
    </div>
  );
}

export default App;
