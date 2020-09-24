import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import MaleImage from '../../images/albert-dera-min.jpg'
import FemaleImage from '../../images/wesley-tingey-min.jpg'
import OtherMaleImage from '../../images/nico-marks-min.jpg'
import OtherFemaleImage from '../../images/gisela-carolina-min.jpg'

export default function StartPage() {
  return (
    <>
      <ContainerStyled>
        <Box1Styled></Box1Styled>
        <Image2Styled src={MaleImage}></Image2Styled>
        <Box3Styled></Box3Styled>
        <Image4Styled src={FemaleImage}></Image4Styled>
        <Box5Styled></Box5Styled>
        <Image6Styled src={OtherFemaleImage}></Image6Styled>
        <Box7Styled></Box7Styled>
        <Image8Styled src={OtherMaleImage}></Image8Styled>
        <Box9Styled></Box9Styled>
      </ContainerStyled>
      <TextContainerStyled>
        <TextStyled>
          <strong>Browse</strong> through<br></br> thousands of<br></br>{' '}
          <strong>influencers</strong> and<br></br> find the one<br></br> that
          will fit just right.
        </TextStyled>
      </TextContainerStyled>
      <Switch>
        <Route>
          <Link style={{ textDecoration: 'none' }} to="/navigate">
            <StartButtonStyled>Start</StartButtonStyled>
          </Link>
        </Route>
      </Switch>
    </>
  )
}

const ContainerStyled = styled.section`
  display: flexbox;
  flex-flow: row wrap;
`

const Box1Styled = styled.div`
  display: flex;
  border: 2px solid var(--darkgreen);
  background-color: var(--darkgreen);
  border-radius: 10px;
  width: 33vw;
  height: 13vh;
  margin: 5px;
`

const Image2Styled = styled.img`
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: 5px;
  justify-content: space-evenly;
`
const Box3Styled = styled.div`
  border: 2px solid var(--lightblue);
  background-color: var(--lightblue);
  border-radius: 10px;
  width: 35vw;
  height: 13vh;
  margin: 5px;
`

const Image4Styled = styled.img`
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: 5px;
`
const Box5Styled = styled.div`
  border: 2px solid var(--font-color-white);
  background-color: var(--font-color-white);
  border-radius: 10px;
  width: 45vw;
  height: 13vh;
  margin: 5px;
`
const Image6Styled = styled.img`
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: 5px;
`
const Box7Styled = styled.div`
  border: 2px solid var(--darkyellow);
  background-color: var(--darkyellow);
  border-radius: 10px;
  width: 35vw;
  height: 13vh;
  margin: 5px;
`

const Image8Styled = styled.img`
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: 5px;
`
const Box9Styled = styled.div`
  border: 2px solid var(--lightpink);
  background-color: var(--lightpink);
  border-radius: 10px;
  width: 32vw;
  height: 13vh;
  margin: 5px;
`

const StartButtonStyled = styled.button`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  font-size: 20px;
  background: var(--darkgreen);
  border: var(--darkgreen);
  border-radius: 35px;
  box-shadow: 0 3px 10px #0000008b;
  width: 140px;
  height: 75px;
  text-align: center;
  display: block;
  margin: auto;
  border: none;
  margin-bottom: 40px;
  cursor: pointer;
`
const TextStyled = styled.p`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  font-size: 24px;
  text-align: left;
`
const TextContainerStyled = styled.section`
  margin-left: 60px;
  letter-spacing: 0.1em;
`
