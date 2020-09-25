import React from 'react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage/CategoryPage'

describe('App', () => {
  it('has links to all pages and displays them', () => {
    const urls = [
      '/',
      '/InfluencerList',
      '/food',
      '/fitness',
      '/beauty',
      '/fashion',
      '/interior',
      '/travel',
      '/favourites',
    ]
    const { getAllByRole } = render(
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    )
    getAllByRole('link').forEach((link) => {
      expect(urls).toContain(link.getAttribute('href'))
    })
  })
})

it('renders App correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <CategoryPage />
    </MemoryRouter>
  )
  expect(tree).toMatchSnapshot()
})
