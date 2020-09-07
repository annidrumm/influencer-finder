import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import BeautyInfluencer from './BeautyInfluencer.js'
import 'jest-styled-components'

describe('InfluencerList', () => {
  const influencerData = [
    {
      id: 5,
      username: '@LipstickPalace',
      categories: ['Beauty'],
      follower: 800,
      gender: 'female',
      age: '26 years',
      location: 'Munich',
      languages: ['German', 'English'],
      image:
        'https://raw.githubusercontent.com/annidrumm/influencer-finder/filter-categories/src/images/gabriel-silverio-min.jpg',
    },
  ]

  it('display the username from a influencer', () => {
    const { getByText, getAllByText } = render(<BeautyInfluencer />)
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
        expect(getByText(new RegExp(follower, 'i'))).toBeInTheDocument()
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

  it('renders username correctly', () => {
    const tree = renderer.create(<BeautyInfluencer />)
    expect(tree).toMatchSnapshot()
  })
})
