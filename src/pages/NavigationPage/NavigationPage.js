import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Influencer from '../../images/influencer-min.jpg'
import browse from '../../images/browse.jpg'

export default function NavigationPage() {
  return (
    <Switch>
      <ContainerStyled>
        <Route>
          <Link style={{ textDecoration: 'none' }} to="/create">
            <H2Styled>Set up a profile</H2Styled>
            <ButtonStyled category="influencer">
              <ImageStyled src={Influencer} alt="instagram influencer" />
            </ButtonStyled>
          </Link>
        </Route>
        <Route>
          <Link style={{ textDecoration: 'none' }} to="/categories">
            <H2Styled>Browse through profiles</H2Styled>
            <ButtonStyled category="userCompany">
              <ImageStyled src={browse} alt="office" />
            </ButtonStyled>
          </Link>
        </Route>
      </ContainerStyled>
    </Switch>
  )
}

const ContainerStyled = styled.section`
  padding: 30px 0 30px 0;
  margin: 30px auto;
  height: 100vh;
`
const ButtonStyled = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  margin: auto;
  display: block;
  margin-bottom: 50px;
`
const ImageStyled = styled.img`
  height: 180px;
  opacity: 70%;
  border-radius: 15%;
`
const H2Styled = styled.h2`
  color: var(--font-color-white);
  font-weight: var(--font-weight-light);
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`
