import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Props } from '.'

export const Container = styled.header<Props>`
  height: ${(props) => (props.header === 'home' ? '384px' : '186px')};
  background-color: ${colors.salmon};
  text-align: center;
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    height: ${(props) => (props.header === 'home' ? '280px' : '186px')};
  }
`

export const Slogan = styled.div`
  max-width: 540px;
  margin: 0 auto;
  margin-top: 132px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 48px;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`
export const Logo = styled.img`
  position: absolute;
`

export const HProfile = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
  }
`
export const Text = styled.h3`
  margin-right: auto;
  margin-top: 82px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    margin-top: auto;
    margin-bottom: 8px;
  }
`
export const DivCart = styled.div`
  margin-left: auto;
  margin-top: 82px;
  max-width: 250px;
  width: 100%;
  text-align: end;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    margin-top: auto;
    margin-bottom: 8px;
  }
`
export const CartButton = styled.a`
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  cursor: pointer;
  color: ${colors.red};

  img {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    span {
      display: none;
      margin-right: 4px;
    }
    img {
      display: inline-flex;
      margin-left: 8px;
      margin-bottom: -4px;
    }
  }
`
