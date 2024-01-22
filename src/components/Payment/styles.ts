import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const SideBar = styled.aside`
  background-color: ${colors.red};
  width: 100%;
  padding: 32px 8px 32px 8px;
  overflow-x: auto;

  ${ButtonContainer} {
    font-size: 14px;
    font-weight: 700;
    height: 24px;
    padding: 0;
  }

  .groupButtons {
    margin-top: 16px;
  }

  #cardNumber {
    width: 228px;
  }

  h3 {
    margin-bottom: 16px;
  }

  p {
    color: ${colors.salmon};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }
`
