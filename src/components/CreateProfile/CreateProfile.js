import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import HeaderCreateProfile from '../Header/HeaderCreateProfile'

export default function CreateProfile({ onCreateProfile }) {
  const history = useHistory()
  const routeChange = () => {
    history.push('/profile')
  }
  return (
    <ContainerStyled>
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

        <LabelStyled htmlFor="age">Birthday:</LabelStyled>
        <InputStyled type="date" name="birthday" id="birthday" required />

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
        />

        <SubmitButtonStyled value="Create profile" type="submit">
          Create
        </SubmitButtonStyled>
      </FormStyled>
    </ContainerStyled>
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
      categories: categoriesInput.value.toUpperCase(),
      follower: followerInput.value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
      gender: genderInput.value.toLowerCase(),
      birthday: birthdayInput.value,
      location: locationInput.value,
      languages: languagesInput.value,
    })
    form.reset()
    routeChange()
  }
}

const ContainerStyled = styled.section`
  width: 80%;
  margin: auto;
`

const SubmitButtonStyled = styled.button`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  font-size: 15px;
  background: var(--darkgreen);
  border: var(--darkgreen);
  border-radius: 30px;
  box-shadow: 0 3px 10px var(--boxshadow-color);
  padding: 20px;
  text-align: center;
  display: block;
  border: none;
  margin: 30px 0;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
`

const FormStyled = styled.form`
  width: 100%;
  padding: 10px;
`

const LabelStyled = styled.label`
  font-family: var(--font-weight-light);
  font-size: 18px;
  letter-spacing: 0.1rem;
  display: block;
  margin: 10px 0;
`

const InputStyled = styled.input`
  font-family: var(--font-weight-light);
  font-size: 15px;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  border: none;
  box-shadow: 1px 1px 4px 1px rgb(58, 57, 57);
`
