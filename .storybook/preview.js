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
  (StartPage) => <MemoryRouter>{StartPage()}</MemoryRouter>,
]
