import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.red};

  .profile {
    color: ${colors.salmon};
    margin-top: 8px;
  }
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`
export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
