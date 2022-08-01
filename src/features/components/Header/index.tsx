import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Cart from '../Cart'
import logo from '../../../assets/img/svgs/logo.svg'
import menu from '../../../assets/img/svgs/menu.svg'
import * as S from './styles'

const Header = (): JSX.Element => {
  return (
    <S.Container>
      <S.Content>
        <S.Menu>
          <img src={menu} alt="menu hamburger" />
        </S.Menu>
        <S.LeftContent>
          <img src={logo} alt="logo da marvel" />
          <div>
            <input
              type="text"
              placeholder="Digite o nome do quadrinho ou personagem"
            />
            <FaSearch />
          </div>
        </S.LeftContent>
        <S.RigthContent>
          <ul>
            <li> Novidades </li>
            <li> Mais vendidos</li>
            <li> Queridinhos da galera</li>
          </ul>
          <Cart />
        </S.RigthContent>
      </S.Content>
    </S.Container>
  )
}

export default Header
