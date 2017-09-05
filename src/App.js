import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import MdIconPack, {MdMenu} from 'react-icons/lib/md'
import {FaBars} from 'react-icons/lib/fa'
import styled from 'styled-components';
import Home from './components/Home';

const Footer = styled.p`
  background-color: rgba(0,0,0,.60);

  bottom: 0px;
  width: 100vw;
  height: .5vw;
  text-align: center;
  margin-bottom: 0;
  padding: 30px 1vw;
    p{
      color: white;
      font-size: 1rem;
      margin: 0;
      svg{ margin-bottom: 5px; }
}`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse fixedTop collapseOnSelect className='navbar-container'>
            <Navbar.Header>
              <Navbar.Brand>
                <div className='logo-style'>
                  <a href='/'><img src='https://i.imgur.com/UJC52lF.png' className='logo-img'/></a>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse >
              <Nav pullRight >
                  <NavItem eventKey={1} href="#">Home</NavItem>
                  <NavItem eventKey={2} href="#">About</NavItem>
                  <NavItem eventKey={3} href="#">Projects</NavItem>
                  <NavItem eventKey={4} href="#">Contact</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Home />
          
          <Footer staticBottom>
            <p>© 2017 by Richard Kim</p>
          </Footer>
 
        </div>
      </Router>
    );
  }
}

export default App;
