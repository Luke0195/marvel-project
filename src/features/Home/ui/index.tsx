import React, { useEffect, useCallback } from 'react'
import { Header } from '../../components'

import * as S from './styles'

const HomeUi = () => {
  const handlePlayAudio = () => {
    if (Notification.permission === 'granted') {
      new Audio('/marvel_intro.mp3').play()
    }
  }
  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    if (Notification.permission === 'granted') {
      handlePlayAudio()
    }
  }, [])

  return (
    <S.Container>
      <Header />
    </S.Container>
  )
}

export default HomeUi
