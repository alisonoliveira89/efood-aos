import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const Container = styled.header<Props>`
  height: ${(props) => (props.header === 'home' ? '384px' : '186px')};
  background-color: ${colors.salmon};
  text-align: center;
`

export const Slogan = styled.div`
  max-width: 540px;
  margin: 0 auto;
  margin-top: 140px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
`
export const Logo = styled.img`
  position: absolute;
`

export const HProfile = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  height: 100%;
  //max-width: 1024px;
  //width: 100%;
  position: relative;
`
export const Text = styled.h3`
  margin-right: auto;
  margin-top: 82px;
`
export const Cart = styled.h3`
  margin-left: auto;
  margin-top: 82px;
`
