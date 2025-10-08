import type { FC } from "react";
import styles from "./Timeline.module.scss";
import resumeStyles from "../../../shared/ResumeTemplate.module.scss";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faLaptopCode, faStar } from "@fortawesome/free-solid-svg-icons";

type TimelineProps = {
    summary: string[]
}

const Timeline: FC<TimelineProps> = (props: TimelineProps) => {
  return (
    <Grid size='grow' className={`${styles.timeline}`}>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faStar}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>summary</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />
                <ul className={`${styles.points}`}>                    
                    {
                        props.summary.map((data, index) => {
                            return(
                                <li>
                                    <Typography className={`${resumeStyles.resumeBody}`} key={index}>{data}</Typography>
                                </li>                                
                            )
                        })
                    }

                </ul>
            </Box>
        </Box>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faBriefcase}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>professional experience</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />
                <Box className={`${styles.subSection}`}>
                    <Grid className={`${styles.subSectionHeader}`} container>
                        <Grid size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>Senior Back-End Developer</Typography>
                            <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{marginTop:'0.5rem'}}>Tech Solutions Inc.</Typography>
                        </Grid>
                        <Grid sx={{textAlign:'right'}}>
                            <Typography className={`${resumeStyles.resumeBody}`}>Jan 2020 - Present</Typography>
                            <Typography className={`${resumeStyles.resumeBody}`}>New York, NY</Typography>
                        </Grid>
                        
                        
                    </Grid>

                    <ul className={`${styles.points}`}>
                        <li>
                            <Typography className={`${resumeStyles.resumeBody}`}>Led the design and implementation of a microservices architecture that improved system scalability by 40% and reduced deployment times by 30%.</Typography>
                        </li>          
                        <li>
                            <Typography className={`${resumeStyles.resumeBody}`}>Optimized database queries and indexing strategies, resulting in a 25% increase in application performance and a 15% reduction in server costs.</Typography>
                        </li>
                        <li>
                            <Typography className={`${resumeStyles.resumeBody}`}>Collaborated with cross-functional teams to migrate legacy systems to cloud-based solutions, enhancing system reliability and reducing downtime by 20%.</Typography>
                        </li>
                        <li>
                            <Typography className={`${resumeStyles.resumeBody}`}>Mentored junior developers, fostering a culture of continuous learning and improving team productivity by 15% through code reviews and knowledge sharing sessions.</Typography>
                        </li>          
                    </ul>

                    <Box className={`${styles.achievements}`}>
                        <Box className={`${styles.achievementIcon}`}>
                            <FontAwesomeIcon icon={faAward}/>
                        </Box>
                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>Achievements</Typography>
                    </Box>

                    <ul className={`${styles.points}`}>
                        <li>
                            <Typography className={`${resumeStyles.resumeBody}`}>Led the design and implementation of a microservices architecture that improved system scalability by 40% and reduced deployment times by 30%.</Typography>
                        </li>          
                        <li>
                            <Typography className={`${resumeStyles.resumeBody}`}>Optimized database queries and indexing strategies, resulting in a 25% increase in application performance and a 15% reduction in server costs.</Typography>
                        </li>                       
                    </ul>

                </Box>
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