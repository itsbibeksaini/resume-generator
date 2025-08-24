import { type FC } from 'react'
import { RouterProvider } from 'react-router'
import { PRIVATE_ROUTES } from './core/routing/routes'
import { Grid } from '@mui/material'
import styles from './App.module.scss'
import { Menubar } from './components'

const App:FC = () => {

  return(
    <Grid className={`${styles.app}`} container>
      {/* <Grid size={12}>
        <Menubar />
      </Grid>
      <Grid sx={{border:'1px solid ', padding:'20px 30px'}} size='grow'>

      </Grid> */}
      <RouterProvider router={PRIVATE_ROUTES} />
    </Grid>
  )
}

export default App
