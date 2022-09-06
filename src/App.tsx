import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/globals";
import { DefaultTheme } from "./styles/theme/default";

export function App() {

  return (
    <ThemeProvider theme={ DefaultTheme }>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}