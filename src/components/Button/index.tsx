import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  children: string
  to?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

const Button = ({
  type,
  children,
  to,
  variant = 'primary',
  onClick
}: Props) => {
  if (type === 'button') {
    return (
      <>
        <ButtonContainer variant={variant} type={type} onClick={onClick}>
          {children}
        </ButtonContainer>
      </>
    )
  }

  return (
    <>
      <ButtonLink to={to as string}>{children}</ButtonLink>
    </>
  )
}

export default Button
