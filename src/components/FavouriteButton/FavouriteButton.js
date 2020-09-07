import React from 'react'
import PropTypes from 'prop-types'
import emptyHeart from '../../icons/emptyHeart.svg'
import styled from 'styled-components'

FavouriteButton.propTypes = {
  headline: PropTypes.string,
}

export default function FavouriteButton() {
  return (
    <section>
      <ButtonStyled>
        <img src={emptyHeart} alt="heart" />
      </ButtonStyled>
    </section>
  )
}

const ButtonStyled = styled.button`
  background: var(--lightpink);
  border-radius: 50%;
  text-align: center;
  height: 50px;
  width: 50px;
  display: block;
  margin: auto;
  margin-top: 15px;
  border: none;
`
