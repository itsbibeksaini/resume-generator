import { StrictMode, type FC } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import {customTheme} from './core/themes/customTheme.ts'

const Root: FC = () =>{

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return(
    <StrictMode>
      <ThemeProvider theme={customTheme(prefersDarkMode)}>
        <CssBaseline enableColorScheme />
        <App/>
      </ThemeProvider>      
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root/>)