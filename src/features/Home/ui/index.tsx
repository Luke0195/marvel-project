import React, { useEffect, useState } from 'react'

import { Header, Welcome } from '../../components'

import * as S from './styles'

const HomeUi = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <S.Container>
      <Welcome isLoading={loading} />
      <Header />
    </S.Container>
  )
}

export default HomeUi
