import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router'
import { PRIVATE_ROUTES } from './core/routing/routes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={PRIVATE_ROUTES} />
  </StrictMode>,
)
