import React from 'react'
import styled from 'styled-components/macro'
import fork from '../../icons/fork.svg'
import dumbbell from '../../icons/gym.svg'
import lipsticks from '../../icons/beauty.svg'
import mannequin from '../../icons/mannequin.svg'
import vase from '../../icons/vase.svg'
import plane from '../../icons/plane.svg'
import { Switch, Route, Link } from 'react-router-dom'

export default function CategoryButtons() {
  return (
    <SectionStyled>
      <Switch>
        <ContainerStyled>
          <section>
            <Route>
              <Link to="/food">
                <ButtonStyled category="food">
                  <IconsStyled src={fork} alt="fork and spoon" />
                  <H2Styled>Food</H2Styled>
                </ButtonStyled>
              </Link>
            </Route>
            <Route>
              <Link to="/fitness">
                <ButtonStyled category="fitness">
                  <IconsStyled src={dumbbell} alt="dumbbell" />
                  <H2Styled>Fitness</H2Styled>
                </ButtonStyled>
              </Link>
            </Route>
          </section>
          <section>
            <Route>
              <Link to="/beauty">
                <ButtonStyled category="beauty">
                  <img src={lipsticks} alt="lipsticks" />
                  <H2Styled>Beauty</H2Styled>
                </ButtonStyled>
              </Link>
            </Route>
            <Route>
              <Link to="/fashion">
                <ButtonStyled category="fashion">
                  <img src={mannequin} alt="fashion mannequin" />
                  <H2Styled>Fashion</H2Styled>
                </ButtonStyled>
              </Link>
            </Route>
          </section>
          <section>
            <Route>
              <Link to="/interior">
                <ButtonStyled category="interior">
                  <img src={vase} alt="vase" />
                  <H2Styled>Interior</H2Styled>
                </ButtonStyled>
              </Link>
            </Route>
            <Route>
              <Link to="/travel">
                <ButtonStyled category="travel">
                  <img src={plane} alt="plane" />
                  <H2Styled>Travel</H2Styled>
                </ButtonStyled>
              </Link>
            </Route>
          </section>
        </ContainerStyled>
      </Switch>
    </SectionStyled>
  )
}

const ContainerStyled = styled.section`
  margin-top: 80px;
`

const SectionStyled = styled.section`
  text-align: center;
  margin: 20px;
`

const ButtonStyled = styled.button`
  width: 130px;
  height: 130px;
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
  margin: 10px 0;
  vertical-align: top;
`

const H2Styled = styled.h2`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: var(--font-weight-light);
  vertical-align: bottom;
  margin-bottom: 7px;
  margin-top: 3px;
`
