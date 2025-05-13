
import type { FC } from 'react';
import styles from './ContentArea.module.scss';
import { Box, Button, Card, Checkbox, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';

const ContentArea: FC = () => (
  <Grid className={styles.ContentArea} size="grow">
    <Card className='sticky-header' sx={{boxShadow: '0 -3px 5px'}}>
      <Typography variant='h4'>Resume Details</Typography>
      <Divider />
    </Card>
    <Grid className={`${styles.detailsArea}`}>
      <Grid container>
        <Grid size={6} sx={{padding:'20px 30px'}}>
          <TextField label="FIRST NAME" variant="outlined" fullWidth required/>
        </Grid>
        <Grid size={6} sx={{padding:'20px 30px'}}>
          <TextField label="LAST NAME" variant="outlined" fullWidth required/>
        </Grid>
      </Grid>
      <Grid container>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="JOB POSITION" variant="outlined" fullWidth required helperText="Enter job position for which you are applying."/>
          </Grid>          
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="EMAIL" variant="outlined" fullWidth required/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={6} sx={{padding:'20px 30px', border:'1px solid', borderRadius:'0.25rem'}} container gap={2}>
            <Grid size={12}>
              <Typography variant='h6'>PHONE NUMBER</Typography>
            </Grid>
            <Grid size={2}>
              <TextField label="COUNTRY" variant="outlined" fullWidth required/>
            </Grid>
            <Grid size={4}>
              <TextField label="AREA CODE" variant="outlined" fullWidth required/>
            </Grid>
            <Grid size={5}>
              <TextField label="NUMBER" variant="outlined" fullWidth required/>
            </Grid>
          </Grid>          
        </Grid>
        <Grid container>
          <Grid size={3} sx={{padding:'20px 30px'}}>
            <TextField label="CITY" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={3} sx={{padding:'20px 30px'}}>
            <TextField label="PROVINCE/STATE" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={3} sx={{padding:'20px 30px'}}>
            <TextField label="COUNTRY" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={3} sx={{padding:'20px 30px'}}>
            <TextField label="POSTAL CODE" variant="outlined" fullWidth/>
          </Grid>
        </Grid>
        <Grid>
          <Typography variant='h5' sx={{padding:'20px 30px'}}>Social Media</Typography>
        </Grid>
        <Grid container>
          <Grid size={4} sx={{padding:'20px 30px'}}>
            <TextField label="LINKEDIN" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={4} sx={{padding:'20px 30px'}}>
            <TextField label="GITHUB" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={4} sx={{padding:'20px 30px'}}>
            <TextField label="WEBSITE - Portfolio" variant="outlined" fullWidth required/>
          </Grid>          
        </Grid>
        <Grid>
          <Divider/>
        </Grid>
        <Grid>
          <Typography variant='h5' sx={{padding:'20px 30px'}}>Education</Typography>
        </Grid>
        <Grid container>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="COLLEGE/UNIVERSITY" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="LOCATION" variant="outlined" fullWidth required/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="DEGREE" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="FIELD OF STUDY" variant="outlined" fullWidth required/>
          </Grid>          
        </Grid>
        <Grid size={6} container sx={{border:'1px solid', borderRadius:'0.25rem'}}>
          <Grid size={12} sx={{padding:'20px 30px'}}>
            <Typography variant='h6'>Graduation Date (or Expected Graduation Date)</Typography>
          </Grid>
          <Grid size={12} sx={{padding:'20px 30px'}} container gap={2}>
            <Grid size={5.5}>
              <TextField label="MONTH" variant="outlined" fullWidth required/>
            </Grid>
            <Grid size={6}>
              <TextField label="YEAR" variant="outlined" fullWidth required/>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid>
          <Divider/>
        </Grid>
        <Grid>
          <Typography variant='h5' sx={{padding:'20px 30px'}}>Summary</Typography>
        </Grid>
        <Grid container>
          <Grid size={12} sx={{padding:'20px 30px'}}>
            <TextField label="SUMMARY" variant="outlined" fullWidth required multiline rows={10} helperText='Enter summary of your professional profile here.'/>
          </Grid>
        </Grid>
        <Grid>
          <Divider/>
        </Grid>
        <Grid>
          <Typography variant='h5' sx={{padding:'20px 30px'}}>Professional Experience</Typography>
        </Grid>
        <Grid container>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="JOB ROLE" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="EMPLOYEER" variant="outlined" fullWidth required/>
          </Grid>          
        </Grid>
        <Grid container>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="LOCATION" variant="outlined" fullWidth required helperText='Enter job location here.'/>
          </Grid>          
        </Grid>
        <Grid container>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="START DATE" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <TextField label="END DATE" variant="outlined" fullWidth required/>
          </Grid>          
        </Grid>
        <Grid container sx={{justifyContent: "flex-end", alignItems: "flex-end",}}>
          <Grid size={6} sx={{padding:'20px 30px'}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="I am currently employeed here." />
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={12} sx={{padding:'20px 30px'}}>
            <TextField label="DESCRIPTION" variant="outlined" fullWidth required multiline rows={10} helperText='Enter roles and responsibilities for this position.'/>
          </Grid>
        </Grid>
        <Grid sx={{ border:'2px dashed', borderRadius:'0.25rem', height:'200px', marginBottom:'1rem', position:"relative"}}>
          <Box className='centralize' sx={{textAlign:'center'}}>
            <Typography variant='h3' >Click To</Typography>
            <Typography variant='h3'>Add Job Experience</Typography>
          </Box>
        </Grid>
        <Grid>
          <Divider/>
        </Grid>
    </Grid>
    
    <Card className={`${styles.actionButtons}`}>
      <Button variant="outlined" color='secondary' sx={{marginRight:'0.5rem'}}>Clear</Button>
      <Button variant="outlined" color='primary'>Generate</Button>
    </Card>
  </Grid>
);

export default ContentArea;
