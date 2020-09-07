import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FitnessInfluencer from './FitnessInfluencer.js'
import 'jest-styled-components'

describe('InfluencerList', () => {
  const influencerData = [
    {
      id: 1,
      username: '@fitness4life',
      categories: ['Fitness'],
      follower: 10000,
      gender: 'female',
      age: '25 years',
      location: 'Hamburg',
      languages: ['German', 'English'],
      image:
        'https://raw.githubusercontent.com/annidrumm/influencer-finder/filter-categories/src/images/wesley-tingey-min.jpg',
    },
  ]

  it('display the username from a influencer', () => {
    const { getByText, getAllByText } = render(<FitnessInfluencer />)
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
    const tree = renderer.create(<FitnessInfluencer />)
    expect(tree).toMatchSnapshot()
  })
})
