import React from 'react'
import renderer from 'react-test-renderer'
import CategoryPage from './CategoryPage'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('CategoryPage', () => {
  const headline = 'What categories are you looking for?'

  it('display headline', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CategoryPage headline={headline} />
      </MemoryRouter>
    )
    expect(getByText(headline)).toBeInTheDocument()
  })
  it('renders CategoryPage correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
