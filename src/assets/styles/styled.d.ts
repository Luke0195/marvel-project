import styled from 'styled-components'
import { ColorProps } from './interfaces'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: PrimaryColors
      secondary: SecondaryColors
      white: string
      aux: string
    }
  }
}
