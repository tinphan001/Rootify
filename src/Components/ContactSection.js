import React, { Component } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import './styled/ignoreLink.css'

const Container = styled.div`
  background-image: linear-gradient(to left, rgb(22, 146, 187), rgb(1, 38, 144));
  height: 30rem;
  display:flex
  justify-content: column;
  min-height: 30rem;
`

const Intro = styled.h1`
  font-size: 62px;
  font-family: "Montserrat", sans-serif;
  font-weight: 1200;
  display: flex;
  color: white;
  margin-left: 20%;
  margin-top: 4.5rem;
`

const ContactText = styled.h1`
  font-size: 20px;
  margin-left: 20%;
  margin-right: 20%;
  font-family: "Montserrat", sans-serif;
  display: flex;
  color: white;
  line-height:2rem;
  margin-bottom:5rem;
`

const ContactBox = styled.textarea`
  display:flex;
  margin-left:20%;
  width: 60%;
  height: 10rem;
  font-size:1rem;
`

const SendMessageButton = styled.button`
  margin-top:1rem;
  display:flex;
  margin-left:20%;
  margin-bottom:4.5rem;
  background-color: #8c63ff;
  background-image: none;
  height:8%;
  width:8%;
  font-size:15px;

`

class ContactSection extends Component {
  render() {
    return (
      <Container>
        <Intro>Contact Us</Intro>
        <ContactBox placeholder="Message"></ContactBox>
        <SendMessageButton type="submit">Send Message</SendMessageButton>
      </Container>
    );
  }
}

export default ContactSection
