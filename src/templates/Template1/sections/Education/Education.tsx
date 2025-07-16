import type { FC } from "react";
import styles from "./Education.module.scss";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import type { educationDetails } from '../../../../data/resumeDetails';

const Education: FC<{ education: educationDetails[] }> = ({ education }) => {
    return(
        <Card className={`${styles.section}`}>
            <Grid container gap={1}>
              <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faBriefcase}/>
              </Grid>
              <Grid>
                <Typography className='resume-heading'>Education</Typography>
              </Grid>                          
              <Grid size={12}>
                <Divider style={{marginBottom:'0.5rem'}}/>
              </Grid>
            </Grid>
            {
              education && education.length > 0 ? 
                education.map((edu:educationDetails, index:number) => (
                  <Box key={index} sx={{borderLeft:'3px solid', paddingLeft:'1rem', margin:'0.25rem 0.75rem', marginBottom:'0.75rem'}}>
                    <Typography className='resume-subheading'>{edu.institutionName}</Typography>
                    <Typography className='resume-body'>{edu.fieldOfStudy}</Typography>
                    <Typography className='resume-body'>{edu.startDate} - {edu.endDate ? edu.endDate : 'Present'}</Typography>
                    <Typography className='resume-body'>{edu.location}</Typography>
                  </Box>
                )) : 
                <Typography className='resume-body'>No education details provided.</Typography>
            }            
          </Card>
    )
}

export default Education;
