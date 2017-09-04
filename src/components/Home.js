import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                <img src='https://i.imgur.com/BcEEfR3.png' className='main_img'/>
            </div>
        );
    }
}

export default Home;