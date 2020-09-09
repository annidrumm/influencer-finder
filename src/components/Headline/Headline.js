import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Headline.propTypes = {
  headline: PropTypes.string,
}

export default function Headline({ headline }) {
  return (
    <HeaderStyled>
      <HeadlineStyled>{headline}</HeadlineStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.section`
  display: flex;
  grid-column: 1/3;
  margin: 20px 0;
  text-align: center;
`

const HeadlineStyled = styled.h1`
  display: inline;
  position: relative;
  font: var(--font-weight-regular);
  font-size: 25px;
  padding-bottom: 5px;
  margin: auto;
  max-width: 300px;
`
