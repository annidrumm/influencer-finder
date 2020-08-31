import React from 'react'
import GlobalStyles from '../src/GlobalStyles'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
