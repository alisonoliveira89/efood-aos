import { useEffect, useState } from 'react'
import Foods from '../Foods'
import { Container, List, Modal, ModalContent, Overlay } from './styles'

import { useDispatch } from 'react-redux'
import closeImg from '../../assets/images/close.png'
import Button from '../Button'
import { FoodMenu, Restaurant } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  food: Restaurant
}

const FoodsList = ({ food }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [foodSelect, setFoodSelect] = useState<FoodMenu>()
  const dispatch = useDispatch()

  const openModal = (item: FoodMenu) => {
    setIsOpen(true)
    setFoodSelect(item)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const addToCart = () => {
    if (foodSelect) {
      dispatch(add(foodSelect))
      closeModal()
      dispatch(open())
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalContent = document.getElementById('modal-content')

      if (modalContent && !modalContent.contains(event.target as Node)) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <>
      <Container>
        <List>
          {food.cardapio.map((foods) => (
            <Foods
              key={foods.id}
              title={foods.nome}
              description={foods.descricao}
              image={foods.foto}
              onClick={() => openModal(foods)}
            />
          ))}
        </List>
      </Container>
      <Overlay className={isOpen ? 'is-visible' : ''}>
        <Modal id="modal-content">
          <span>
            <img
              src={closeImg}
              alt="Ícone de fechar"
              onClick={closeModal}
            ></img>
          </span>
          <ModalContent>
            <img src={foodSelect?.foto} alt="Imagem da comida"></img>
            <div className="infos">
              <h4>{foodSelect?.nome}</h4>
              <p>
                {foodSelect?.descricao}
                <br></br>
                <br></br> {foodSelect?.porcao}
              </p>
              <Button type="button" variant="secondary" onClick={addToCart}>
                {`Adicionar ao carrinho - ` + parseToBrl(foodSelect?.preco)}
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </Overlay>
    </>
  )
}

export default FoodsList
