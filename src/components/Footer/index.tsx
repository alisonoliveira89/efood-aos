import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <S.Container>
    <img className="logo" src={logo} alt="Logo eFood" />
    <S.Media>
      <li>
        <a href="">
          <img src={instagram} alt="Lodo do Instagram" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={facebook} alt="Lodo do Facebook" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={twitter} alt="Lodo do Twitter" />
        </a>
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
