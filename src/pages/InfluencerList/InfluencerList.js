import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Headline from '../../components/Headline/Headline'
import backIcon from '../../icons/back.svg'
import { useHistory } from 'react-router-dom'

export default function InfluencerList({ influencerData }) {
  const history = useHistory()
  const routeChange = () => {
    let path = `/`
    history.push(path)
  }

  return (
    <section className="profiles">
      <GoBackStyled src={backIcon} alt="arrow left" onClick={routeChange} />
      <Headline headline="Search" />
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
  background: var(--transparent-blue);
  height: 200px;
  width: 100%;
`
const GoBackStyled = styled.img`
  position: absolute;
  left: 30px;
  margin-top: 10px;
  cursor: pointer;
`

const UsernameStyled = styled.h2`
  font-family: 'Poppins';
  font-weight: var(--font-weight-semibold);
  line-height: 100px;
  text-align: center;
`
const CategoriesStyled = styled.h3`
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
  text-align: center;
`

const DetailListStyled = styled.ul`
  text-align: left;
  list-style-type: none;
  font-family: 'Poppins';
  font-weight: var(--font-weight-light);
  width: 100%;
  margin: 50px;
`
const DetailItemStyled = styled.li`
  letter-spacing: 1px;
  margin: 10px 0;
  position: relative;
`

InfluencerList.propTypes = {
  influencerData: PropTypes.array,
}
