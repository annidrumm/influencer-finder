import React from 'react'
import styled from 'styled-components'

export default function StartPage() {
  return (
    <>
      <Box1Styled></Box1Styled>
      <Box2Styled></Box2Styled>
      <Box3Styled></Box3Styled>
      <Box4Styled></Box4Styled>
      <Box5Styled></Box5Styled>
      <Box6Styled></Box6Styled>
      <Box7Styled></Box7Styled>
      <Box8Styled></Box8Styled>
      <Box9Styled></Box9Styled>
      <TextStyled>
        Browse through<br></br> thousands of<br></br> influencers and<br></br>{' '}
        find the one<br></br> that will fit just right.
      </TextStyled>
      <StartButtonStyled>Start</StartButtonStyled>
    </>
  )
}

const Box1Styled = styled.div`
  display: flex;
  border: 2px solid var(--darkgreen);
  background-color: var(--darkgreen);
  border-radius: 10px;
  width: 35vw;
  height: 13vh;
  margin: 1vh 0 1vh 1vh;
  padding: 25px 0;
  flex-direction: column;
  justify-content: space-evenly;
`

const Box2Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--lightpink);
  background-color: var(--lightpink);
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: 1vh 0 1vh 1vh;
  padding: 25px 0;
  /* flex-direction: column;
  justify-content: space-evenly; */
`
const Box3Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--darkyellow);
  background-color: var(--darkyellow);
  border-radius: 10px;
  width: 35vw;
  height: 13vh;
  margin: 1vh 0 1vh 1vh;
  padding: 25px 0;
  /* flex-direction: column;
  justify-content: space-evenly; */
`

const Box4Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--lightblue);
  background-color: var(--lightblue);
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: -42vh 0 0 25vh;
  padding: 25px 0;
  /* flex-direction: column;
  justify-content: space-evenly; */
`
const Box5Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--font-color-white);
  background-color: var(--font-color-white);
  border-radius: 10px;
  width: 35vw;
  height: 13vh;
  margin: -13vh 0 0 42vh;
  padding: 25px 0;
  /* flex-direction: column;
  justify-content: space-evenly; */
`
const Box6Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--lightpurple);
  background-color: var(--lightpurple);
  border-radius: 10px;
  width: 35vw;
  height: 13vh;
  margin: 1vh 0 1vh 18vh;
  padding: 25px 0px;
  /* flex-direction: column;
  justify-content: space-evenly; */
`
const Box7Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--lightpink);
  background-color: var(--lightpink);
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: -14vh 0 1vh 42vh;
  padding: 25px 0;
  /* flex-direction: column;
  justify-content: space-evenly; */
`

const Box8Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--lightpink);
  background-color: var(--lightpink);
  border-radius: 50px;
  width: 23vw;
  height: 13vh;
  margin: 1vh 0 1vh 25vh;
  padding: 25px 0;
  /* flex-direction: column;
  justify-content: space-evenly; */
`
const Box9Styled = styled.div`
  /* display: flex; */
  border: 2px solid var(--lightpurple);
  background-color: var(--lightpurple);
  border-radius: 10px;
  width: 35vw;
  height: 13vh;
  margin: -14vh 0 1vh 43vh;
  padding: 25px 0px;
  /* flex-direction: column;
  justify-content: space-evenly; */
`

const StartButtonStyled = styled.button`
  color: var(--font-color-white);
  font-family: var(--font-weight-light);
  background: var(--darkgreen);
  border: var(--darkgreen);
  box-shadow: 0 3px 10px #0000008b;
  border-radius: 30px;
  font-size: 15px;
  padding: 25px 35px;
  text-align: center;
  display: block;
  margin: auto;
  border: none;
  margin: 10vh 0 1vh 20vh;
  cursor: pointer;
`

const TextStyled = styled.p`
  color: var(--font-color-white);
  font-family: var(--font-weight-regular);
  font-size: 25px;
  text-align: center;
`
