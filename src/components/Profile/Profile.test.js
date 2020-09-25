import React from 'react'
import renderer from 'react-test-renderer'
import { render, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Profile from './Profile'
import { MemoryRouter } from 'react-router-dom'

describe('Profile', () => {
  it('display your profile', () => {
    const userProfile = [
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
    ]
    const tree = renderer.create(
      <MemoryRouter>
        <Profile userProfile={userProfile} />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
