import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function InfluencerList({ influencerData }) {
  return (
    <section className="profiles">
      {influencerData.map((profile) => {
        return (
          <section key={profile.id}>
            <ContainerStyled>
              <UsernameStyled>{profile.username}</UsernameStyled>
              <CategoriesStyled>{profile.categories}</CategoriesStyled>
            </ContainerStyled>
            <DetailListStyled>
              <DetailItemStyled key={profile.username}>
                Follower: {profile.follower}
              </DetailItemStyled>
              <DetailItemStyled key={profile.gender}>
                Gender: {profile.gender}
              </DetailItemStyled>
              <DetailItemStyled key={profile.age}>
                Age: {profile.age}
              </DetailItemStyled>
              <DetailItemStyled key={profile.location}>
                Location: {profile.location}
              </DetailItemStyled>
              <DetailItemStyled key={profile.languages}>
                Languages: {profile.languages}{' '}
              </DetailItemStyled>
            </DetailListStyled>
          </section>
        )
      })}
    </section>
  )
}

const ContainerStyled = styled.section`
  background: #ffffff1a;
  height: 200px;
  width: 100%;
`
const UsernameStyled = styled.h2`
  font-family: 'Poppins';
  font-weight: 600;
  line-height: 100px;
  text-align: center;
`
const CategoriesStyled = styled.h3`
  font-family: 'Poppins';
  font-weight: 300;
  text-align: center;
`

const DetailListStyled = styled.ul`
  text-align: left;
  list-style-type: none;
  font-family: 'Poppins';
  font-weight: 300;
  width: 100%;
`
const DetailItemStyled = styled.li`
  margin: 10px 0;
  position: relative;
  left: 40px;
`

InfluencerList.propTypes = {
  influencerData: PropTypes.array,
}
