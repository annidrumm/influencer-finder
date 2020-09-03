import React from 'react'
import CategoryButton from './CategoryButton'
import backIcon from '../../icons/back.svg'

export default {
  title: 'Components/Button',
  component: CategoryButton,
}

export const allCategories = () => {
  return <CategoryButton />
}

export const goBack = () => {
  return <img src={backIcon} alt="arrow left" />
}
