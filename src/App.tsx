import './App.scss'
import { Grid } from '@mui/material'
import './App.scss'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <Grid className='resume-builder max-supported-width' container>
      <SideBar></SideBar>      
    </Grid>
  )
}

export default App
