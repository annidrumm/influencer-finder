import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import NicoMarks from '../../images/nico-marks-min.jpg'
import Lena from '../../images/wesley-tingey-min.jpg'
import VeganPaula from '../../images/gisela-carolina-min.jpg'
import LouLou from '../../images/any-haust-min.jpg'

export default function StartPage() {
  return (
    <WrapperStyled>
      <ContainerStyled>
        <Box1Styled></Box1Styled>
        <Image2Styled src={NicoMarks}></Image2Styled>
        <Box3Styled></Box3Styled>
        <Image4Styled src={Lena}></Image4Styled>
        <Box5Styled></Box5Styled>
        <Image6Styled src={VeganPaula}></Image6Styled>
        <Box7Styled></Box7Styled>
        <Image8Styled src={LouLou}></Image8Styled>
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
    </WrapperStyled>
  )
}

const WrapperStyled = styled.section`
  margin: 0px auto;
  max-width: 375px;
`

const ContainerStyled = styled.section`
  display: flexbox;
  flex-flow: row wrap;
`

const Box1Styled = styled.div`
  display: flex;
  border: 2px solid var(--darkgreen);
  background-color: var(--darkgreen);
  border-radius: 10px;
  margin: 5px;
  width: 130px;
  height: 90px;
`

const Image2Styled = styled.img`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin: 6px;
  object-fit: cover;
`
const Box3Styled = styled.div`
  border: 2px solid var(--lightblue);
  background-color: var(--lightblue);
  border-radius: 10px;
  margin: 5px;
  width: 100px;
  height: 90px;
`

const Image4Styled = styled.img`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin: 6px;
  object-fit: cover;
`
const Box5Styled = styled.div`
  border: 2px solid var(--font-color-white);
  background-color: var(--font-color-white);
  border-radius: 10px;
  width: 130px;
  height: 90px;
  margin: 5px;
`
const Image6Styled = styled.img`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin: 6px;
  object-fit: cover;
`
const Box7Styled = styled.div`
  border: 2px solid var(--darkyellow);
  background-color: var(--darkyellow);
  border-radius: 10px;
  width: 110px;
  height: 90px;
  margin: 5px;
`

const Image8Styled = styled.img`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin: 6px;
  object-fit: cover;
`
const Box9Styled = styled.div`
  border: 2px solid var(--lightpink);
  background-color: var(--lightpink);
  border-radius: 10px;
  width: 120px;
  height: 90px;
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
  cursor: pointer;
`
const TextStyled = styled.p`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  font-size: 20px;
  text-align: left;
  letter-spacing: 0.1em;
  word-spacing: 0.2em;
`
const TextContainerStyled = styled.section`
  margin-left: 60px;
  margin-bottom: 35px;
`
