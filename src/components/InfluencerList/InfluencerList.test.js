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
      location: 'Hamburg',
      age: '25 years',
    },
    {
      id: 2,
      username: '@VeganPlace',
      location: 'Munich',
      age: '28 years',
    },
  ]

  it('display the username from a influencer', () => {
    const { getByText } = render(
      <InfluencerList influencerData={influencerData} />
    )
    influencerData.forEach(({ username, location, age }) => {
      expect(getByText(username)).toBeInTheDocument()
      expect(getByText(new RegExp(age, 'i'))).toBeInTheDocument()
      expect(getByText(new RegExp(location, 'i'))).toBeInTheDocument()
    })
  })

  it('renders username correctly', () => {
    const tree = renderer.create(
      <InfluencerList influencerData={influencerData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
