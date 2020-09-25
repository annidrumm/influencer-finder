import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../icons/back.svg'
import { ReactComponent as Navigate } from '../../icons/navigate.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

HeaderCreateProfile.propTypes = {
  headline: PropTypes.string,
}

export default function HeaderCreateProfile({ headline }) {
  const history = useHistory()

  function handleClick() {
    history.goBack()
  }

  return (
    <Header>
      <ArrowStyled onClick={handleClick} />
      <HeadlineStyled>{headline}</HeadlineStyled>
      <Switch>
        <Route>
          <Link to="/navigate">
            <NavigateStyled />
          </Link>
        </Route>
      </Switch>
    </Header>
  )
}

const Header = styled.section`
  display: flex;
  grid-column: 1/3;
  margin: 20px 0;
`

const HeadlineStyled = styled.h2`
  display: inline;
  font-weight: 300;
  color: var(--font-color-white);
  border-bottom: 1px solid var(--darkgreen);
  padding-bottom: 5px;
  margin: 0 auto;
`
const ArrowStyled = styled(Arrow)`
  fill: var(--darkgreen);
  position: absolute;
  left: 10%;
  margin-top: 10px;
  cursor: pointer;
`
const NavigateStyled = styled(Navigate)`
  position: absolute;
  right: 40px;
  margin-top: 10px;
  cursor: pointer;
  fill: var(--darkgreen);
`
