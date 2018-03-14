import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LandingPageContainer from '../src/Container/LandingPageContainer'
import AboutPage from '../src/Components/About'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <LandingPageContainer/>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div className="About">
        <About/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
