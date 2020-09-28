import React from 'react'
import renderer from 'react-test-renderer'
import CategoryPage from './CategoryPage'
import HeaderCategoryPage from '../../components/Header/HeaderCategoryPage'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('Headline', () => {
  const headline = 'Categories'

  it('display the headline and an example event', () => {
    const { getByText } = render(<HeaderCategoryPage headline={headline} />)
    expect(getByText(headline)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<HeaderCategoryPage />)
    expect(tree).toMatchSnapshot()
  })

  describe('CategoryPage', () => {
    it('renders CategoryPage correctly', () => {
      const tree = renderer.create(
        <MemoryRouter>
          <CategoryPage />
        </MemoryRouter>
      )
      expect(tree).toMatchSnapshot()
    })
  })
})
