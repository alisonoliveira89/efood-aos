import styled from 'styled-components'
import { colors } from '../../styles'
import trashImg from '../../assets/images/trash.png'
import { ButtonContainer } from '../Button/styles'

export const SideBar = styled.aside`
  background-color: ${colors.red};
  width: 100%;
  padding: 32px 8px 32px 8px;
  overflow-x: auto;

  > div,
  p {
    display: flex;
    justify-content: space-between;
    color: ${colors.salmon};
    padding-top: 24px;
    padding-bottom: 8px;
    font-size: 14px;
  }

  ${ButtonContainer} {
    font-size: 14px;
    font-weight: 700;
    height: 24px;
    padding: 0;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.salmon};
  padding: 8px 0 12px 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;
  }

  h4 {
    font-size: 18px;
    color: ${colors.red};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${trashImg});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
