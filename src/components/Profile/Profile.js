import React from 'react'
import styled from 'styled-components/macro'

export default function Profile({
  username,
  categories,
  follower,
  gender,
  birthday,
  location,
  languages,
}) {
  console.log(birthday)
  return (
    <section>
      <ContainerStyled>
        <UsernameStyled>{username}</UsernameStyled>
        <CategoriesStyled>{categories}</CategoriesStyled>
      </ContainerStyled>
      <DetailListStyled>
        <DetailItemStyled>Follower: {follower}</DetailItemStyled>
        <DetailItemStyled>Gender: {gender}</DetailItemStyled>
        <DetailItemStyled id="age">
          Age: {birthday} {AgeCalculator()}
        </DetailItemStyled>
        <DetailItemStyled>Location: {location}</DetailItemStyled>
        <DetailItemStyled>Languages: {languages}</DetailItemStyled>
      </DetailListStyled>
    </section>
  )
  function AgeCalculator(birthday) {
    const dob = new Date(birthday)
    console.log(dob)
    //   const formattedDob = birthday.replace('-', ', ')
    //   const dob = new Date(formattedDob)
    //   var diff_ms = Date.now() - dob.getTime()
    //   var age_dt = new Date(diff_ms)
    //   return Math.abs(age_dt.getUTCFullYear() - 1970)
    // }
  }
}

const ContainerStyled = styled.section`
  background: var(--transparent-blue);
  height: 200px;
`

const UsernameStyled = styled.h2`
  font-family: 'Poppins';
  font-weight: var(--font-weight-semibold);
  font-size: 20px;
  text-align: center;
  padding: 80px 0 0 0;
  margin-top: 0;
  margin-bottom: 0;
`
const CategoriesStyled = styled.h3`
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
  font-size: 18px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`

const DetailListStyled = styled.ul`
  text-align: left;
  margin: 0;
  list-style-type: none;
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
  margin: 50px 0 40px 0;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`
const DetailItemStyled = styled.li`
  letter-spacing: 1px;
  margin: 10px 0;
  position: relative;
`
