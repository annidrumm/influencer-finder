import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  headline: PropTypes.string,
}

export default function Button({ headline }) {
  return (
    <AnchorStyled href="mailto:influencer@gmail.com">
      <ButtonStyled>{headline}</ButtonStyled>
    </AnchorStyled>
  )
}

const ButtonStyled = styled.button`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  font-size: 18px;
  background: var(--darkgreen);
  border: var(--darkgreen);
  box-shadow: 0 3px 10px var(--boxshadow-color);
  border-radius: 40px;
  width: 130px;
  height: 75px;
  text-align: center;
  display: block;
  border: none;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 60px;
  ButtonStyled  cursor: pointer;
`
const AnchorStyled = styled.a`
  text-decoration: none;
`
