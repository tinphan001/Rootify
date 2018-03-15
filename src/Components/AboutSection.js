import React, { Component } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import './styled/ignoreLink.css'

const Container = styled.div`
  background-color: white;
  height: 27rem;
  display:flex
  justify: column;
  min-height: 27rem;
`

const Intro = styled.h1`
  font-size: 62px;
  font-family: "Montserrat", sans-serif;
  font-weight: 1200;
  display: flex;
  color: black;
  margin-left: 20%;
  margin-top: 4.5rem;
`

const AboutDetail = styled.h1`
  font-size: 20px;
  margin-left: 20%;
  margin-right: 20%;
  font-family: "Montserrat", sans-serif;
  display: flex;
  color: black;
  line-height:2rem;
`

class AboutSection extends Component {
  render() {
    return (
      <Container>
        <Intro>About</Intro>
        <AboutDetail> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </AboutDetail>
      </Container>
    );
  }
}

export default AboutSection
