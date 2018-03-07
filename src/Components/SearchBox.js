import React, { Component } from 'react'
import styled from 'styled-components'

const InputBox = styled.div`
  position: relative;
  padding: 32px 0;
  margin: 25%;
  margin-top: 2rem;
  margin-bottom: 15rem;
  background-color: #24292e;
  border-radius: 0.5rem;
`

const ContentSpacing = styled.div`
  padding: 0 2em;
  margin: 0 auto;
  max-width: 1480px;
`

const InputBoxLabel = styled.h1`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: .015em;
  color: #fff;
  text-transform: none;
  margin-bottom: .5em;
`

const InputBoxInput = styled.input`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -.005em;
  font-weight: 600;
  color: #fff;
  text-transform: none;
  caret-color: #1db954;
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
`


class searchBox extends Component {


  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      console.log(event.target.value);
    }
  }


  render() {
    return (
      <InputBox>
        <ContentSpacing>
          <InputBoxLabel> Search for an Artist </InputBoxLabel>
          <InputBoxInput type = "text" Hello placeholder="Start Typing..." onKeyPress={this.handleKeyPress}/>
        </ContentSpacing>
      </InputBox>
    );
  }
}

export default searchBox
