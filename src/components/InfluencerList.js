import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function InfluencerList({ influencerData }) {
  return (
    <section className="profiles">
      {influencerData.map((profile) => {
        return (
          <section key={profile.id}>
            <Container>
              <Username>{profile.username}</Username>
              <Categories>{profile.categories}</Categories>
            </Container>
            <DetailList>
              <DetailItem key={profile.username}>
                Follower: {profile.follower}
              </DetailItem>
              <DetailItem key={profile.gender}>
                Gener: {profile.gender}
              </DetailItem>
              <DetailItem key={profile.age}>Age: {profile.age}</DetailItem>
              <DetailItem key={profile.location}>
                Location: {profile.location}
              </DetailItem>
              <DetailItem key={profile.languages}>
                Languages: {profile.languages}{' '}
              </DetailItem>
            </DetailList>
          </section>
        )
      })}
    </section>
  )
}

const Container = styled.section`
  background: #ffffff1a;
  height: 200px;
  width: 100%;
`
const Username = styled.h2`
  font-family: 'Poppins';
  font-weight: 600;
  line-height: 100px;
  text-align: center;
`
const Categories = styled.h3`
  font-family: 'Poppins';
  font-weight: 300;
  text-align: center;
`

const DetailList = styled.ul`
  text-align: left;
  list-style-type: none;
  font-family: 'Poppins';
  font-weight: 300;
  width: 100%;
`
const DetailItem = styled.li`
  margin: 10px 0;
  position: relative;
  left: 40px;
`

InfluencerList.propTypes = {
  influencerData: PropTypes.array,
}
