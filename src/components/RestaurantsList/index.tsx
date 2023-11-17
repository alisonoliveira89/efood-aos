import Restaurants from '../Restaurants'
import { Container, List } from './styles'

import Restaurant from '../../models/Restaurant'

type Props = {
  restaurant: Restaurant[]
}

const RestaurantsList = ({ restaurant }: Props) => (
  <Container>
    <List>
      {restaurant.map((restaurant) => (
        <Restaurants
          key={restaurant.id}
          title={restaurant.title}
          points={restaurant.points}
          image={restaurant.image}
          description={restaurant.description}
          infos={restaurant.infos}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
