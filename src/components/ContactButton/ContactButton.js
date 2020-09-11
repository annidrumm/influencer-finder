import React from 'react'
import styled from 'styled-components/macro'

export default function ContactButton() {
  return (
    <a style={{ textDecoration: 'none' }} href="mailto:influencer@gmail.com">
      <ContactButtonStyled>Contact</ContactButtonStyled>
    </a>
  )
}

const ContactButtonStyled = styled.button`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  font-size: 15px;
  background: var(--darkgreen);
  border: var(--darkgreen);
  border-radius: 30px;
  box-shadow: 0 3px 10px #0000008b;
  padding: 20px;
  text-align: center;
  display: block;
  margin: auto;
  border: none;
  margin-bottom: 40px;
  cursor: pointer;
`
