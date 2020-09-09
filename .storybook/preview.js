import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { MemoryRouter } from 'react-router-dom'
import CategoryButtons from '../src/components/CategoryButtons/CategoryButtons'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  (CategoryButtons) => <MemoryRouter>{CategoryButtons()}</MemoryRouter>,
]
