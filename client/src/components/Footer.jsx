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

export default class Footer extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="sm" className="navbar">
        <NavbarBrand tag={Link} to="/">
        <div className="logoHome">
          <p className="topBtn">Home</p>
        </div></NavbarBrand>
          <Nav className="ml-auto" navbar>
          </Nav>
  
    <div className="footer1">
      <ul className="icons">
        <a href="https://pt-pt.facebook.com/pages/category/Hair-Salon/Barbearia-DuArte-1720241048207314/" target="blank"><img src="/facebookBr-01.png" width="55" alt="facebook.svg"></img></a>
        <a href="https://www.linkedin.com" target="blank"><img src="/linkedinBr-01.png" width="55"
            alt="twitter.png"></img></a>
        <a href="https://theinsta-stalker.com/instagram/barbeariaduarteavb" target="blank"><img src="/instagramBr-01.png" width="55"
            alt="insta.png"></img></a>
        <a href="https://www.pinterest.com" target="blank"><img src="/pinterestBr-01.png" width="55"
            alt="pinterest.png"></img></a>
      </ul>
    </div>
      </Navbar> 
  
    )
  }
}
