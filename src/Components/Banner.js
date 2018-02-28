import React, { Component } from 'react'
import styled from 'styled-components'
import githubIcon from '../Components/Logo/GitHub-Mark-120px-plus.png'
import spotifyIcon from '../Components/Logo/Spotify_Icon_RGB_Black.png'
import { Link } from 'react-router-dom'
import './styled/ignoreLinkWithMargin.css'

const Section = styled.div`
  box-shadow: 0 3px 4px 0 rgba(23, 28, 33, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem;
  background-color: white;
  overflow: hidden;

`
const Shortcut = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: black;
  display: flex;
  margin-left: 20%;
  word-spacing: 2rem;
  font-size: 1.5rem;
  margin-top:0.8rem;
  margin-bottom:0.8rem;
  justify-content: space-around;
`

const GithubIcon = styled.img`
  display: flex;
  width: 3rem;
`

const SpotifyIcon = styled.img`
  display: flex;
  width: 3rem;
  margin-right: 1rem;
`

const LeftFlexBox = styled.div`
  display: flex;
  width: 3rem;
  margin-left:auto;
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
        <Shortcut >
          <Link to="/" className="ignoreLinkWithMargin">Home</Link>
          <Link to="/About" className="ignoreLinkWithMargin">About</Link>
          <Link to="/Contact" className="ignoreLinkWithMargin">Contact</Link>
        </Shortcut>
        <LeftFlexBox/>
        <a href="https://www.spotify.com"><SpotifyIcon src={spotifyIcon} /></a>
        <a href="https://github.com/tinphan001/Rootify"><GithubIcon src={githubIcon} /></a>
        <RightFlexBox />
    </Section>
    );
  }
}

export default banner
