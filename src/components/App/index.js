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
import Chat from '../Chat'

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/profile/:id" render={(props)=> {
              return (
                <Profile id={props.match.params.id}/>
              )
            }} />
            <Route path="/appointment/:id" render={(props)=> {
              return (
                <AppointmentInfo id={props.match.params.id}/>
              )
            }} />
            <Route path="/doctor/:id" render={(props)=> {
              return (
                <DoctorPage id={props.match.params.id}/>
              )
            }} />
            <Route path="/chat">
              <Chat/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
