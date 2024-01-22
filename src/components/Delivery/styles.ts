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
`
export const Details = styled.div`
  color: ${colors.salmon};
  display: flex;
  flex-direction: column;

  h3 {
    color: ${colors.salmon};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  input {
    background: ${colors.salmon};
    border: none;
    height: 32px;
    flex-shrink: 0;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.blackGray};
    padding: 8px;

    &.error {
      border: 2px solid red;
    }
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 34px;
    input {
      width: 100%;
    }
  }
`
