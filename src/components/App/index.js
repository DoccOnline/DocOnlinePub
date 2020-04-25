import React from 'react';
import logo from '../../logo.svg';
import '../../fonts/FontsFree-Net-SFProDisplay-Regular.ttf'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "../Profile"
import AppointmentInfo from '../AppointmentInfo'
import HomePage from '../HomePage'
import DoctorPage from '../DoctorPage'

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route path="/appointment">
              <AppointmentInfo/>
            </Route>
            <Route path="/doctor">
             <DoctorPage/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
