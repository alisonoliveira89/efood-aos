import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  header: 'home' | 'profile'
}

const Header = ({ header }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Container header={header}>
      {header === 'home' ? (
        <div className="container">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo da eFood" />
          </Link>
          <S.Slogan>
            <S.Title>
              Viva experiências gastronômicas no conforto da sua casa
            </S.Title>
          </S.Slogan>
        </div>
      ) : (
        <S.HProfile className="container">
          <S.Text>Restaurantes</S.Text>
          <Link to="/">
            <S.Logo className="logo" src={logo} alt="Logo da eFood" />
          </Link>
          <S.DivCart>
            <S.CartButton onClick={openCart}>
              {items.length} produto(s) no carrinho
            </S.CartButton>
          </S.DivCart>
        </S.HProfile>
      )}
    </S.Container>
  )
}

export default Header
