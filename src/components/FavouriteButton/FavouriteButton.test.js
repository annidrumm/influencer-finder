import React from 'react'
import renderer from 'react-test-renderer'
import FavouriteButton from './FavouriteButton'
import '@testing-library/jest-dom/extend-expect'

describe('FavouriteButton', () => {
  it('renders FavouriteButton correctly', () => {
    const tree = renderer.create(<FavouriteButton />)
    expect(tree).toMatchSnapshot()
  })
})
