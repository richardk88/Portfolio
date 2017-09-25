import React from 'react';
import styled from 'styled-components';

const Style = styled.p`
    background-color: #151515;
    bottom: 0px;
    width: 100vw;
    height: .5vw;
    text-align: center;
    margin-bottom: 0;
    padding: 90px 1vw;
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
            <p><span className='year'>© 2017</span> Richard Kim. All rights reserved.</p>
        </Style>
    );
};

export default Footer;