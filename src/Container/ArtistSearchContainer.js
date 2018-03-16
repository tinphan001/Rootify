import React, { Component } from 'react'
import ArtistSearch from "../Components/ArtistSearch"
import { getArtist } from '../Services/SpotifySrv'


class ArtistSearchContainer extends Component {

  handleSearchInput = (value) => {
    getArtist(value)
  }

  render() {
    return (
      <ArtistSearch handleSearchInput={this.handleSearchInput}>
      </ArtistSearch>
    )
  }
}

export default ArtistSearchContainer
