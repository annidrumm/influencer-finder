import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import CreateProfile from './CreateProfile'
import HeaderCreateProfile from '../Header/HeaderCreateProfile'
import { MemoryRouter } from 'react-router-dom'

describe('CreateProfile', () => {
  it('should watch input correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderCreateProfile headline="Create profile" />
        <CreateProfile />
      </MemoryRouter>
    )

    const username = container.querySelector("input[name='username']")
    const categories = container.querySelector("input[name='categories']")
    const follower = container.querySelector("input[name='follower']")
    const gender = container.querySelector("input[name='gender']")
    const age = container.querySelector("input[name='age']")
    const location = container.querySelector("input[name='location']")
    const languages = container.querySelector("input[name='languages']")

    fireEvent.input(username, {
      target: {
        value: '@fitness4life',
      },
    })
    fireEvent.input(categories, {
      target: {
        value: 'Fitness',
      },
    })
    fireEvent.input(follower, {
      target: {
        value: '1000',
      },
    })
    fireEvent.input(gender, {
      target: {
        value: 'female',
      },
    })
    fireEvent.input(age, {
      target: {
        value: '28',
      },
    })
    fireEvent.input(location, {
      target: {
        value: 'Hamburg',
      },
    })
    fireEvent.input(languages, {
      target: {
        value: 'German',
      },
    })

    expect(username.value).toEqual('@fitness4life')
    expect(categories.value).toEqual('Fitness')
    expect(follower.value).toEqual('1000')
    expect(gender.value).toEqual('female')
    expect(age.value).toEqual('28')
    expect(location.value).toEqual('Hamburg')
    expect(languages.value).toEqual('German')
  })
})
