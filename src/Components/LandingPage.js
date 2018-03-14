import React, { Component, Prop } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import './styled/ignoreLink.css'
import AboutSection from './About'
import ContactSection from './Contact'
import PropTypes from 'prop-types'



const Container = styled.div`
  background-image: linear-gradient(to left, rgb(22, 146, 187), rgb(1, 38, 144));
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const Intro = styled.h1`
  font-size: 82px;
  font-family: "Montserrat", sans-serif;
  font-weight: 1200;
  display: flex;
  color: white;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5rem;
  justify-content: center;

`

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
