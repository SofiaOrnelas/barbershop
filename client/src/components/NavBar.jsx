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
  render() {
    return (
      <Navbar color="dark" dark expand="sm" className="mb-5 navbar">
        <NavbarBrand tag={Link} to="/">Barbearia Du'Arte</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={NLink} to="/staff">Staff</NavLink>
            </NavItem>
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
