import React, { Component } from 'react'
import LandingPage from "../Components/LandingPage"
import { getArtist } from '../Services/SpotifySrv'


class LandingPageContainer extends Component {

  state = {
    searchInput: null
  }

  componentDidMount() {
    getArtist("Taylor")
  }

  handleSearchInput = (value) => {
    this.setState({searchInput: value}, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <LandingPage handleSearchInput={this.handleSearchInput}>
      </LandingPage>
    )
  }
}

export default LandingPageContainer
