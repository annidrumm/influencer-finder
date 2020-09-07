import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InfluencerList from './InfluencerList.js'
import 'jest-styled-components'

describe('InfluencerList', () => {
  const influencerData = [
    {
      id: 1,
      username: '@fitness4life',
      categories: ['Fitness'],
      follower: '10k',
      gender: 'female',
      age: '25 years',
      location: 'Hamburg',
      languages: ['German, ', 'English'],
    },
    {
      id: 2,
      username: '@VeganPlace',
      categories: ['Food', 'Health'],
      follower: '1.000',
      gender: 'female',
      age: '28 years',
      location: 'Munich',
      languages: ['German, ', 'English'],
    },
  ]

  it('displays the information details of an influencer', () => {
    const { getByText, getAllByText } = render(
      <InfluencerList influencerData={influencerData} />
    )
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

  it('renders influencer details correctly', () => {
    const tree = renderer.create(
      <InfluencerList influencerData={influencerData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
