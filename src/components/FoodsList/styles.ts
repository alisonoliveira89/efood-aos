import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  margin-top: 56px;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

export const Overlay = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  &.is-visible {
    display: flex;
  }
`

export const Modal = styled.div`
  background-color: ${colors.red};
  padding: 32px;
  position: fixed;
  max-width: 1024px;
  width: 100%;
  height: 344px;
  display: flex;

  span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  display: flex;
  color: ${colors.white};

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    width: 656px;
    font-size: 14px;
    font-weight: 400;
    color: ${colors.white};
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 22px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 16px;
  }

  ${ButtonContainer} {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 26px;
    max-width: 220px;
    height: 24px;
  }
`
