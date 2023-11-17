import Button from '../Button'
import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Foods = ({ title, description, image }: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <div>
      <S.Title className="profile">{title}</S.Title>
      <S.Text className="profile">{description}</S.Text>
      <Button type="button" variant="secondary">
        Adicionar ao carrinho
      </Button>
    </div>
  </S.Card>
)

export default Foods
