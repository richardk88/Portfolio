import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import MdIconPack, {MdMenu} from 'react-icons/lib/md'

const Nav = styled.div`
    background-color: rgba(0,0,0,0);
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 55px 5vw;
    width: 100%;
    height: 0px;
    div{
        font-size: 2.55rem;
        font-family: 'Libre Franklin', sans-serif;
        margin: 0;
        svg{ margin-bottom: 5px; }
}`

class Home extends Component {
    render() {
        return (
            <div>
                <Nav>
                <   div><Link to="/"><img src='https://i.imgur.com/UJC52lF.png' className='logo-style'/></Link></div>
                    <div></div>
                    <div className='menu-container'>
                        <span className='menu-text'>Menu</span>
                        <Link to="/" className='menu-bar'><MdMenu /></Link>
                    </div>
                </Nav>
                <div id="background">
                    <img src='https://i.imgur.com/T9YYqKP.png?2' className='home_img'/>
                </div>
            </div>
        );
    }
}

export default Home;