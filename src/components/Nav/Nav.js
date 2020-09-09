import React from 'react'
import styled from 'styled-components/macro'
import GoBackArrow from '../../components/GoBackArrow/GoBackArrow'
import { ReactComponent as HeartIcon } from '../../icons/heart.svg'
import { Switch, Route, Link } from 'react-router-dom'

export default function NavHeader() {
  return (
    <>
      <GoBackArrow />
      <Switch>
        <Route>
          <Link to="/favourites">
            <ButtonStyled>
              <HeartIcon fill="var(--darkpink)" stroke="var(--darkpink)" />
            </ButtonStyled>
          </Link>
        </Route>
      </Switch>
    </>
  )
}

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 50%;
  text-align: center;
  height: 60px;
  width: 60px;
  display: block;
  margin: auto;
  margin-top: 15px;
  border: none;
  cursor: pointer;
`
