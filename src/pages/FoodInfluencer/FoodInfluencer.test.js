import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FoodInfluencer from './FoodInfluencer.js'
import 'jest-styled-components'

describe('InfluencerList', () => {
  const influencerData = [
    {
      id: 2,
      username: '@VeganPlace',
      categories: ['Food', 'Health'],
      follower: 2500,
      gender: 'female',
      age: '28 years',
      location: 'Munich',
      languages: ['German', 'English'],
      image:
        'https://raw.githubusercontent.com/annidrumm/influencer-finder/filter-categories/src/images/gisela-carolina-min.jpg',
    },
    {
      id: 4,
      username: '@WorldTraveller',
      categories: ['Travel', 'Food'],
      follower: 160000,
      gender: 'male',
      age: '32 years',
      location: 'Cologne',
      languages: ['English'],
      image:
        'https://raw.githubusercontent.com/annidrumm/influencer-finder/filter-categories/src/images/sayo-garcia-min.jpg',
    },
  ]

  it('display the username from a influencer', () => {
    const { getByText, getAllByText } = render(<FoodInfluencer />)
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
    const tree = renderer.create(<FoodInfluencer />)
    expect(tree).toMatchSnapshot()
  })
})
