import React, { Component } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import SearchBox from './SearchBox'

const Container = styled.div`
  background-image: linear-gradient(rgb(23, 89, 107),rgb(2, 6, 9));
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Intro = styled.h1`
  font-size: 72px;
  font-family: 'Righteous', cursive;
  font-weight: normal;
  display: flex;
  color: white;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 2rem;
  justify-content: center;
`


class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Banner/>
        <Intro>Rootify</Intro>
        <SearchBox/>
      </Container>
    );
  }
}

export default LandingPage
