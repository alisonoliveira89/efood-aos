import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.salmon};
  height: 298px;
  text-align: center;

  > img {
    margin-top: 40px;
  }
`

export const Media = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  height: 24px;
  margin: 28px auto;
  margin-bottom: 80px;
`

export const Info = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
`
