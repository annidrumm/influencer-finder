import React from 'react'
import styled from 'styled-components/macro'
import forkIcon from '../../icons/fork.svg'
import gymIcon from '../../icons/gym.svg'
import beautyIcon from '../../icons/beauty.svg'
import fashionIcon from '../../icons/mannequin.svg'
import InteriorIcon from '../../icons/vase.svg'
import travelIcon from '../../icons/plane.svg'
import { useHistory } from 'react-router-dom'

export default function CategoryPage() {
  const history = useHistory()

  const routeChange = () => {
    let path = `InfluencerList`
    history.push(path)
  }

  return (
    <ContainerStyled>
      <HeadlineStyled>
        What category are<br></br> you looking for?
      </HeadlineStyled>
      <section>
        <ButtonStyled category="food" onClick={routeChange}>
          <IconsStyled src={forkIcon} alt="" />
          <ButtonTextStyled>Food</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled category="fitness" onClick={routeChange}>
          <IconsStyled src={gymIcon} alt="" />
          <ButtonTextStyled>Fitness</ButtonTextStyled>
        </ButtonStyled>
      </section>
      <section>
        <ButtonStyled category="beauty" onClick={routeChange}>
          <img src={beautyIcon} alt="" />
          <ButtonTextStyled>Beauty</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled category="fashion" onClick={routeChange}>
          <img src={fashionIcon} alt="" />
          <ButtonTextStyled>Fashion</ButtonTextStyled>
        </ButtonStyled>
      </section>
      <section>
        <ButtonStyled category="interior" onClick={routeChange}>
          <img src={InteriorIcon} alt="" />
          <ButtonTextStyled>Interior</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled category="travel" onClick={routeChange}>
          <img src={travelIcon} alt="" />
          <ButtonTextStyled>Travel</ButtonTextStyled>
        </ButtonStyled>
      </section>
    </ContainerStyled>
  )
}

const ContainerStyled = styled.section`
  text-align: center;
`

const HeadlineStyled = styled.h1`
  font: var(--font-weight-regular);
  font-size: 35px;
`
const ButtonStyled = styled.button`
  width: 128px;
  height: 101px;
  background: transparent;
  margin: 10px;
  border-radius: 10%;

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
