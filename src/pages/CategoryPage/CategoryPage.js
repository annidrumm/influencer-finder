import React from 'react'
import styled from 'styled-components/macro'
import Headline from '../../components/Headline/Headline'
import CategoryButton from '../../components/CategoryButton/CategoryButton'

export default function CategoryPage() {
  return (
    <ContainerStyled>
      <Headline headline="What categories are you looking for?" />
      <CategoryButton />
    </ContainerStyled>
  )
}

const ContainerStyled = styled.section`
  text-align: center;
`
