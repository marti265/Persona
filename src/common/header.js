import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import '../style/header.css'

class Header extends Component {
    render() {
        return (
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <ReactBootStrap.Navbar.Brand as={Link} to="/">Home</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              
              <ReactBootStrap.Nav className="mr-auto">
                <NavLink activeClassName="current" to="/assigments">Assignments</NavLink>
                <NavLink activeClassName="current" to="/contacts">Contacts</NavLink>
                <NavLink activeClassName="current" to="/team">Team</NavLink>
                <NavLink activeClassName="current" to="/media">Media</NavLink>
              </ReactBootStrap.Nav>
              
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar> 
        );
    }
}

export default Header;