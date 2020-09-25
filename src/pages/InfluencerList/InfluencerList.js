import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import FavouriteButton from '../../components/FavouriteButton/FavouriteButton.js'
import ContactButton from '../../components/ContactButton/ContactButton.js'

export default function InfluencerList({ influencerData, onFavouriteClick }) {
  return (
    <section className="profiles">
      {influencerData?.map((profile) => {
        return (
          <section key={profile.id}>
            <ContainerStyled>
              <ImageStyled src={profile.image} />
              <UsernameStyled>{profile.username}</UsernameStyled>
              <CategoriesStyled>
                {profile.categories.join(', ')}
              </CategoriesStyled>
              <FavouriteButton
                onClick={() => onFavouriteClick(profile)}
                isFavourite={profile.isFavourite}
              />
            </ContainerStyled>
            <DetailListStyled>
              <DetailItemStyled key={profile.username}>
                <strong>Follower:</strong>{' '}
                {profile.follower.toLocaleString('en-US')}
              </DetailItemStyled>
              <DetailItemStyled key={profile.gender}>
                <strong>Gender:</strong> {profile.gender}
              </DetailItemStyled>
              <DetailItemStyled key={profile.age}>
                <strong>Age:</strong> {profile.age}
              </DetailItemStyled>
              <DetailItemStyled key={profile.location}>
                <strong>Location:</strong> {profile.location}
              </DetailItemStyled>
              <DetailItemStyled key={profile.languages}>
                <strong>Languages:</strong> {profile.languages.join(', ')}
              </DetailItemStyled>
            </DetailListStyled>
            <ContactButton />
          </section>
        )
      })}
    </section>
  )
}

const ContainerStyled = styled.section`
  background: var(--transparent-blue);
  height: 300px;
`

const ImageStyled = styled.img`
  width: 120px;
  height: 190px;
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
  padding: 10px 0 0 0;
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

InfluencerList.propTypes = {
  influencerData: PropTypes.array,
}
