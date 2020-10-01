import React from 'react'
import styled from 'styled-components'

export default {
  title: 'Design/Colors',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const darkColors = () => {
  return (
    <>
      <ColorExample name="main-font-color" hex="#FFFFFF" />
      <ColorExample name="background-darkblue" hex="#1c114e" />
      <ColorExample name="darkgreen" hex="#51B6AB" />
      <ColorExample name="darkyellow" hex="#F7BF67" />
      <ColorExample name="darkpink" hex="#E693B5" />
    </>
  )
}

export const lightColors = () => {
  return (
    <>
      <ColorExample name="transparent-blue" hex="#ffffff1a" />
      <ColorExample name="lightblue" hex="#66BAF7" />
      <ColorExample name="lightpurple" hex="#A6A1F9" />
      <ColorExample name="lightpink" hex="#F9D9DA" />
    </>
  )
}

function ColorExample({ name, hex }) {
  return (
    <CenterColumn>
      <ColorBox name={name} />
      <p>{name}</p>
      <p>{hex}</p>
    </CenterColumn>
  )
}

const CenterColumn = styled.section`
  display: grid;
  place-items: center;
  p {
    margin: 10px;
  }
`

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid white;
  background-color: ${(props) => 'var(--' + props.name + ')'};
`
