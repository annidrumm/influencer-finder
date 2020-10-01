import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as HeartIcon } from '../../icons/heart.svg'

export default function FavouritePage({ influencerData, onFavouriteClick }) {
  return (
    <section className="profiles">
      {influencerData?.map((profile) => {
        return (
          <WrapperStyled key={profile.id}>
            <ImageStyled src={profile.image} />
            <UsernameStyled>{profile.username}</UsernameStyled>
            <CategoriesStyled>{profile.categories.join(', ')}</CategoriesStyled>
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
            <ButtonWrapperStyled>
              <FavouriteButtonStyled
                id="like-button"
                onClick={() => onFavouriteClick(profile)}
                isFavourite={profile.isFavourite}
              >
                <HeartStyled id="like-button" fill={'var(--darkpink)'} />
              </FavouriteButtonStyled>
              <AnchorStyled href="mailto:influencer@gmail.com">
                <ButtonStyled id="contact-button">Contact</ButtonStyled>
              </AnchorStyled>
            </ButtonWrapperStyled>
          </WrapperStyled>
        )
      })}
    </section>
  )
}

const WrapperStyled = styled.section`
  border: 1px solid white;
  border-radius: 15px 50px;
  margin: 10px 20px 30px 20px;
`

const ButtonWrapperStyled = styled.section`
  text-align: center;
`

const FavouriteButtonStyled = styled.button`
  background: var(--lightpink);
  border-radius: 50%;
  text-align: center;
  border: none;
  stroke: #e693b5;
  cursor: pointer;
  height: 70px;
  width: 70px;
  margin: 20px;
`

const HeartStyled = styled(HeartIcon)``

const ButtonStyled = styled.button`
  color: var(--main-font-color);
  font-family: var(--font-weight-light);
  background: var(--darkgreen);
  border: var(--darkgreen);
  box-shadow: 0 3px 10px var(--boxshadow-color);
  font-size: 18px;
  border-radius: 40px;
  width: 120px;
  height: 75px;
  cursor: pointer;
  margin: 20px;
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
  list-style-type: none;
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
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

FavouritePage.propTypes = {
  influencerData: PropTypes.array,
}
