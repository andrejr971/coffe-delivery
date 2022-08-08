import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppProvider } from './contexts'

import { Router } from './Router'
import { GlobalStyles } from './styles/global'

import theme from './styles/theme'

export function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />

          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  )
}
