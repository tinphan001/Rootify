import React, { Component } from 'react'
import styled from 'styled-components'
import Container from './Container'
import Intro from './Intro'
import { Link } from 'react-router-dom'
import Banner from './Banner'


class ArtistSearch extends Component {

  render(){
    return(
      <Container>
        <Banner/>
        <Intro>
          <Link to="/" className="ignoreLink">Rootify</Link>
        </Intro>
      </Container>
    )
  }
}

export default ArtistSearch
