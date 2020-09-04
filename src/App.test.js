import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('Categories', () => {
  it('has links to all pages', () => {
    const urls = ['/', '/InfluencerList']
    const { getAllByRole } = render(
      <Router>
        <App />
      </Router>
    )

    getAllByRole('link').forEach((link) => {
      expect(urls).toContain(link.getAttribute('href'))
    })
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <App />
      </Router>
    )
    expect(tree).toMatchSnapshot()
  })
})
