import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FashionInfluencer from './FashionInfluencer.js'
import 'jest-styled-components'

describe('InfluencerList', () => {
  const influencerData = [
    {
      id: 3,
      username: '@fashionist',
      categories: ['Fashion'],
      follower: 46000,
      gender: 'female',
      age: '24 years',
      location: 'Munich',
      languages: ['German', 'English'],
      image:
        'https://raw.githubusercontent.com/annidrumm/influencer-finder/filter-categories/src/images/sonnie-hiles-min.jpg',
    },
  ]

  it('displays the information details of an influencer', () => {
    const { getByText, getAllByText } = render(<FashionInfluencer />)
    influencerData.forEach(
      ({
        username,
        follower,
        location,
        age,
        gender,
        languages,
        categories,
      }) => {
        expect(getByText(username)).toBeInTheDocument()
        expect(getByText(new RegExp(age, 'i'))).toBeInTheDocument()
        expect(getByText(new RegExp(location, 'i'))).toBeInTheDocument()
        expect(getAllByText(new RegExp(gender, 'i'))[0]).toBeInTheDocument()
        expect(JSON.stringify(new RegExp(languages, 'i'))).toBe(
          JSON.stringify(/languages/i)
        )
        expect(JSON.stringify(new RegExp(categories, 'i'))).toBe(
          JSON.stringify(/categories/i)
        )
      }
    )
  })

  it('renders influencer details correctly', () => {
    const tree = renderer.create(<FashionInfluencer />)
    expect(tree).toMatchSnapshot()
  })
})
