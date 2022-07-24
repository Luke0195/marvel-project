import React from 'react'
import * as S from './styles'

import carshop from '../../../assets/img/svgs/carshop.svg'

const Cart = (): JSX.Element => {
  return (
    <S.Container>
      <img src={carshop} alt="carshop" />
      <span> 0 </span>
    </S.Container>
  )
}

export default Cart
