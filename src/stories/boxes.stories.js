import React from 'react'
import styled from 'styled-components'

export default {
  title: 'Design/Shapes',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const rectangles = () => {
  return (
    <WrapperStyled>
      <BoxStyled name="large-box" box="large"></BoxStyled>
      <FontColumn font="light">large-box</FontColumn>
      <FontColumn font="light">130x90px</FontColumn>
      <BoxStyled name="medium-box" box="medium"></BoxStyled>
      <FontColumn font="light">medium-box</FontColumn>
      <FontColumn font="light">120x90px</FontColumn>
      <BoxStyled name="small-box" box="small"></BoxStyled>
      <FontColumn font="light">small-box</FontColumn>
      <FontColumn font="light">100x90px</FontColumn>
    </WrapperStyled>
  )
}

export const circles = () => {
  return (
    <WrapperStyled>
      <CircleStyled name="yellow-circle"></CircleStyled>
      <FontColumn font="light">image-circle</FontColumn>
      <FontColumn font="light">100x100px</FontColumn>
      <CircleStyled name="lightblue-circle"></CircleStyled>
      <FontColumn font="light">image-circle</FontColumn>
      <FontColumn font="light">100x100px</FontColumn>
      <CircleStyled name="lightpink-circle"></CircleStyled>
      <FontColumn font="light">image-circle</FontColumn>
      <FontColumn font="light">100x100px</FontColumn>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.section`
  display: grid;
  place-items: center;
`

const FontColumn = styled.section`
  display: grid;
  place-items: center;
  margin: 10px;
  font-weight: ${({ font }) =>
    font === 'semi'
      ? 'var(--font-weight-semibold)'
      : font === 'regular'
      ? 'var(--font-weight-regular)'
      : 'var(--font-weight-light)'};
`

const BoxStyled = styled.section`
  border-radius: 10px;
  margin: 10px;
  height: 90px;
  width: ${({ box }) =>
    box === 'large' ? '130px' : box === 'medium' ? '120px' : '100px'};
  background-color: ${({ box }) =>
    box === 'large'
      ? 'var(--darkyellow)'
      : box === 'medium'
      ? 'var(--lightblue)'
      : 'var(--lightpink)'};
`

const CircleStyled = styled.section`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin: 6px;
  background-color: ${({ name }) =>
    name === 'yellow-circle'
      ? 'var(--darkyellow)'
      : name === 'lightblue-circle'
      ? 'var(--lightblue)'
      : 'var(--lightpink)'};
`
