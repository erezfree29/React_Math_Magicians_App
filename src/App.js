import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import Calculatorpage from './components/Calculator';

import Homepage from './components/Home';

import Quotepage from './components/Quote';

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: 'orange', position: 'fixed', top: '0' }}>
          <h1>Math Magicians</h1>
          <div className="links">
            <div className="link home_link">
              <Link to="/home">Home</Link>
            </div>
            <div className="link cal_link">
              <Link to="/calculator">Calculator</Link>
            </div>
            <div className="link">
              <Link to="/users">quote</Link>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Homepage />;
}

function Calculator() {
  return <Calculatorpage />;
}

function Quote() {
  return <Quotepage />;
}
