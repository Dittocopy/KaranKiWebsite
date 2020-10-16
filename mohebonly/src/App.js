import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Home';
import Booking from './Booking.js'

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/BookNow">
            <Booking />
          </Route>
        <Route path="/">
          <Home />
        </Route>
     </Switch>
     </div>
    </Router>
    
  );
}

export default App;
