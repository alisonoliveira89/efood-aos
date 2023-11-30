import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px;
    width: 90%;
    height: auto;
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
    max-width: 656px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: ${colors.white};
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 22px;
    @media (max-width: ${breakpoints.tablet}) {
      overflow-y: auto;
      height: 100px;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      height: 180px;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0;
    }
  }

  ${ButtonContainer} {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 26px;
    max-width: 220px;
    height: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
