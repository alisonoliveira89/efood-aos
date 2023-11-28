import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.red};

  .profile {
    color: ${colors.salmon};
    margin-top: 8px;
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
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`
export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  overflow: auto;
  max-height: 90px;
`
