import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Home extends Component {
    render() {
        return (
            <div className="background-img" id='home' >
                <div className='hello'>HELLO</div>
                <div className='greeting'>
                    <p className='name'>
                        <span className='first-name'>Richard</span>
                        <span className='last-name'>Kim</span>
                    </p>
                    <p className='blurb1'>FULL-STACK WEB DEVELOPER</p>
                    <p className='blurb2'>Blurring the line between creativity & technology.</p>
                </div>
            </div>
        );
    }
}

export default Home;

