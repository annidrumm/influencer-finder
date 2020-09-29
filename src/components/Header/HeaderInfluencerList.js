import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../icons/back.svg'
import { ReactComponent as Heart } from '../../icons/heart.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

HeaderInfluencerList.propTypes = {
  headline: PropTypes.string,
}

export default function HeaderInfluencerList({ headline }) {
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
          <Link to="/favourites">
            <HeartStyled />
          </Link>
        </Route>
      </Switch>
    </Header>
  )
}

const Header = styled.section`
  display: flex;
  grid-column: 1/3;
`

const HeadlineStyled = styled.h2`
  display: inline;
  font-weight: 300;
  color: var(--font-color-white);
  padding-bottom: 5px;
  margin: 20px auto;
`
const ArrowStyled = styled(Arrow)`
  fill: var(--darkgreen);
  margin-left: 15px;
  margin-top: 25px;
  cursor: pointer;
`
const HeartStyled = styled(Heart)`
  margin-right: 15px;
  margin-top: 25px;
  cursor: pointer;
  fill: var(--darkpink);
`
