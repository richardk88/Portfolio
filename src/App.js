import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MdIconPack, {MdMenu} from 'react-icons/lib/md'
import {FaBars} from 'react-icons/lib/fa'
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Home from './components/Home';

const Footer = styled.p`
  background-color: rgba(0,0,0,.60);

  bottom: 0px;
  width: 100vw;
  height: .5vw;
  text-align: center;
  margin-bottom: 0;
  padding: 30px 1vw;
    p{
      color: white;
      font-size: 1rem;
      margin: 0;
      svg{ margin-bottom: 5px; }
}`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Home />
          
          <Footer staticBottom>
            <p>© 2017 by Richard Kim</p>
          </Footer>
 
        </div>
      </Router>
    );
  }
}

export default App;
