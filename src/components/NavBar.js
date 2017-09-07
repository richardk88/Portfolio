import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop collapseOnSelect className='navbar-container'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href='/'><Image src='https://i.imgur.com/UJC52lF.png' className='logo-img' responsive/></a>                
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className='text-right'>
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#">About</NavItem>
                            <NavItem eventKey={3} href="#">Projects</NavItem>
                            <NavItem eventKey={4} href="#">Contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;