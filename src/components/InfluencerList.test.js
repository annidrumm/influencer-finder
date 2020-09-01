import React from 'react'
import { render, findByText } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InfluencerList from './InfluencerList.js'
import 'jest-styled-components'

describe('InfluencerList', () => {
  const influencerData = [
    {
      id: 1,
      username: '@fitness4life',
      categories: 'Fitness',
      follower: '10k',
      gender: 'female',
      age: '25 years',
      location: 'Hamburg',
      languages: 'German, ',
    },
  ]

  it('display the details about the influencer', () => {
    const { findByText } = render(
      <InfluencerList influencerData={influencerData} />
    )
    expect(findByText(influencerData.username)).toBeInTheDocument()
    // expect(findByText(influencerData.categories)).toBeInTheDocument()
    // expect(findByText(influencerData.follower)).toBeInTheDocument()
    // expect(findByText(influencerData.gender)).toBeInTheDocument()
    // expect(findByText(influencerData.age)).toBeInTheDocument()
    // expect(findByText(influencerData.location)).toBeInTheDocument()
    // expect(findByText(influencerData.languages)).toBeInTheDocument()
  })
  it('renders correctly', () => {
    const tree = renderer.create(
      <InfluencerList influencerData={influencerData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
