import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  children: string
  to?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ type, children, to, variant = 'primary' }: Props) => {
  if (type === 'button') {
    return (
      <>
        <ButtonContainer variant={variant} type={type}>
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
