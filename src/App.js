import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './Pages/Home'
import Company from './Pages/Company'
import Recruiting from './Pages/Recruiting'
import Engineering from './Pages/Engineering'
import Projects from './Pages/Projects'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/engineering">Engineering</Link>
          </li>
          <li>
            <Link to="/recruiting">Recruiting</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/recruiting">
            <Recruiting />
          </Route>
          <Route path="/engineering">
            <Engineering />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
        </Switch>
         

      </div>
    </Router>
  )
}

