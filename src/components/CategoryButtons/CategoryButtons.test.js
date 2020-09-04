import React from 'react'
import renderer from 'react-test-renderer'
import CategoryButtons from './CategoryButtons'
import '@testing-library/jest-dom/extend-expect'

describe('CategoryButtons', () => {
  it('renders CategoryButtons correctly', () => {
    const tree = renderer.create(<CategoryButtons />)
    expect(tree).toMatchSnapshot()
  })
})
