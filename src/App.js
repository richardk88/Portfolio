import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <NavBar />
          <Home />
          <About />
          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default App;
