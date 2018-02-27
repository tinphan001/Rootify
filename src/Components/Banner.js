import React, { Component } from 'react'
import styled from 'styled-components'
import githubIcon from '../Components/Logo/GitHub-Mark-Light-120px-plus.png'
import spotifyIcon from '../Components/Logo/Spotify_Icon_RGB_White.png'

const Section = styled.div`
  z-index: 1000;
  box-shadow: 0 4px 6px 0 rgba(23, 28, 33, 0.2);
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem;
`
const Shortcut = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: white;
  display: flex;
  margin-left: 20%;
  word-spacing: 2rem;
  font-size: 1.5rem;
  margin-top:0.8rem;
  margin-bottom:0.8rem;
`

const GithubIcon = styled.img`
  display: flex;
  width: 3rem;
`

const SpotifyIcon = styled.img`
  display: flex;
  width: 3rem;
  margin-left:auto;
  margin-right: 0.5rem;
`

const RightFlexBox = styled.div`
  display: flex;
  margin-left: 20%;
  background-color: red;
`

class banner extends Component {
  render() {
    return (
      <Section>
        <Shortcut>
          Home
          About
          Contact
        </Shortcut>
        <SpotifyIcon src={spotifyIcon} />
        <GithubIcon src={githubIcon} />
        <RightFlexBox />
    </Section>
    );
  }
}

export default banner
