import React from 'react'
import LikeButton from './LikeButton'

export default {
  title: 'Components/Button',
  component: LikeButton,
  argTypes: {
    headline: { control: 'text' },
  },
}

const Template = (args) => <LikeButton {...args} />

export const like = Template.bind({})
like.args = {}
