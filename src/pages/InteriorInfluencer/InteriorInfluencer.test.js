import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InteriorInfluencer from './InteriorInfluencer.js'
import 'jest-styled-components'

describe('InfluencerList', () => {
  const influencerData = [
    {
      id: 6,
      username: '@InteriorDesign',
      categories: ['Interior'],
      follower: 120000,
      gender: 'male',
      age: '35 years',
      location: 'Hamburg',
      languages: ['English'],
      image:
        'https://raw.githubusercontent.com/annidrumm/influencer-finder/filter-categories/src/images/nico-marks-min.jpg',
    },
  ]

  it('display the username from a influencer', () => {
    const { getByText, getAllByText } = render(<InteriorInfluencer />)
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

  it('renders username correctly', () => {
    const tree = renderer.create(<InteriorInfluencer />)
    expect(tree).toMatchSnapshot()
  })
})
