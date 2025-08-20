import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { ROUTES } from './core/routing/routes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ROUTES} />
  </StrictMode>,
)
