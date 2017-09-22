import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop collapseOnSelect className='navbar-container'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home"><Image src='https://i.imgur.com/UJC52lF.png' className='logo-img' responsive/></a>                
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className='text-right'>
                            <NavItem eventKey={1} href="#home">Home</NavItem>
                            <NavItem eventKey={2} href="#about">About</NavItem>
                            <NavItem eventKey={3} href="#projects">Projects</NavItem>
                            <NavItem eventKey={4} href="#contact" ><button className='contactBtn'>Contact</button></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;