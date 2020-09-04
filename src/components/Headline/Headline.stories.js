import React from 'react'
import Headline from './Headline'

export default {
  title: 'Components/Headline',
  component: Headline,
  argTypes: {
    headline: { control: 'text' },
  },
}

const Template = (args) => <Headline {...args} />

export const category = Template.bind({})
category.args = {
  headline: 'What categories are you looking for?',
}

export const search = Template.bind({})
search.args = {
  headline: 'Search',
}
