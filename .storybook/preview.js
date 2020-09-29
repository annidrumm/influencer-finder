import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { MemoryRouter } from 'react-router-dom'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export const CUSTOM_VIEWPORTS = {
  mobile1: {
    name: 'Small mobile',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  iPhone6: {
    name: 'iPhone 6',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'Large mobile',
    styles: {
      height: '896px',
      width: '414px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1112px',
      width: '834px',
    },
    type: 'tablet',
  },
}

export const parameters = {
  viewport: {
    viewports: CUSTOM_VIEWPORTS,
    defaultViewport: 'iPhone6',
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  (StartPage) => <MemoryRouter>{StartPage()}</MemoryRouter>,
]
