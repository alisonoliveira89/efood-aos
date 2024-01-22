import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

import * as S from './styles'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import SideBar from '../SideBar'
import { Status } from '../../utils/enums/Status'
import { changeStatus } from '../../store/reducers/status'

const Cart = () => {
  const { cart, status } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const setNextStatus = () => {
    const setStatus = Status.Delivery
    dispatch(changeStatus(setStatus))
  }

  return (
    <>
      {status.status === Status.Cart ? (
        <SideBar>
          <S.SideBar>
            <ul>
              {cart.items.map((item) => (
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
            {getTotalPrice(cart.items) <= 0 ? (
              <p>
                O carrinho está vazio, adicione um ou mais itens para continuar
                com a compra
              </p>
            ) : (
              <>
                <div>
                  <h4>Valor total</h4>
                  <h4>{parseToBrl(getTotalPrice(cart.items))}</h4>
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={setNextStatus}
                >
                  Continuar com a entrega
                </Button>
              </>
            )}
          </S.SideBar>
        </SideBar>
      ) : (
        <></>
      )}
    </>
  )
}

export default Cart
