import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

/*
- react
- styled-components
  - createGlobalStyle
  - ThemeProvider
*/

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
