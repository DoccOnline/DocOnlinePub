import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "../Profile"
import AppointmentInfo from '../AppointmentInfo'

const App = () => {
  return (
    <div className="App">
      <Router>
        {/*<div>*/}
          {/*<ul>*/}
            {/*<li>*/}
              {/*<Link to="/profile">Profile</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/register">Register</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/login">Login</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/search">Find a doctor</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/medical_card">Medical card</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/appointment">Make an appointment</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/online_test">Get tested online</Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
        {/*</div>*/}
          {/*<hr />*/}

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route path="/appointment">
              <AppointmentInfo/>
            </Route>
            <Route path="/dashboard">
              <div>dashboard</div>
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
