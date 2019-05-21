import React, { Component } from 'react'
import { Link, NavLink as NLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import api from '../api';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogoutClick(e) {
    api.logout()
  }
  
  render() {
    return (
      <Navbar color="dark" dark expand="sm" className="navbar">
        <NavbarBrand tag={Link} to="/">
        <div className="logoHome">
          <img src="/Logo_Branco.png" className="App-title" alt="logo" />
        </div></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            </NavItem>
            {api.isLoggedIn() && <NavItem>
              <NavLink tag={NLink} to="/my-profile">MyProfile</NavLink>
            </NavItem>}
            {api.isLoggedInEmployee() && <NavItem>
              <NavLink tag={NLink} to="/employee">Employee</NavLink>
            </NavItem>}
            <NavItem>
              <NavLink tag={NLink} to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={NLink} to="/contacts">Contacts</NavLink>
            </NavItem>
            {!api.isLoggedIn() && <NavItem>
              <NavLink tag={NLink} to="/signup">Signup</NavLink>
            </NavItem>}
            {!api.isLoggedIn() && <NavItem>
              <NavLink tag={NLink} to="/login">Login</NavLink>
            </NavItem>}
            {api.isLoggedIn() && <NavItem>
              <NavLink tag={Link} to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</NavLink>
            </NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
