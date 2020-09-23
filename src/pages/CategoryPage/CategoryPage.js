import React from 'react'
import styled from 'styled-components/macro'
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons'
import HeaderCategoryPage from '../../components/Header/HeaderCategoryPage'

export default function CategoryPage() {
  return (
    <ContainerStyled>
      <HeaderCategoryPage headline="Categories" />
      <CategoryButtons />
    </ContainerStyled>
  )
}

const ContainerStyled = styled.section`
  text-align: center;
  margin: 30px;
`
