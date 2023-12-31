import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }

  > img {
    max-width: 472px;
    width: 100%;
    height: 217px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 100%;
      height: 178px;
    }
  }
`

export const Info = styled.div`
  padding: 8px 8px 12px 8px;
  border-right: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};
  margin-top: -4px;

  ${ButtonLink} {
    font-size: 14px;
    font-weight: 700;
  }
`
export const TagInfo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Points = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-right: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
    font-weight: 700;
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 20px;
  margin-top: 16px;
  @media (max-width: ${breakpoints.desktop}) {
    overflow-y: auto;
    height: 100px;
  }
`
