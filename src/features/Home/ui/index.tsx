import React, { useEffect, useRef } from 'react'

import { Header, Welcome } from '../../components'

import * as S from './styles'

const HomeUi = () => {
  const isLoadingRef = useRef(true)

  const handlePlayAudio = () => {
    new Audio('/marvel_intro.mp3').play()
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    if (Notification.permission === 'granted') {
      handlePlayAudio()
    }
  }, [])

  useEffect(() => {
    if (isLoadingRef.current) {
      isLoadingRef.current = false
    }
    return
  }, [])
  return (
    <S.Container>
      <Welcome isLoading={isLoadingRef.current} />
      <Header />
    </S.Container>
  )
}

export default HomeUi
