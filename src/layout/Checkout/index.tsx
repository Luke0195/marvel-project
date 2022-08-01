import React from 'react'
import { IoClose } from 'react-icons/io5'
import * as S from './styles'

export const Checkout = (): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <strong> My Cart</strong>
        <IoClose size={20} />
      </S.Header>
    </S.Container>
  )
}
