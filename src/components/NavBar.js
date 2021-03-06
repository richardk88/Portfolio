import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop collapseOnSelect className='navbar-container'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home"><Image src='https://i.imgur.com/UJC52lF.png' className='logo-img hvr-grow' responsive/></a>                
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <a href="#home"><NavItem eventKey={1} href="#home" className='hvr-grow'>Home</NavItem></a>
                            <a href="#about"><NavItem eventKey={2} href="#about" className='hvr-grow'>About</NavItem></a>
                            <a href="#projects"><NavItem eventKey={3} href="#projects" className='hvr-grow'>Projects</NavItem></a>
                            <a href="#contact"><NavItem eventKey={4} href="#contact"><button className='contactBtn hvr-grow'>Contact</button></NavItem></a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;