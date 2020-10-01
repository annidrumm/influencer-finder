import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import NicoMarks from '../../images/nico-marks-min.jpg'
import Lena from '../../images/wesley-tingey-min.jpg'
import VeganPaula from '../../images/gisela-carolina-min.jpg'
import LouLou from '../../images/any-haust-min.jpg'
import Button from '../../components/Button/Button'

export default function StartPage() {
  return (
    <WrapperStyled>
      <ContainerStyled>
        <LargeBoxStyled box="green"></LargeBoxStyled>
        <ImageStyled src={NicoMarks}></ImageStyled>
        <SmallBoxStyled box="blue"></SmallBoxStyled>
        <ImageStyled src={Lena}></ImageStyled>
        <LargeBoxStyled box="white"></LargeBoxStyled>
        <ImageStyled src={VeganPaula}></ImageStyled>
        <SmallBoxStyled box="yellow"></SmallBoxStyled>
        <ImageStyled src={LouLou}></ImageStyled>
        <MediumBoxStyled box="pink"></MediumBoxStyled>
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
            <Button headline="Start">Start</Button>
          </Link>
        </Route>
      </Switch>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.section`
  margin: 5px auto;
`
const ContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const SmallBoxStyled = styled.div`
  background-color: var(--lightblue);
  border-radius: 10px;
  margin: 5px;
  width: 110px;
  height: 90px;
  background-color: ${({ box }) =>
    box === 'blue'
      ? 'var(--lightblue)'
      : box === 'yellow'
      ? 'var(--darkyellow)'
      : 'var(--darkyellow)'};
`
const MediumBoxStyled = styled.div`
  border: 2px solid var(--lightpink);
  background-color: var(--lightpink);
  border-radius: 10px;
  width: 120px;
  height: 90px;
  margin: 5px;
`
const LargeBoxStyled = styled.div`
  display: flex;
  border-radius: 10px;
  margin: 5px;
  width: 130px;
  height: 90px;
  background-color: ${({ box }) =>
    box === 'green'
      ? 'var(--darkgreen)'
      : box === 'white'
      ? 'var(--main-font-color)'
      : 'var(--main-font-color)'};
`
const ImageStyled = styled.img`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin: 6px;
  object-fit: cover;
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
  display: grid;
  place-items: center;
  margin-bottom: 25px;
`
