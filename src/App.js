import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import One from './pages/One';
import Two from './pages/Two';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" component={One}/>
          <Route exact path="/two" component={Two} />
        </Switch>
        <Link className="App-link" to="/"> One </Link>
        <Link className="App-link" to="/two"> Two </Link>
      </Router>
    </div>
  );
}

export default App;
