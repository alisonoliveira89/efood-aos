import bannerFood from '../../assets/images/la-dolce_banner.png'
import { Tipo, Imagem, Titulo } from './styles'

type Props = {
  tipo: string
  titulo: string
}

const Banner = ({ titulo, tipo }: Props) => (
  <Imagem style={{ backgroundImage: `url(${bannerFood})` }}>
    <div className="container">
      <Tipo>{tipo}</Tipo>
      <Titulo>{titulo}</Titulo>
    </div>
  </Imagem>
)

export default Banner
