import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  headline: PropTypes.string,
}

export default function Button({ headline }) {
  return <ButtonStyled>{headline}</ButtonStyled>
}

const ButtonStyled = styled.button`
  color: var(--main-font-color);
  font-family: var(--font-weight-light);
  background: var(--darkgreen);
  border: var(--darkgreen);
  box-shadow: 0 3px 10px var(--boxshadow-color);
  font-size: 18px;
  border-radius: 40px;
  width: 130px;
  height: 75px;
  display: block;
  border: none;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 60px;
  cursor: pointer;
`
