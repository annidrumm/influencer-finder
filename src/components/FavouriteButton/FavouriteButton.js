import React from 'react'
import { ReactComponent as HeartIcon } from '../../icons/heart.svg'
import styled from 'styled-components/macro'

export default function FavouriteButton({ onClick, isFavourite }) {
  return (
    <section>
      <ButtonStyled onClick={onClick}>
        <HeartIcon
          fill={isFavourite ? 'var(--darkpink)' : 'var(--lightpink)'}
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
  stroke: #e693b5;
`
