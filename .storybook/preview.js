import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { MemoryRouter } from 'react-router-dom'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  (CategoryButtons) => <MemoryRouter>{CategoryButtons()}</MemoryRouter>,
]
