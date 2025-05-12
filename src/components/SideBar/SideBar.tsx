import type { FC } from 'react';
import styles from  './SideBar.module.scss';
import { Box, Card, Divider, Grid, Typography } from '@mui/material';

const SideBar: FC = () => (
  <Grid className={`${styles.sidebar}`}>
    <Card className='sticky-header' sx={{boxShadow: '0 3px 5px'}}>
      <Typography variant='h4'>Templates</Typography>
      <Divider />
    </Card>
    <Grid sx={{padding:'20px 30px', border:'1px solid'}}>
      <Box sx={{border:'1px solid red', borderRadius:'0.25rem', height:'350px'}}></Box>
    </Grid>    
  </Grid>
);

export default SideBar;
