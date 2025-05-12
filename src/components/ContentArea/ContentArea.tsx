
import type { FC } from 'react';
import styles from './ContentArea.module.scss';
import { Button, Divider, Grid, Typography } from '@mui/material';

const ContentArea: FC = () => (
  <Grid className={styles.ContentArea} size="grow">
    <Grid className='sticky-header'>
      <Typography variant='h4'>Resume Details</Typography>
      <Divider />
    </Grid>
    <Grid className={`${styles.detailsArea}`}>

    </Grid>
    <Grid className={`${styles.actionButtons}`}>
      <Button variant="outlined" color='secondary' sx={{marginRight:'0.5rem'}}>Clear</Button>
      <Button variant="outlined" color='primary'>Generate</Button>
    </Grid>
  </Grid>
);

export default ContentArea;
