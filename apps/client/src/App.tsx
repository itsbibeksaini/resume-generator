import { type FC } from 'react'
import { RouterProvider } from 'react-router'
import { PRIVATE_ROUTES } from './core/routing/routes'
import { Grid } from '@mui/material'
import styles from './App.module.scss'
import { Menubar } from './components'

const App:FC = () => {

  return(
    <Grid className={`${styles.app}`} container direction={'column'}>
      <Grid size={12}>
        <Menubar />
      </Grid>
      {/* <RouterProvider router={PRIVATE_ROUTES} /> */}
    </Grid>
  )
}

export default App
