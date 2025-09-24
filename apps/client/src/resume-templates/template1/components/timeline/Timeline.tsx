import type { FC } from "react";
import styles from "./Timeline.module.scss";
import resumeStyles from "../../../shared/ResumeTemplate.module.scss";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faLaptopCode, faStar } from "@fortawesome/free-solid-svg-icons";

const Timeline: FC = () => {
  return (
    <Grid size='grow' className={`${styles.timeline}`}>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faStar}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>summary</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />
            </Box>
        </Box>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faBriefcase}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>professional experience</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />
            </Box>
        </Box>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faLaptopCode}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>projects</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />
            </Box>
        </Box>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faAward}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>awards & certifications</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />
            </Box>
        </Box>
    </Grid>
  );
};

export default Timeline;