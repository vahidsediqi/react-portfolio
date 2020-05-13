import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './componentStyles/main.css';
import '../hover.css';
import logo from './images/logo.png';


const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
   
  // const navStyle = {
  //   backgroundColor: '#0D1326',
  //   width: '95%',
  //   margin: '15px auto',
  //   borderRadius: '25px',
  //   opacity: '0.9'    
  // }

  return (
    <div className="pb-5">
      <Navbar className="text-light fixed-top navigation" dark expand="md">
          <div className="container">
          <NavbarBrand href="/"><img style={{height: "40px"}} src={logo} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="pr-5">
              <Link className="text-light nav-link hvr-underline-from-center" to="/">Home</Link>
            </NavItem>
            <NavItem className="pr-5">
              <Link className="text-light nav-link hvr-underline-from-center" to="/about">About</Link>
            </NavItem>
            <NavItem className="pr-5">
              <Link className="text-light nav-link hvr-underline-from-center" to="/portfolio">Portfolio</Link>
            </NavItem>
            <NavItem className="pr-5">
              <Link className="text-light nav-link hvr-underline-from-center" to="/resume">Resume</Link>
            </NavItem>
            <NavItem>
              <Link className="text-light nav-link hvr-underline-from-center" to="/contacts">Contact</Link>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
          </div>
      </Navbar>
    </div>
  );
}

export default NavMenu;