import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.red : colors.salmon};
  color: ${(props) =>
    props.variant === 'primary' ? colors.salmon : colors.red};
  padding: 4px 6px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.red : colors.salmon)};
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.salmon};
  font-size: 14px;
  padding: 4px 6px;
  border: 2px solid ${colors.red};
  text-decoration: none;
`
