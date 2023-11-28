import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  > img {
    max-width: 472px;
    width: 100%;
    height: 217px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      height: 178px;
    }
  }
`

export const Info = styled.div`
  padding: 0 8px 16px 8px;
  border-right: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};
  height: 181px;

  ${ButtonLink} {
    font-size: 14px;
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
  overflow: auto;
  max-height: 90px;
`
