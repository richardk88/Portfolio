import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {FaHome} from 'react-icons/lib/fa'
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

const Nav = styled.div`
background-color: rgba(182, 199, 191, 0.2);
display: flex;
justify-content: space-between;
align-items: center;
padding: 45px 5vw;
width: 100vw;
height: 15px;
border-bottom: 2px solid rgba(0,0,0,.0975);
p{
  font-size: 2.55rem;
  font-family: 'Oleo Script', cursive;
  margin: 0;
  svg{
    margin-bottom: 5px;
  }
}
`

const Footer = styled.p`
  background-color: rgba(0,0,0,.55);
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: .5vw;
  text-align: center;
  margin-bottom: 0;
  padding: 30px 1vw;
  border-top: 2px solid rgba(0,0,0,0);
    p{
      color: white;
      font-size: 1rem;
      margin: 0;
      svg{ 
        margin-bottom: 5px; }
    }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav>
          <p><Link to="/"><FaHome /></Link></p>
        </Nav>

          <Home />
          
          <Footer>
            <p>© 2017 by Richard Kim</p>
          </Footer>

          <Route exact path="/" component={Home} /> 
        </div>
      </Router>
    );
  }
}

export default App;
