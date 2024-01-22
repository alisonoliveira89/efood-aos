import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 320px;
  }
`
