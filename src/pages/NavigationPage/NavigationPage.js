import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Influencer from '../../images/influencer-min.jpg'
import browse from '../../images/browse.jpg'

export default function NavigationPage() {
  return (
    <Switch>
      <ContainerStyled>
        <H2Styled>Set up a profile</H2Styled>
        <Route>
          <Link style={{ textDecoration: 'none' }} to="/create">
            <ButtonStyled category="influencer">
              <ImageStyled src={Influencer} alt="instagram influencer" />
            </ButtonStyled>
          </Link>
        </Route>
        <H2Styled>Browse through profiles</H2Styled>
        <Route>
          <Link style={{ textDecoration: 'none' }} to="/categories">
            <ButtonStyled id="button" category="userCompany">
              <ImageStyled src={browse} alt="office" />
            </ButtonStyled>
          </Link>
        </Route>
      </ContainerStyled>
    </Switch>
  )
}

const ContainerStyled = styled.section`
  display: grid;
  place-items: center;
  margin-top: 50px;
`
const ButtonStyled = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  display: block;
`
const ImageStyled = styled.img`
  height: 180px;
  opacity: 70%;
  border-radius: 15%;
`
const H2Styled = styled.h2`
  color: var(--main-font-color);
  font-weight: var(--font-weight-light);
  font-size: 22px;
  text-align: center;
`
