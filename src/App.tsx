import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogProvider } from './contexts/BlogContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

/*
- react
  - useContext
  - useEffect
- styled-components
  - createGlobalStyle
  - ThemeProvider
- react-router-dom
- font-awesome
- axios
*/

function App() {
  return (
    <BlogProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </BlogProvider>
  )
}

export default App
