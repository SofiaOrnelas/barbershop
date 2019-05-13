import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Staff from './pages/Staff';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
<<<<<<< HEAD
import MainNavbar from './MainNavbar'
import Gallery from './pages/Gallery';
=======
import MainNavbar from './MainNavbar';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
>>>>>>> 5902c1234d72883826132c84399c3e5661fc17c3

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <MainNavbar />
        <Calendar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/staff" component={Staff} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}