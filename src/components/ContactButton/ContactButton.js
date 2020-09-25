import React from 'react'
import styled from 'styled-components/macro'

export default function ContactButton() {
  return (
    <AnchorStyled href="mailto:influencer@gmail.com">
      <ContactButtonStyled>Contact</ContactButtonStyled>
    </AnchorStyled>
  )
}

const ContactButtonStyled = styled.button`
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
  /* margin: auto; */
  cursor: pointer;
`
const AnchorStyled = styled.a`
  text-decoration: none;
`
