import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hi, im Vinicius Peres</h1>
      <h2>Web Developer</h2>
      <p>solving problems is my passion, and writing code is my superpower.</p>
    </ThemeProvider>
  )
}
