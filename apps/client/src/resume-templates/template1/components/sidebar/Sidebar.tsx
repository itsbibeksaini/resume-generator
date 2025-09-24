import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import resumeStyles from "../../../shared/ResumeTemplate.module.scss";
import styles from "./Sidebar.module.scss";
import { faEnvelopeOpen, faGlobe, faGraduationCap, faIdBadge, faLocationPin, faMobileAlt, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar: FC = () => {
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
                    <Typography className={`${resumeStyles.resumeBody}`}>Toronto Ontario, Canada N5V - OC2</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faMobileAlt}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>+1 (123) 456-7890</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>example@example.com</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>linkedin.com/in/yourprofile</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faGithub}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>github.com/yourprofile</Typography>
                </Grid>
            </Grid>
            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                <Grid sx={{position:'relative'}} size={1}>
                    <FontAwesomeIcon icon={faGlobe}/>
                </Grid>
                <Grid  size='grow'>
                    <Typography className={`${resumeStyles.resumeBody}`}>www.yourwebsite.com</Typography>
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