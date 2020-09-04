import React from 'react'
import CategoryButtons from './CategoryButtons'
import backIcon from '../../icons/back.svg'

export default {
  title: 'Components/Button',
  component: CategoryButtons,
}

export const allCategories = () => {
  return <CategoryButtons />
}

export const goBack = () => {
  return <img src={backIcon} alt="arrow left" />
}
