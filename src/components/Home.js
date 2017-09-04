import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div id="background">
                <img src='https://i.imgur.com/T9YYqKP.png' className='main_img'/>
            </div>
        );
    }
}

export default Home;