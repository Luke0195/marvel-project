import React from 'react'
import { ComponentProps } from './protocols/interface'

import logo from '../../../assets/img/svgs/logo.svg'
import * as S from './styles'

const Welcome = (props: ComponentProps) => {
  const { isLoading } = props

  if (!isLoading) <></>
  return (
    <S.Container isLoading={isLoading}>
      <img src={logo} alt="logo do " />
    </S.Container>
  )
}

export default Welcome
