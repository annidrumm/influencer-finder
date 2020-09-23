import React from 'react'
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons'
import HeaderCategoryPage from '../../components/Header/HeaderCategoryPage'

export default function CategoryPage() {
  return (
    <section>
      <HeaderCategoryPage headline="Categories" />
      <CategoryButtons />
    </section>
  )
}
