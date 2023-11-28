import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: restaurant } = useGetRestaurantsQuery()

  if (!restaurant) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Header header="home" />
      <div className="container">
        <RestaurantsList restaurant={restaurant} />
      </div>
    </>
  )
}

export default Home
