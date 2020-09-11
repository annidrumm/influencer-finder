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
  height: 100px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`
const ImageStyled = styled.img`
  width: 90px;
  height: 110px;
  padding: 10px;
  border-radius: 50%;
`
