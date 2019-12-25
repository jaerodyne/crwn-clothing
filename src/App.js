import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
