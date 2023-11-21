import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const Tipo = styled.h2`
  position: relative;
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
`
export const Titulo = styled.h1`
  position: relative;
  color: ${colors.white};
  font-size: 32px;
  font-weight: bold;
  margin-top: 156px;
`
