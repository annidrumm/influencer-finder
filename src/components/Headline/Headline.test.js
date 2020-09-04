import React from 'react'
import renderer from 'react-test-renderer'
import Headline from './Headline'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Headline', () => {
  const headline = 'Search'

  it('display the headline and an example event', () => {
    const { getByText } = render(<Headline headline={headline} />)
    expect(getByText(headline)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Headline />)
    expect(tree).toMatchSnapshot()
  })
})
