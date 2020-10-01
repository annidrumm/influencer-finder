import React from 'react'
import styled from 'styled-components'

export default {
  title: 'Design/Fonts',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const fonts = () => {
  return (
    <>
      <FontColumn font="semi">font-weight-semibold</FontColumn>
      <FontColumn font="semi">600</FontColumn>
      <FontColumn font="regular">font-weight-regular</FontColumn>
      <FontColumn font="regular">400</FontColumn>
      <FontColumn font="light">font-weight-light</FontColumn>
      <FontColumn font="light">300</FontColumn>
    </>
  )
}

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
