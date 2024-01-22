import { useDispatch, useSelector } from 'react-redux'
import { Overlay, Container } from './styles'
import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Status } from '../../utils/enums/Status'

type Props = {
  children: JSX.Element
  status?: Status
}

const SideBar = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <Overlay onClick={closeCart} className={isOpen ? 'is-open' : ''}>
      <Container onClick={(e) => e.stopPropagation()}>{children}</Container>
    </Overlay>
  )
}

export default SideBar
