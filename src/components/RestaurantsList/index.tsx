import { Restaurant } from '../../pages/Home'
import Restaurants from '../Restaurants'
import { Container, List } from './styles'

type Props = {
  restaurant: Restaurant[]
}

const RestaurantsList = ({ restaurant }: Props) => (
  <Container>
    <List>
      {restaurant.map((restaurant) => (
        <Restaurants
          key={restaurant.id}
          title={restaurant.titulo}
          points={restaurant.avaliacao}
          image={restaurant.capa}
          description={restaurant.descricao}
          infos={
            restaurant.destacado
              ? ['Destaque da semana', restaurant.tipo]
              : [restaurant.tipo]
          }
          id={restaurant.id}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
