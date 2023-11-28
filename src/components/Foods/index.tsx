import Button from '../Button'
import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const Foods = ({ title, description, image, onClick }: Props) => {
  // const getDescription = (text: string) => {
  //   if (text.length > 166) {
  //     return text.slice(0, 163) + '...'
  //   }
  //   return text
  // }

  return (
    <>
      <S.Card>
        <img src={image} alt={title} />
        <div>
          <S.Title className="profile">{title}</S.Title>
          <S.Text className="profile">{description}</S.Text>
          <Button type="button" variant="secondary" onClick={onClick}>
            Mais detalhes
          </Button>
        </div>
      </S.Card>
    </>
  )
}

export default Foods
