import React from 'react'
import styled from 'styled-components/macro'

export default function EntryList({ influencerData }) {
  return (
    <ContainerStyled>
      <Headline>Search</Headline>
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
  text-align: center;
`

const Headline = styled.h1`
  font-family: 'Poppins';
  font-weight: 400;
`

const Container = styled.section`
  background: #ffffff1a;
  height: 400px;
  width: 400px;
`
const Username = styled.h2`
  padding: 250px 0 0 0;
  font-family: 'Poppins';
  font-weight: 600;
`
const Categories = styled.h3`
  font-family: 'Poppins';
  font-weight: 300;
`

const DetailList = styled.ul`
  text-align: left;
  padding: 48px 60px 300px 90px;
  list-style-type: none;
  font-family: 'Poppins';
  font-weight: 300;
`
const DetailItem = styled.li`
  margin: 10px 0;
`
