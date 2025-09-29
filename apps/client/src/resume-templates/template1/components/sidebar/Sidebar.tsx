import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import resumeStyles from "../../../shared/ResumeTemplate.module.scss";
import styles from "./Sidebar.module.scss";
import { faEnvelopeOpen, faGlobe, faGraduationCap, faIdBadge, faLocationPin, faMobileAlt, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type ResumeSidebarProps = {
    contactInfo: {
        location: string;
        email: string;
        phone: string;
        linkedin: string;
        github: string;
        website: string;
    };
    skills: string[]
    
};

const Sidebar: FC<ResumeSidebarProps> = (props: ResumeSidebarProps) => {
  return (
    <Grid className={`${styles.sidebar}`}>
        <Box className={`${styles.section}`}>
            <Grid container gap={1}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faIdBadge}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeHeading}`}>contact information</Typography>
                </Grid>
                <Grid size={12}>
                    <Divider sx={{margin: '0.25rem 0.5rem'}} />
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faLocationPin}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>{props.contactInfo.location}</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faMobileAlt}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>{props.contactInfo.phone}</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>{props.contactInfo.email}</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>{props.contactInfo.linkedin}</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faGithub}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>{props.contactInfo.github}</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faGlobe}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>{props.contactInfo.website}</Typography>
                </Grid>
            </Grid>
        </Box>

        <Box className={`${styles.section}`}>
            <Grid container gap={1}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faScrewdriverWrench}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeHeading}`}>skills</Typography>
                </Grid>
                <Grid size={12}>
                    <Divider sx={{margin: '0.25rem 0.5rem'}} />
                </Grid>
                <Grid container size={12} gap={1}>
                    {
                        props.skills?.map((skill, index) => {
                            return(
                                <Grid size='auto' className={`${styles.skill}`} key={index}>
                                    <Typography className={`${resumeStyles.resumeBody}`}>{skill}</Typography>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
            
        </Box>

        <Box className={`${styles.section}`}>
            <Grid container gap={1}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faGraduationCap}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeHeading}`}>education</Typography>
                </Grid>
                <Grid size={12}>
                    <Divider sx={{margin: '0.25rem 0.5rem'}} />
                </Grid>
            </Grid>
            
        </Box>
    </Grid>
  );
};

export default Sidebar;