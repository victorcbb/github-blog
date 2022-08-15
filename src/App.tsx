import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { Globalstyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
