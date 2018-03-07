import React, { Component } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import './styled/ignoreLink.css'
import AboutSection from './About'
import ContactSection from './Contact'
import { getArtist } from '../Services/SpotifySrv'

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


class LandingPage extends Component {
  getArtistHere() {
    getArtist()
  }

  render() {
    return (
      <Container>
        <Banner/>
        <Intro>
          <Link to="/" className="ignoreLink">Rootify</Link>
        </Intro>
        <SearchBox/>
        <AboutSection/>
        <ContactSection/>
      </Container>
    );
  }
}

export default LandingPage
