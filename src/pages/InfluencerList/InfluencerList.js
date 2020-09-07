import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Headline from '../../components/Headline/Headline'
import LikeButton from '../../components/LikeButton/LikeButton.js'
import GoBackArrow from '../../components/GoBackArrow/GoBackArrow'

export default function InfluencerList({ influencerData }) {
  return (
    <section className="profiles">
      <GoBackArrow />
      <Headline headline="Search" />
      {influencerData.map((profile) => {
        return (
          <section key={profile.id}>
            <ContainerStyled>
              <ImageStyled src={profile.image} />
              <UsernameStyled>{profile.username}</UsernameStyled>
              <CategoriesStyled>
                {profile.categories.join(', ')}
              </CategoriesStyled>
              <LikeButton
                likedKey={influencerData.key}
                isLiked={influencerData.isLiked}
              />
            </ContainerStyled>
            <DetailListStyled>
              <DetailItemStyled key={profile.username}>
                Follower: {profile.follower.toLocaleString('en-US')}
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
                Languages: {profile.languages.join(', ')}
              </DetailItemStyled>
            </DetailListStyled>
          </section>
        )
      })}
    </section>
  )
}

const ContainerStyled = styled.section`
  background: var(--transparent-blue);
  height: 350px;
`
const ImageStyled = styled.img`
  width: 150px;
  height: 220px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0 0 0;
  border-radius: 50%;
`

const UsernameStyled = styled.h2`
  font-family: 'Poppins';
  font-weight: var(--font-weight-semibold);
  text-align: center;
  padding: 10px 0 0 0;
  margin-top: 0;
  margin-bottom: 0;
`
const CategoriesStyled = styled.h3`
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
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
  margin: 50px 0 120px 0;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`
const DetailItemStyled = styled.li`
  letter-spacing: 1px;
  margin: 10px 0;
  position: relative;
`

InfluencerList.propTypes = {
  influencerData: PropTypes.array,
}
