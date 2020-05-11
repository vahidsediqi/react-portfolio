import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './componentStyles/main.css'

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
          <NavbarBrand href="/">Vahid Sediqi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="pr-5">
              <NavLink className="text-light" href="#">Home</NavLink>
            </NavItem>
            <NavItem className="pr-5">
              <NavLink className="text-light" href="#">About</NavLink>
            </NavItem>
            <NavItem className="pr-5">
              <NavLink className="text-light " href="#">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="#">Contact</NavLink>
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