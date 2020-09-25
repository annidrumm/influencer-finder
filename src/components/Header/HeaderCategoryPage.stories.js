import React from 'react'
import HeaderCategoryPage from './HeaderCategoryPage'

export default {
  title: 'Components/Header',
  component: HeaderCategoryPage,
}

export const categories = () => {
  return <HeaderCategoryPage headline="Categories" />
}
