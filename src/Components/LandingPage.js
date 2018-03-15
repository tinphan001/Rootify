import React, { Component, Prop } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import './styled/ignoreLink.css'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import PropTypes from 'prop-types'
import Container from './Container'
import Intro from './Intro'

const propType = {
  searchInput: PropTypes.String
}

const defaultProp = {
  searchInput: ""
}

class LandingPage extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Container>
        <Banner/>
        <Intro>
          <Link to="/" className="ignoreLink">Rootify</Link>
        </Intro>
        <SearchBox handleSearchInput={this.props.handleSearchInput}/>
        <AboutSection/>
        <ContactSection/>
      </Container>
    );
  }
}

LandingPage.propType = PropTypes
LandingPage.defaultProp = defaultProp


export default LandingPage
