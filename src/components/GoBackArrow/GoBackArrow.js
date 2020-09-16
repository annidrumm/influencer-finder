import React from 'react'
import backIcon from '../../icons/back.svg'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function GoBackArrow() {
  const history = useHistory()
  function goBack() {
    history.goBack()
  }
  return <GoBackStyled src={backIcon} alt="arrow left" onClick={goBack} />
}

const GoBackStyled = styled.img`
  position: absolute;
  left: 30px;
  margin-top: 10px;
  cursor: pointer;
`
