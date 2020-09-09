import React from 'react'
import renderer from 'react-test-renderer'
import Nav from './Nav'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('Nav', () => {
  it('renders Nav correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
