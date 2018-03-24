import React, { Component } from 'react'
import LandingPage from "../Components/LandingPage"
import { getArtist } from '../Services/SpotifySrv'


class LandingPageContainer extends Component {

  handleSearchInput = (value) => {
    getArtist(value)
  }

  render() {

    return (
      <LandingPage pathName={this.props.pathName} handleSearchInput={this.handleSearchInput}>
      </LandingPage>
    )
  }
}

export default LandingPageContainer
