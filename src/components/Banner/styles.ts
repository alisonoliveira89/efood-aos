import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Tipo = styled.h2`
  position: relative;
  color: ${colors.white};
  margin-top: 24px;
  font-size: 32px;
  font-weight: 100;
`
export const Titulo = styled.h1`
  position: relative;
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 32px;
`
