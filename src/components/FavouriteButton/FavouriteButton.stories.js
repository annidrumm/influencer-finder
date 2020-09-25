import React from 'react'
import FavouriteButton from './FavouriteButton'
import { ReactComponent as Heart } from '../../icons/heart.svg'
import styled from 'styled-components'

export default {
  title: 'Components/Button',
  component: FavouriteButton,
  argTypes: {
    headline: { control: 'text' },
  },
}

const Template = (args) => <FavouriteButton {...args} />

export const notLiked = Template.bind({})
notLiked.args = {}

export const Liked = () => <FavouriteButtonLike />

const FavouriteButtonLike = styled(Heart)`
  background: var(--lightpink);
  fill: var(--darkpink);
  border-radius: 50%;
  text-align: center;
  height: 60px;
  width: 60px;
  display: block;
  padding: 10px;
  margin: auto;
  margin-top: 15px;
  border: none;
`
