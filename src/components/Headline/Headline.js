import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import backIcon from '../../icons/back.svg'
import { useHistory } from 'react-router-dom'

Headline.propTypes = {
  headline: PropTypes.string,
}

export default function Headline({ headline }) {
  const history = useHistory()
  const routeChange = () => {
    let path = `/`
    history.push(path)
  }

  return (
    <HeaderStyled>
      <GoBackStyled src={backIcon} alt="arrow left" onClick={routeChange} />
      <HeadlineStyled>{headline}</HeadlineStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.section`
  display: flex;
  grid-column: 1/3;
  margin: 20px 0;
  text-align: center;
`

const HeadlineStyled = styled.h1`
  display: inline;
  position: relative;
  font: var(--font-weight-regular);
  font-size: 25px;
  padding-bottom: 5px;
  margin: auto;
  max-width: 300px;
`

const GoBackStyled = styled.img`
  position: absolute;
  left: 30px;
  margin-top: 10px;
  cursor: pointer;
`
