import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as HeartIcon } from '../../icons/heart.svg'
import styled from 'styled-components'

LikeButton.propTypes = {
  headline: PropTypes.string,
}

export default function LikeButton({ isLiked }) {
  const [liked, setliked] = useState(isLiked)

  return (
    <section>
      <ButtonStyled onClick={handleLikes}>
        <HeartIcon fill={liked ? 'var(--darkpink)' : 'var(--lightpink)'} />
      </ButtonStyled>
    </section>
  )

  function handleLikes() {
    setliked(!liked)
    const likedProfile = JSON.parse(localStorage.getItem('profiles'))
    likedProfile.isLiked = !likedProfile.isLiked
    localStorage.setItem('profiles', JSON.stringify(likedProfile))
  }
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
