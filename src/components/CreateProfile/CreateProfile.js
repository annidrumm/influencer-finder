import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import HeaderCreateProfile from '../Header/HeaderCreateProfile'
import Button from '../Button/Button'

export default function CreateProfile({ onCreateProfile }) {
  const history = useHistory()
  const routeChange = () => {
    history.push('/profile')
  }
  return (
    <main>
      <HeaderCreateProfile headline="Create profile" />
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled htmlFor="username">Username:</LabelStyled>
        <InputStyled
          type="text"
          name="username"
          id="username"
          placeholder="fitness4life"
          required
        />

        <LabelStyled htmlFor="categories">Categories: </LabelStyled>
        <InputStyled
          type="text"
          pattern="[a-zA-Z, ]*"
          name="categories"
          id="categories"
          placeholder="Food, Travel, Fitness, Beauty"
          required
        />

        <LabelStyled htmlFor="follower">Follower:</LabelStyled>
        <InputStyled
          type="number"
          pattern="[0-9k]*"
          name="follower"
          id="follower"
          placeholder="1200"
          min="1"
          required
        />

        <LabelStyled htmlFor="gender">Gender:</LabelStyled>
        <InputStyled
          type="text"
          pattern="[a-zA-Z, ]*"
          name="gender"
          id="gender"
          placeholder="female, male, diverse"
          required
        />

        <LabelStyled htmlFor="age">Age:</LabelStyled>
        <InputStyled
          type="number"
          pattern="[0-9]*"
          name="birthday"
          id="birthday"
          placeholder="28"
          max="100"
          min="18"
          required
        />

        <LabelStyled htmlFor="location">Location:</LabelStyled>
        <InputStyled
          type="text"
          pattern="[a-zA-Z, ]*"
          name="location"
          id="location"
          placeholder="Berlin"
          required
        />

        <LabelStyled htmlFor="languages">Languages:</LabelStyled>
        <InputStyled
          type="text"
          pattern="[a-zA-Z, ]*"
          name="languages"
          id="languages"
          placeholder="German, English"
          required
          style={{ marginBottom: '35px' }}
        />

        <Button headline="Submit" value="Create profile" type="submit" />
      </FormStyled>
    </main>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const {
      username: usernameInput,
      categories: categoriesInput,
      follower: followerInput,
      gender: genderInput,
      birthday: birthdayInput,
      location: locationInput,
      languages: languagesInput,
    } = form
    onCreateProfile({
      username: usernameInput.value,
      categories: categoriesInput.value,
      follower: followerInput.value,
      gender: genderInput.value.toLowerCase(),
      birthday: birthdayInput.value,
      location: locationInput.value,
      languages: languagesInput.value,
    })
    form.reset()
    routeChange()
  }
}

const FormStyled = styled.form`
  padding: 10px;
`

const LabelStyled = styled.label`
  font-family: var(--font-weight-light);
  font-size: 18px;
  letter-spacing: 0.1rem;
  margin: 10px 0;
  display: block;
  text-align: left;
  margin-left: 5%;
`

const InputStyled = styled.input`
  font-family: var(--font-weight-light);
  font-size: 15px;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  border: none;
  box-shadow: 1px 1px 4px 1px rgb(58, 57, 57);
  display: grid;
  place-items: center;
`
