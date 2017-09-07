import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Home extends Component {
    render() {
        return (
            <div className="background">
                {/* <div className='greeting'>
                    <div className='home_img'>
                    <img src='https://i.imgur.com/T9YYqKP.png?2' className='home_img'/>
                        <div className='greeting-text'> */}
                        <div className='name'>
                            <p>Richard Kim</p>
                            <p>Creative Full-Stack Web Developer</p>
                            <p>Blurring the line between creativity & technology.</p>
                        </div>
                        {/* </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Home;