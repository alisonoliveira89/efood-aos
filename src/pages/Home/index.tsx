import { useEffect, useState } from 'react'
import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: FoodMenu[]
}

export type FoodMenu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurantes, SetRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => SetRestaurantes(res))
  }, [])

  return (
    <>
      <Header header="home" />
      <div className="container">
        <RestaurantsList restaurant={restaurantes} />
      </div>
    </>
  )
}

export default Home
