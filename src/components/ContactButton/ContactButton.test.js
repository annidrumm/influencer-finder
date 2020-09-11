import React from 'react'
import renderer from 'react-test-renderer'
import ContactButton from './ContactButton'
import '@testing-library/jest-dom/extend-expect'

describe('ContactButton', () => {
  it('renders ContactButton correctly', () => {
    const tree = renderer.create(<ContactButton />)
    expect(tree).toMatchSnapshot()
  })
})
