import React from 'react'
import backIcon from '../../icons/back.svg'
import GoBackArrow from './GoBackArrow'

export default {
  title: 'Components/Button',
  component: GoBackArrow,
}

export const goBack = () => {
  return <img src={backIcon} alt="arrow left" />
}
