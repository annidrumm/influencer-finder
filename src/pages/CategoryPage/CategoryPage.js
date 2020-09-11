import React from 'react'
import styled from 'styled-components/macro'
import Headline from '../../components/Headline/Headline'
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons'
import profile1 from '../../images/nico-marks-min.jpg'
import profile2 from '../../images/fezbot2000-min.jpg'
import profile3 from '../../images/any-haust-min.jpg'
import profile4 from '../../images/ian-dooleyw-min.jpg'
import profile5 from '../../images/svyatoslav-romanov-min.jpg'

export default function CategoryPage() {
  return (
    <>
      <ContainerStyled>
        <Headline headline="What categories are you looking for?" />
        <CategoryButtons />
      </ContainerStyled>
      <SlideStyled>
        <ImageStyled src={profile1} />
        <ImageStyled src={profile2} />
        <ImageStyled src={profile3} />
        <ImageStyled src={profile4} />
        <ImageStyled src={profile5} />
      </SlideStyled>
    </>
  )
}

const ContainerStyled = styled.section`
  text-align: center;
`

const SlideStyled = styled.section`
  background: var(--transparent-blue);
  height: 110px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  @media (min-width: 1170px) {
    height: 100px;
  }
`
const ImageStyled = styled.img`
  width: 80px;
  height: 100px;
  padding: 15px;
  border-radius: 50%;
  margin: 0 10px 10px 10px;

  @media (min-width: 400px) {
    width: 100px;
    height: 120px;
    border-radius: 50%;
    margin: 0 10px 10px 30px;
  }
  @media (min-width: 650px) {
    width: 100px;
    height: 120px;
    border-radius: 50%;
    margin: 0 10px 20px 50px;
  }
  @media (min-width: 800px) {
    width: 100px;
    height: 120px;
    border-radius: 50%;
    margin: 0 10px 20px 100px;
  }
  @media (min-width: 800px) {
    width: 100px;
    height: 120px;
    border-radius: 50%;
    margin: 0 10px 20px 100px;
  }
  @media (min-width: 1170px) {
    width: 110px;
    height: 130px;
    border-radius: 50%;
    margin: 0 100px 100px 100px;
  }
`
