import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import FavouriteButton from '../../components/FavouriteButton/FavouriteButton.js'
import Button from '../../components/Button/Button.js'

export default function InfluencerList({ influencerData, onFavouriteClick }) {
  return (
    <WrapperStyled className="profiles">
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
            <AnchorStyled href="mailto:influencer@gmail.com">
              <Button id="contact-button" headline="Contact" />
            </AnchorStyled>
          </section>
        )
      })}
    </WrapperStyled>
  )
}

const WrapperStyled = styled.section`
  margin: 0px auto;
  max-width: 400px;
`

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
  font-size: 20px;
  text-align: center;
  padding: 10px 0 0 0;
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
const AnchorStyled = styled.a`
  text-decoration: none;
`

InfluencerList.propTypes = {
  influencerData: PropTypes.array,
}
