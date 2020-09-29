import React from 'react'
import styled from 'styled-components/macro'
import defaultPicture from '../../icons/default-image.svg'

export default function Profile({
  username,
  categories,
  follower,
  gender,
  birthday,
  location,
  languages,
}) {
  const abbreviateNumber = (n) => {
    if (n < 1e3) return n
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K'
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M'
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B'
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T'
  }
  return (
    <section>
      <ContainerStyled>
        <ImageStyled src={defaultPicture} />
        <UsernameStyled>{username}</UsernameStyled>
        <CategoriesStyled>{categories}</CategoriesStyled>
      </ContainerStyled>
      <DetailListStyled>
        <DetailItemStyled>
          <strong>Follower:</strong> {abbreviateNumber(follower)}
        </DetailItemStyled>
        <DetailItemStyled>
          <strong>Gender:</strong> {gender}
        </DetailItemStyled>
        <DetailItemStyled id="age">
          <strong>Age:</strong> {birthday} years
        </DetailItemStyled>
        <DetailItemStyled>
          <strong>Location:</strong> {location}
        </DetailItemStyled>
        <DetailItemStyled>
          <strong>Languages:</strong> {languages}
        </DetailItemStyled>
      </DetailListStyled>
    </section>
  )
}

const ContainerStyled = styled.section`
  background: var(--transparent-blue);
  height: 250px;
`

const ImageStyled = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0 0 0;
  border-radius: 50%;
`

const UsernameStyled = styled.h2`
  font-family: 'Poppins';
  font-weight: var(--font-weight-semibold);
  font-size: 25px;
  text-align: center;
  padding: 20px 0 0 0;
  margin-top: 0;
  margin-bottom: 0;
`
const CategoriesStyled = styled.h3`
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
  font-size: 20px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`

const DetailListStyled = styled.ul`
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
  font-size: 20px;
  text-align: left;
  list-style-type: none;
  padding: 20px;
  width: 250px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`
const DetailItemStyled = styled.li`
  letter-spacing: 1px;
  margin: 15px 0;
  position: relative;
`
