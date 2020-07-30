import React from 'react';
import './App.css';
import Home from './components/Home';
import Skincare from './components/skincare/Skincare';
import Makeup from './components/makeup/Makeup';
import NavBar from './components/NavBar'
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <div>
      <Switch>
          <Route  exact path="/" component={Home}>
          </Route>
          <Route path="/skincare" component={Skincare}>
          </Route>
          <Route path="/makeup" component={Makeup}>
          </Route>
          <Route  component={NotFound}>
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;


