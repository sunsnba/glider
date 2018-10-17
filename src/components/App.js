import React, { Component } from 'react';
import {Navbar, Nav, MenuItem, NavDropdown, NavItem, Table} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">My Github profile</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight> 
        <NavItem eventKey={1} href="#">
          Home
        </NavItem>
        <NavDropdown eventKey={3} title="Data Views" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>List</MenuItem>
          <MenuItem eventKey={3.2}>Search</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>;
      </div>
    );
  }
}

export default App;
