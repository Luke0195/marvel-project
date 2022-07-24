interface PrimaryColors {
  [key: string | number]: string
}

interface SecondaryColors {
  [key: string | number]: string
}

export interface ColorProps {
  colors: {
    primary: PrimaryColors
    secondary: SecondaryColors
    white: string
    aux: string
  }
}
