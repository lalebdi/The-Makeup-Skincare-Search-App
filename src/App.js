import React from 'react';
import './App.css';
import Skincare from './components/Skincare';
import Makeup from './components/Makeup';
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <h1> App component </h1>
      <Skincare />
      <Makeup />
      <NotFound />
    </div>
  );
}

export default App;
