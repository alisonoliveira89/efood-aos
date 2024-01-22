import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/cart.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { changeStatus } from '../../store/reducers/status'

import { Status } from '../../utils/enums/Status'

export type Props = {
  header: 'home' | 'profile'
}

const Header = ({ header }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  //const { status } = useSelector((state: RootReducer) => state)

  const newStatus = Status.Cart

  const openCart = () => {
    dispatch(open())
    dispatch(changeStatus(newStatus))
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
              {items.length}
              <span> produto(s) no carrinho</span>
              <img src={cartIcon} alt="Cart" />
            </S.CartButton>
          </S.DivCart>
        </S.HProfile>
      )}
    </S.Container>
  )
}

export default Header
