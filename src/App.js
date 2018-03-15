import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LandingPageContainer from '../src/Container/LandingPageContainer'
import ArtistSearch from '../src/Components/ArtistSearch'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <LandingPageContainer/>
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
          <Route exact path="/ArtistSearch" component={ArtistSearch} />
        </div>
      </Router>
    );
  }
}

export default App;
