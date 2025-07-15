import type { FC } from 'react';
import styles from './Template1.module.scss';
import { useLocation } from 'react-router';
import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBriefcase, faEnvelopeOpen, faGlobe, faIdBadge, faLaptopCode, faLocationPin, faMobileAlt, faScrewdriverWrench, faStar, faWrench } from '@fortawesome/free-solid-svg-icons';
import type { Education, ProfessionalExperience } from '../../data/resumeDetails';
import ContactInformation from './sections/ContactInformation/ContactInformation';
import Skills from './sections/Skills/Skills';

const Template1: FC = () => {

  const state = useLocation()

  return(
    <Grid className={`${styles.Template1}`} container>
      <header>
        <Typography className={`resume-name-title ${styles.resumeNameTitle}`}>{state.state?.firstName} {state.state?.lastName}</Typography>
        <Typography className={`resume-job-title ${styles.resumeJobTitle}`}>{state.state?.jobPosition}</Typography>
        <Divider style={{ marginTop: '1rem'}}/>
      </header>
      <Grid container size={12}>
        <Grid className={`${styles.leftColumn}`}>
          <ContactInformation contactInfo={state.state?.contactInfo} />          
          <Skills />
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
              state.state?.education && state.state?.education.length > 0 ? 
                state.state?.education.map((edu:Education, index:number) => (
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
        </Grid>
        <Grid className={`${styles.rightColumn}`} size='grow'>
          <Box className={`${styles.timeline}`}>
            <Box className={`${styles.section}`}>
              <Box className={`${styles.sectionIcon}`}>
                <FontAwesomeIcon icon={faStar} />
              </Box>
              <Typography className='resume-heading'>Summary</Typography>
              <Divider sx={{margin:'0.5rem 0'}} />
              <ul className={`${styles.resumeList}`}>
                {state.state?.summary?.map((item:string, index:number) => (
                  <li key={index}>
                    <Typography className='resume-body'>{item}</Typography>
                  </li>
                ))}                  
              </ul>
            </Box>
            <Box className={`${styles.section}`}>
              <Box className={`${styles.sectionIcon}`}>
                <FontAwesomeIcon icon={faBriefcase} />
              </Box>
              <Typography className='resume-heading'>PROFESSIONAL EXPERIENCE</Typography>
              <Divider sx={{margin:'0.5rem 0'}} />
              {
                state.state?.professionalExperience.map((experience:ProfessionalExperience, index:number) => (
                  <Box className={`${styles.subSection}`}>
                    <Grid container sx={{marginBottom:'1rem'}}>
                      <Grid>
                        <Typography className='resume-subtitle'>{experience.companyName}</Typography>
                        <Typography className='resume-body'>{experience.jobTitle}</Typography>
                      </Grid>
                      <Grid size='grow' sx={{textAlign:'right'}}>
                        <Typography className='resume-body'>{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}</Typography>
                        {/* <Typography className='resume-body'>{experience.jobTitle}</Typography> */}
                      </Grid>
                      <Grid>
                        <Divider sx={{margin:'0.5rem 0'}} />
                      </Grid>
                    </Grid>                
                    <ul className={`${styles.resumeList}`}>
                      {state.state?.summary?.map((item:string, index:number) => (
                        <li key={index}>
                          <Typography className='resume-body'>{item}</Typography>
                        </li>
                      ))}                  
                    </ul>
                  </Box>
                ))
              }
            </Box>
            <Box className={`${styles.section}`}>
              <Box className={`${styles.sectionIcon}`}>
                <FontAwesomeIcon icon={faLaptopCode} />
              </Box>
              <Typography className='resume-heading'>Projects</Typography>
              <Divider sx={{margin:'0.5rem 0'}} />
              
            </Box>
            <Box className={`${styles.section}`}>
              <Box className={`${styles.sectionIcon}`}>
                <FontAwesomeIcon icon={faAward} />
              </Box>
              <Typography className='resume-heading'>Awards & Certification</Typography>
              <Divider sx={{margin:'0.5rem 0'}} />
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Template1;
