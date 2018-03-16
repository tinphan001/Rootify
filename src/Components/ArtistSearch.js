import React, { Component } from 'react'
import styled from 'styled-components'
import Container from './Container'
import Intro from './Intro'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import ArtistSearchResult from './ArtistSearchResult'
import SearchBox from './SearchBox'

class ArtistSearch extends Component {

  render(){

    return(
      <Container style={{'backgroundImage': 'linear-gradient(rgb(18, 18, 18), rgb(7, 7, 7) 85%)'}}>
        <Banner/>
        <Intro>
          <Link to="/" className="ignoreLink">Rootify</Link>
        </Intro>
        <SearchBox handleSearchInput={this.props.handleSearchInput}/>
        <ArtistSearchResult/>
      </Container>
    )
  }
}

export default ArtistSearch
