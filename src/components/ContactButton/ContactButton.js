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
  font-size: 20px;
  background: var(--darkgreen);
  border: var(--darkgreen);
  border-radius: 35px;
  box-shadow: 0 3px 10px #0000008b;
  width: 140px;
  height: 75px;
  text-align: center;
  display: block;
  margin: auto;
  border: none;
  margin-bottom: 40px;
  cursor: pointer;
`
const AnchorStyled = styled.a`
  text-decoration: none;
`
