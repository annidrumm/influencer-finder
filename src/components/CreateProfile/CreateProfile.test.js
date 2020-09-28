import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
import CreateProfile from './CreateProfile'
import HeaderCreateProfile from '../Header/HeaderCreateProfile'
import { MemoryRouter } from 'react-router-dom'

describe('CreateProfile', () => {
  it('creates a new profile', async () => {
    const { getByText, getByAltText, getByPlaceholderText } = render(
      <MemoryRouter>
        <HeaderCreateProfile headline="Create profile" /> <CreateProfile />
      </MemoryRouter>
    )

    fireEvent.input(getByPlaceholderText('fitness4life'), {
      target: {
        value: '@fitness4life',
      },
    })
    fireEvent.input(getByPlaceholderText('Food, Travel, Fitness, Beauty'), {
      target: {
        value: 'Fitness',
      },
    })
    fireEvent.input(getByPlaceholderText('1200'), {
      target: {
        value: '1200',
      },
    })
    fireEvent.input(getByPlaceholderText('female, male, diverse'), {
      target: {
        value: 'female',
      },
    })
    fireEvent.input(getByPlaceholderText('28'), {
      target: {
        value: '28',
      },
    })
    fireEvent.input(getByPlaceholderText('Berlin'), {
      target: {
        value: 'Hamburg',
      },
    })
    fireEvent.input(getByPlaceholderText('German, English'), {
      target: {
        value: 'German',
      },
    })
  })
})
