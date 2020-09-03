import React from 'react'
import renderer from 'react-test-renderer'
import CategoryButton from './CategoryButton'
import '@testing-library/jest-dom/extend-expect'

describe('CategoryButton', () => {
  it('renders CategoryButton correctly', () => {
    const tree = renderer.create(<CategoryButton />)
    expect(tree).toMatchSnapshot()
  })
})
