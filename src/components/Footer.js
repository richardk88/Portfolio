import React from 'react';
import styled from 'styled-components';
import {FaLinkedin, FaGithub} from 'react-icons/lib/fa'

const Style = styled.div`
    background-color: #151515;
    bottom: 0px;
    width: 100vw;
    height: .5vw;
    text-align: center;
    margin-bottom: 0;
    padding: 40px 1vw 150px 1vw;
    p{
        color: #696969;
        font-size: 1rem;
        margin: 0;
        svg{ margin-bottom: 5px; }
    }
`

const Footer = () => {
    return (
        <Style staticBottom>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/richardk88/' target='blank'><div className='iconBox'><FaLinkedin size={25}/></div></a>
                <a href='https://github.com/richardk88' target='blank'><div className='iconBox'><FaGithub size={25}/></div></a>
            </div>
            <p><span className='year'>© 2017</span> Richard Kim. All rights reserved.</p>
        </Style>
    );
};

export default Footer;