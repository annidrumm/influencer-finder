import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../icons/back.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

HeaderCategoryPage.propTypes = {
  headline: PropTypes.string,
}

export default function HeaderCategoryPage({ headline }) {
  const history = useHistory()

  function handleClick() {
    history.goBack()
  }

  return (
    <main>
      <Header>
        <ArrowStyled onClick={handleClick} />
        <HeadlineStyled>{headline}</HeadlineStyled>
      </Header>
    </main>
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
