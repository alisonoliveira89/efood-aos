import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.salmon};
  height: 298px;
  text-align: center;
`

export const Media = styled.ul`
  display: flex;
  justify-content: space-evenly;
  max-width: 125px;
  margin: 32px auto;
  margin-bottom: 80px;
`

export const Info = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 10px;
`
