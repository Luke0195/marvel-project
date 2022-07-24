import React from 'react'

import logo from '../../../assets/img/logo.svg'
import carshop from '../../../assets/img/carshop.svg'
import * as S from './styles'

const Header = (): JSX.Element => {
  return (
    <S.Container>
      <S.Content>
        <S.LeftContent>
          <img src={logo} alt="logo da marvel" />
        </S.LeftContent>
        <S.RigthContent>
          <ul>
            <li> Novidades </li>
            <li> Mais vendidos</li>
            <li> Queridinhos da galera</li>
            <li>
              <div>
                <img src={carshop} alt="carshop" />
                <span> 0 </span>
              </div>
            </li>
          </ul>
        </S.RigthContent>
      </S.Content>
    </S.Container>
  )
}

export default Header
