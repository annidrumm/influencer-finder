import React from 'react'
import renderer from 'react-test-renderer'
import CategoryButtons from './CategoryButtons'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('CategoryButtons', () => {
  it('renders CategoryButtons correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CategoryButtons />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
