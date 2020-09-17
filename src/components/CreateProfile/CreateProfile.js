import React from 'react'
import styled from 'styled-components/macro'
import GoBackArrow from '../GoBackArrow/GoBackArrow'
import Headline from '../Headline/Headline'
import { useHistory } from 'react-router-dom'

export default function CreateProfile({ onCreateProfile }) {
  const history = useHistory()
  const routeChange = () => {
    history.push('/profile')
  }
  return (
    <ContainerStyled>
      <GoBackArrow />
      <Headline headline="Create your profile" />
      <FormStyled onSubmit={handleSubmit}>
        <div>
          <LabelStyled htmlFor="username">Username:</LabelStyled>
          <InputStyled
            type="text"
            name="username"
            placeholder="@fitness4life"
            required
          />
        </div>
        <div>
          <LabelStyled htmlFor="categories">Categories: </LabelStyled>
          <InputStyled
            type="text"
            name="categories"
            placeholder="Food, Fitness"
            required
          />
        </div>

        <div>
          <LabelStyled htmlFor="follower">Follower:</LabelStyled>
          <InputStyled
            type="number"
            name="follower"
            placeholder="1000"
            min="0"
            required
          />
        </div>

        <div>
          <LabelStyled htmlFor="gender">Gender:</LabelStyled>
          <InputStyled
            type="text"
            name="gender"
            placeholder="female"
            required
          />
        </div>

        <div>
          <LabelStyled htmlFor="age">Age:</LabelStyled>
          <InputStyled
            type="number"
            min="0"
            max="100"
            name="age"
            placeholder="26"
            required
          />
        </div>

        <div>
          <LabelStyled htmlFor="location">Location:</LabelStyled>
          <InputStyled
            type="text"
            name="location"
            placeholder="Berlin"
            required
          />
        </div>

        <div>
          <LabelStyled htmlFor="languages">Languages:</LabelStyled>
          <InputStyled
            type="text"
            name="languages"
            placeholder="German, English"
            required
          />
        </div>
        <SubmitButtonStyled type="submit">Create</SubmitButtonStyled>
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
      age: ageInput,
      location: locationInput,
      languages: languagesInput,
    } = form
    onCreateProfile({
      username: usernameInput.value,
      categories: categoriesInput.value,
      follower: followerInput.value,
      gender: genderInput.value,
      age: ageInput.value,
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
  align-items: center;
`

const SubmitButtonStyled = styled.button`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  font-size: 15px;
  background: var(--darkgreen);
  border: var(--darkgreen);
  border-radius: 30px;
  box-shadow: 0 3px 10px #0000008b;
  padding: 20px;
  text-align: center;
  display: block;
  border: none;
  margin: 30px 0 30px 0;
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
  margin: 10px 0 10px 0;
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
