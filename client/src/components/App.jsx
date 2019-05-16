import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NavBar from './NavBar';
// import Calendar from './pages/Calendar';
import Footer from './Footer';
// Link, NavLink,
// import api from '../api';
 
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     // countries: []
    }
  }

  render() {
    return (   /////////ORIGINAL //////
//       <div className="App">
//         <header className="App-header">
//         <div className="logoHome">
//           <img src="/Logo_Branco.png" className="App-title" alt="logo" />
//         </div>
// {/*           <img src={logo} className="App-logo" alt="logo" />
//  {/*         <h1 className="App-title">Du'Arte BarberShop!!!</h1> */}
//           <NavLink to="/" exact>Home</NavLink>
//           {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
//           {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
//           {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
//        {/*    <NavLink to="/secret">Secret</NavLink> */}
//         </header>
//         <Switch className="switch">
//           <Route path="/" exact component={Home} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/login" component={Login} />
//           <Route path="/secret" component={Secret} />
//           <Route render={() => <h2>404</h2>} />
//         </Switch>
//       </div>


   <div className="App">
        <NavBar/>
{/*         <Calendar/>
 */}      
        <Switch className="switch">
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
        
        <div>
          <Footer />
        </div>
      </div>


    );
  }
}