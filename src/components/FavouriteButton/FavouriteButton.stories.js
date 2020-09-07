import React from 'react'
import FavouriteButton from './FavouriteButton'

export default {
  title: 'Components/FavouriteButton',
  component: FavouriteButton,
  argTypes: {
    headline: { control: 'text' },
  },
}

const Template = (args) => <FavouriteButton {...args} />

export const category = Template.bind({})
category.args = {
  headline: 'What categories are you looking for?',
}
