import star from '../../assets/images/estrela.svg'
import Button from '../Button'
import { TagContainer } from '../Tag/styles'
import * as S from './styles'

type Props = {
  title: string
  points: number
  description: string
  image: string
  infos: string[]
  id: number
}

const Restaurants = ({
  title,
  points,
  description,
  image,
  infos,
  id
}: Props) => {
  // const getDescription = (text: string) => {
  //   if (text.length > 349) {
  //     return text.slice(0, 246) + '...'
  //   }
  //   return text
  // }

  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.TagInfo>
        {infos.map((info) => (
          <TagContainer key={info}>{info}</TagContainer>
        ))}
      </S.TagInfo>
      <S.Info>
        <S.Points>
          <S.Title>{title}</S.Title>
          <S.Points>
            <S.Title>{points}</S.Title>
            <img src={star} alt="Estrela" />
          </S.Points>
        </S.Points>
        <S.Description>{description}</S.Description>
        <Button type="link" to={`/profile/${id}`}>
          Saiba mais
        </Button>
      </S.Info>
    </S.Card>
  )
}

export default Restaurants
