import React from 'react'
import renderer from 'react-test-renderer'
import GoBackArrow from './GoBackArrow'
import '@testing-library/jest-dom/extend-expect'

describe('GoBackArrow', () => {
  it('renders GoBackArrow correctly', () => {
    const tree = renderer.create(<GoBackArrow />)
    expect(tree).toMatchSnapshot()
  })
})
