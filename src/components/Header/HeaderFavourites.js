import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../icons/back.svg'
import { ReactComponent as Browse } from '../../icons/browse.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

HeaderFavourites.propTypes = {
  headline: PropTypes.string,
}

export default function HeaderFavourites({ headline }) {
  const history = useHistory()

  function handleClick() {
    history.goBack()
  }

  return (
    <Header>
      <GoBackButtonStyled onClick={handleClick} />
      <HeadlineStyled>{headline}</HeadlineStyled>
      <Switch>
        <Route>
          <Link id="category-link" to="/categories">
            <BrowseStyled />
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
  color: var(--main-font-color);
  padding-bottom: 5px;
  margin: 20px auto;
`
const GoBackButtonStyled = styled(Arrow)`
  fill: var(--darkgreen);
  margin-left: 15px;
  margin-top: 25px;
  cursor: pointer;
`
const BrowseStyled = styled(Browse)`
  margin-right: 15px;
  margin-top: 25px;
  cursor: pointer;
  fill: var(--darkgreen);
`
