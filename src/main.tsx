import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import customTheme from './themes/custom-theme.ts'
import { CssBaseline, useMediaQuery } from '@mui/material'

const Root = () =>{
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return(
    <StrictMode>
      <ThemeProvider theme={customTheme(prefersDarkMode)}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root/>)