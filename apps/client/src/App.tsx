import { type FC } from 'react'
import './App.scss'
import { RouterProvider } from 'react-router'
import { PRIVATE_ROUTES } from './core/routing/routes'
import { Grid } from '@mui/material'

const App:FC = () => {

  return(
    <Grid sx={{border:'1px solid red', height:'100vh'}}>
      <RouterProvider router={PRIVATE_ROUTES} />
    </Grid>
  )
}

export default App
