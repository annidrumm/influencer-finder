import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as HeartIcon } from '../../icons/heart.svg'
import styled from 'styled-components'

FavouriteButton.propTypes = {
  headline: PropTypes.string,
}

export default function FavouriteButton({ onHeartClick, isClicked }) {
  return (
    <section>
      <ButtonStyled>
        <HeartIcon
          onClick={onHeartClick}
          fill={isClicked ? 'var(--darkpink)' : 'none'}
          stroke={isClicked ? 'var(--darkpink)' : 'var(--darkpink)'}
        />
      </ButtonStyled>
    </section>
  )
}

const ButtonStyled = styled.button`
  background: var(--lightpink);
  border-radius: 50%;
  text-align: center;
  height: 60px;
  width: 60px;
  display: block;
  margin: auto;
  margin-top: 15px;
  border: none;
`
