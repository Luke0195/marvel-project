import React from 'react'
import { IoSunny, IoClose } from 'react-icons/io5'
import * as S from './styles'

const SideBar = (): JSX.Element => {
  return (
    <S.Container>
      <IoClose size={20} />
      <div>
        <strong> Theme Switcher </strong>
        <button>
          <IoSunny size={20} />
        </button>
      </div>
    </S.Container>
  )
}

export default SideBar
