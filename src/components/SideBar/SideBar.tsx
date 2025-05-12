import type { FC } from 'react';
import styles from  './SideBar.module.scss';
import { Box, Divider, Grid, Typography } from '@mui/material';

const SideBar: FC = () => (
  <Grid className={`${styles.sidebar}`}>
    <Grid className='sticky-header'>
      <Typography variant='h4'>Templates</Typography>
      <Divider />
    </Grid>
    <Grid sx={{padding:'20px 30px', border:'1px solid'}}>
      <Box sx={{border:'1px solid red', borderRadius:'0.25rem', height:'350px'}}></Box>
    </Grid>    
  </Grid>
);

export default SideBar;
