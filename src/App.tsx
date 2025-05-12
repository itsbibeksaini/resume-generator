import './App.scss'
import { Grid } from '@mui/material'
import './App.scss'
import SideBar from './components/SideBar/SideBar'
import ContentArea from './components/ContentArea/ContentArea'

function App() {
  return (
    <Grid className='resume-builder max-supported-width' container>
      <SideBar></SideBar>    
      <ContentArea></ContentArea>  
    </Grid>
  )
}

export default App
