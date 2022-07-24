import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import dark from '../../assets/theme/dark'
import Home from '../../pages/Home'

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <ThemeProvider theme={dark}>
        <Home />
      </ThemeProvider>
      <GlobalStyles />
    </React.Fragment>
  )
}

export default App
