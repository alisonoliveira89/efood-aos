import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export type Props = {
  header: 'home' | 'profile'
}

const Header = ({ header }: Props) => (
  <S.Container header={header}>
    {header === 'home' ? (
      <div className="container">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo da eFood" />
        </Link>
        <S.Slogan>
          <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        </S.Slogan>
      </div>
    ) : (
      <>
        {/* <div className="container">
          <S.Logo className="logo" src={logo} alt="Logo da eFood" />
        </div> */}

        <S.HProfile className="container">
          <S.Text>Restaurantes</S.Text>
          <Link to="/">
            <S.Logo className="logo" src={logo} alt="Logo da eFood" />
          </Link>
          <S.Cart>0 produto(s) no carrinho</S.Cart>
        </S.HProfile>
      </>
    )}
  </S.Container>
)

export default Header
