import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Divider, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import styles from "./Skills.module.scss";

const Skills: FC = () => {
    return (
        <Card className={`${styles.section}`}>
            <Grid container gap={1}>
              <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faScrewdriverWrench}/>
              </Grid>
              <Grid>
                <Typography className='resume-heading'>Skills</Typography>
              </Grid>                          
              <Grid size={12}>
                <Divider style={{marginBottom:'0.5rem'}}/>
              </Grid>
            </Grid>
            
            <Grid container gap={1} flexWrap='wrap'>
              <Grid sx={{border:'1px solid', padding:'0.25rem', borderRadius:'0.25rem'}}>
                <Typography className='resume-body'>JavaScript</Typography>
              </Grid>
              <Grid sx={{border:'1px solid', padding:'0.25rem', borderRadius:'0.25rem'}}>
                <Typography className='resume-body'>JavaScript</Typography>
              </Grid>
              <Grid sx={{border:'1px solid', padding:'0.25rem', borderRadius:'0.25rem'}}>
                <Typography className='resume-body'>Java</Typography>
              </Grid>
              <Grid sx={{border:'1px solid', padding:'0.25rem', borderRadius:'0.25rem'}}>
                <Typography className='resume-body'>.NET</Typography>
              </Grid>
              <Grid sx={{border:'1px solid', padding:'0.25rem', borderRadius:'0.25rem'}}>
                <Typography className='resume-body'>React</Typography>
              </Grid>
              <Grid sx={{border:'1px solid', padding:'0.25rem', borderRadius:'0.25rem'}}>
                <Typography className='resume-body'>Node.js</Typography>
              </Grid>
            </Grid>
        </Card>
    )
}

export default Skills;