import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'
import '@testing-library/jest-dom/extend-expect'

describe('Button', () => {
  it('renders Button correctly', () => {
    const tree = renderer.create(<Button />)
    expect(tree).toMatchSnapshot()
  })
})
