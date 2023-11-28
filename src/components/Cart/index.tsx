import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <S.Overlay onClick={closeCart} className={isOpen ? 'is-open' : ''}>
        <S.CartContainer onClick={(e) => e.stopPropagation()}>
          <S.SideBar>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{parseToBrl(item.preco)}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <div>
              <h4>Valor total</h4>
              <h4>{parseToBrl(getTotalPrice())}</h4>
            </div>
            <Button type="button" variant="secondary">
              Continuar com a entrega
            </Button>
          </S.SideBar>
        </S.CartContainer>
      </S.Overlay>
    </>
  )
}

export default Cart
