import React from 'react'
import styled from 'styled-components/macro'
import forkIcon from '../../icons/fork.svg'
import gymIcon from '../../icons/gym.svg'
import beautyIcon from '../../icons/beauty.svg'
import fashionIcon from '../../icons/mannequin.svg'
import InteriorIcon from '../../icons/vase.svg'
import travelIcon from '../../icons/plane.svg'
import { useHistory } from 'react-router-dom'

export default function CategoryButton() {
  const history = useHistory()

  const routeChange = () => {
    let path = `InfluencerList`
    history.push(path)
  }

  return (
    <ContainerStyled>
      <section>
        <ButtonStyled category="food" onClick={routeChange}>
          <IconsStyled src={forkIcon} alt="fork and spoon" />
          <ButtonTextStyled>Food</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled category="fitness" onClick={routeChange}>
          <IconsStyled src={gymIcon} alt="dumbbell" />
          <ButtonTextStyled>Fitness</ButtonTextStyled>
        </ButtonStyled>
      </section>
      <section>
        <ButtonStyled category="beauty" onClick={routeChange}>
          <img src={beautyIcon} alt="lipsticks" />
          <ButtonTextStyled>Beauty</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled category="fashion" onClick={routeChange}>
          <img src={fashionIcon} alt="fashion mannequin" />
          <ButtonTextStyled>Fashion</ButtonTextStyled>
        </ButtonStyled>
      </section>
      <section>
        <ButtonStyled category="interior" onClick={routeChange}>
          <img src={InteriorIcon} alt="interior vase" />
          <ButtonTextStyled>Interior</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled category="travel" onClick={routeChange}>
          <img src={travelIcon} alt="plane" />
          <ButtonTextStyled>Travel</ButtonTextStyled>
        </ButtonStyled>
      </section>
    </ContainerStyled>
  )
}

const ContainerStyled = styled.section`
  margin-top: 70px;
`

const ButtonStyled = styled.button`
  width: 128px;
  height: 101px;
  background: transparent;
  margin: 10px;
  border-radius: 10%;
  cursor: pointer;
  border-color: ${({ category }) =>
    category === 'food'
      ? 'var(--darkyellow)'
      : category === 'fitness'
      ? 'var(--lightpink)'
      : category === 'beauty'
      ? 'var(--lightgreen)'
      : category === 'fashion'
      ? 'var(--lightblue)'
      : category === 'interior'
      ? 'var(--lightpurple)'
      : 'var(--darkyellow)'};
`
const IconsStyled = styled.img`
  margin-top: 15px;
  vertical-align: top;
`

const ButtonTextStyled = styled.h2`
  color: var(--font-color-white);
  font-size: 20px;
  font-weight: var(--font-weight-light);
  vertical-align: bottom;
  margin-bottom: 7px;
  margin-top: 3px;
`
