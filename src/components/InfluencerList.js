import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function InfluencerList({ influencerData }) {
  return (
    <ContainerStyled>
      <section className="posts">
        {influencerData.map((post) => {
          return (
            <section key={post.id}>
              <Container>
                <Username>{post.username}</Username>
                <Categories>{post.categories}</Categories>
              </Container>
              <DetailList>
                <DetailItem key={post.username}>
                  Follower: {post.follower}
                </DetailItem>
                <DetailItem key={post.gender}>Gener: {post.gender}</DetailItem>
                <DetailItem key={post.age}>Age: {post.age}</DetailItem>
                <DetailItem key={post.location}>
                  Location: {post.location}
                </DetailItem>
                <DetailItem key={post.languages}>
                  Languages: {post.languages}{' '}
                </DetailItem>
              </DetailList>
            </section>
          )
        })}
      </section>
    </ContainerStyled>
  )
}

const ContainerStyled = styled.section`
  width: 400px;
`

const Container = styled.section`
  background: #ffffff1a;
  height: 200px;
  width: 400px;
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
`
const DetailItem = styled.li`
  margin: 10px 0;
`

InfluencerList.propTypes = {
  influencerData: PropTypes.array,
}
