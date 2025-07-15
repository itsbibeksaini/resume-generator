import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import customTheme from './themes/custom-theme.ts'
import { CssBaseline, useMediaQuery } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Template1 from './templates/Template1/Template1.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/template1',
    element: <Template1/>,
  }
])

const Root = () =>{
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return(
    <StrictMode>
      {/* <ThemeProvider theme={customTheme(prefersDarkMode)}> */}
        {/* <CssBaseline enableColorScheme /> */}
        <RouterProvider router={routes} />
      {/* </ThemeProvider> */}
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root/>)