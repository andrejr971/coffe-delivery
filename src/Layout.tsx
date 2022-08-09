import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useTheme } from './hooks/useTheme'

import { Router } from './Router'
import { GlobalStyles } from './styles/global'

export function LayoutApp() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />

        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
