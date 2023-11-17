import Food from '../../models/Food'
import Foods from '../Foods'
import { Container, List } from './styles'

type Props = {
  food: Food[]
}

const FoodsList = ({ food }: Props) => (
  <Container>
    <List>
      {food.map((food) => (
        <Foods
          key={food.id}
          title={food.title}
          description={food.description}
          image={food.image}
        />
      ))}
    </List>
  </Container>
)

export default FoodsList
