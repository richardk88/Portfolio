import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <NavBar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default App;
