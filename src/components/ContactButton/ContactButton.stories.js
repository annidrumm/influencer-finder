import React from 'react'
import ContactButton from './ContactButton'

export default {
  title: 'Components/Button',
  component: ContactButton,
  argTypes: {
    headline: { control: 'text' },
  },
}

const Template = (args) => <ContactButton {...args} />

export const contact = Template.bind({})
contact.args = {}
