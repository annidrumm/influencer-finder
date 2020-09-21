import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Influencer from '../../images/influencer-min.jpg'
import company from '../../images/company-min.jpg'

export default function SecondPage() {
  return (
    <Switch>
      <ContainerStyled>
        <Route>
          <Link style={{ textDecoration: 'none' }} to="/create">
            <H2Styled>Influencer</H2Styled>
            <ButtonStyled category="influencer">
              <ImageStyled src={Influencer} alt="instagram influencer" />
            </ButtonStyled>
            <Subheadline>I want to set up a profile</Subheadline>
          </Link>
        </Route>
        <Route>
          <Link style={{ textDecoration: 'none' }} to="/categories">
            <H2Styled>Companies</H2Styled>
            <ButtonStyled category="userCompany">
              <ImageStyled src={company} alt="office" />
            </ButtonStyled>
            <Subheadline>I want to find an influencer</Subheadline>
          </Link>
        </Route>
      </ContainerStyled>
    </Switch>
  )
}

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 10%;
  cursor: pointer;
  border: none;
  padding: 30px;
`
const ContainerStyled = styled.section`
  padding: 10px;
`

const ImageStyled = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
  height: 150px;
  border-radius: 15%;
`

const H2Styled = styled.h2`
  color: var(--font-color-white);
  font-weight: var(--font-weight-light);
  font-size: 18px;
  text-align: center;
  margin: 70px 0 0 0;
`
const Subheadline = styled.h3`
  color: var(--font-color-white);
  font-weight: var(--font-weight-light);
  font-size: 17px;
  text-align: center;
  margin: 130px 0 0 0;
`
