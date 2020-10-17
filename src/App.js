import React from 'react';
import Home from './components/Home';
import Favorites from './components/Favorites';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './test.css'



function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>

  );
}

export default App;
