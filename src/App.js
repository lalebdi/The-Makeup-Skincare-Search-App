import React from 'react';
import './App.css';
import Skincare from './components/Skincare';
import Makeup from './components/Makeup';

function App() {
  return (
    <div className="App">
      <h1> App component </h1>
      <Skincare />
      <Makeup />
    </div>
  );
}

export default App;
