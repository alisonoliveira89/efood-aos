import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.Container>
    <img className="logo" src={logo} alt="Logo eFood" />
    <S.Media>
      <li>
        <Link to="">
          <img src={instagram} alt="Lodo do Instagram" />
        </Link>
      </li>
      <li>
        <Link to="">
          <img src={facebook} alt="Lodo do Facebook" />
        </Link>
      </li>
      <li>
        <Link to="">
          <img src={twitter} alt="Lodo do Twitter" />
        </Link>
      </li>
    </S.Media>
    <S.Info>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.Info>
  </S.Container>
)

export default Footer
