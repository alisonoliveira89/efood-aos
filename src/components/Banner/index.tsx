import bannerFood from '../../assets/images/la-dolce_banner.png'
import { Categoria, Imagem, Titulo } from './styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerFood})` }}>
    <div className="container">
      <Categoria>Italiana</Categoria>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner
