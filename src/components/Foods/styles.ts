import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.red};

  ${ButtonContainer} {
    padding: 0;
    height: 24px;
  }

  h3,
  p {
    color: ${colors.salmon};
    margin-top: 8px;
  }

  h3 {
    margin-top: 4px;
  }

  > img {
    max-width: 304px;
    width: 100%;
    height: 167px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 100%;
    }
  }

  p {
    @media (max-width: ${breakpoints.desktop}) {
      overflow-y: auto;
      height: 100px;
    }
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
