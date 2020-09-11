import React from 'react'
import FavouriteButton from './FavouriteButton'

export default {
  title: 'Components/Button',
  component: FavouriteButton,
  argTypes: {
    headline: { control: 'text' },
  },
}

const Template = (args) => <FavouriteButton {...args} />

export const favourites = Template.bind({})
favourites.args = {}
