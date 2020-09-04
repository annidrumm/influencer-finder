import React from 'react'
import renderer from 'react-test-renderer'
import CategoryPage from './CategoryPage'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('CategoryPage', () => {
  const headline = 'What categories are you looking for?'

  it('display headline', () => {
    const { getByText } = render(<CategoryPage headline={headline} />)
    expect(getByText(headline)).toBeInTheDocument()
  })
  it('renders CategoryPage correctly', () => {
    const tree = renderer.create(<CategoryPage />)
    expect(tree).toMatchSnapshot()
  })
})
