import React from 'react'
import styled from 'styled-components/macro'
import Headline from '../../components/Headline/Headline'
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons'

export default function CategoryPage() {
  return (
    <ContainerStyled>
      <Headline headline="What categories are you looking for?" />
      <CategoryButtons />
    </ContainerStyled>
  )
}

const ContainerStyled = styled.section`
  text-align: center;
`
