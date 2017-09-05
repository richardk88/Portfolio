import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Home extends Component {
    render() {
        return (
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


                <div id="background">
                    <img src='https://i.imgur.com/T9YYqKP.png?2' className='home_img'/>
                </div>
            </div>
        );
    }
}

export default Home;