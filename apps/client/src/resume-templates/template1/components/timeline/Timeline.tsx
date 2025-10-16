import type { FC } from "react";
import styles from "./Timeline.module.scss";
import resumeStyles from "../../../shared/ResumeTemplate.module.scss";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faLaptopCode, faStar } from "@fortawesome/free-solid-svg-icons";
import type { AwardsAndCertificationsInfo, ProfessionalExperienceInfo, ProjectInfo } from "../../../../core/template-data/TemplateData";

type TimelineProps = {
    summary: string[],
    professionalExperience: ProfessionalExperienceInfo[],
    projects: ProjectInfo[],
    awardsAndCertifications?: AwardsAndCertificationsInfo[]
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
                                <li key={index}>
                                    <Typography className={`${resumeStyles.resumeBody}`}>{data}</Typography>
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

                {
                    props.professionalExperience.map((experience, index) => {
                        return(                                
                            <Box className={`${styles.subSection}`} key={index}>
                                <Grid className={`${styles.subSectionHeader}`} container>
                                    <Grid size='grow'>
                                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>{experience.jobPosition}</Typography>
                                        <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{marginTop:'0.5rem'}}>{experience.companyName}</Typography>
                                    </Grid>
                                    <Grid sx={{textAlign:'right'}}>
                                        <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{experience.startDate} - {experience.endDate}</Typography>
                                        <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{experience.city} {experience.state}, {experience.country}</Typography>
                                    </Grid>
                                    
                                    
                                </Grid>

                                <ul className={`${styles.points}`}>
                                    {
                                        experience.responsibilities.map((responsibility, idx) => {
                                            return(
                                                <li key={idx}>
                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{responsibility}</Typography>
                                                </li>                                                
                                            )
                                        })
                                    }                                    
                                </ul>

                                <Box className={`${styles.achievements}`}>
                                    <Box className={`${styles.achievementIcon}`}>
                                        <FontAwesomeIcon icon={faAward}/>
                                    </Box>
                                    <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>Achievements</Typography>
                                </Box>

                                <ul className={`${styles.points}`}>
                                    {
                                        experience.achievements.map((achievement, idx) => {
                                            return(
                                                <li key={idx}>
                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{achievement}</Typography>
                                                </li>                                                
                                            )
                                        })
                                    }                                    
                                </ul>

                            </Box>
                        )
                    })                
                }
            </Box>
            
            
        </Box>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faLaptopCode}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>projects</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />
                {
                    props.projects.map((project, index) => {
                        return(                                
                            <Box className={`${styles.subSection}`} key={index}>
                                <Grid className={`${styles.subSectionHeader}`} container>
                                    <Grid size='grow'>
                                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>{project.projectName}</Typography>
                                        <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{marginTop:'0.5rem'}}>{project.subtitle}</Typography>
                                    </Grid>
                                    <Grid sx={{textAlign:'right'}}>
                                        <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{project.startDate} - {project.endDate}</Typography>                                        
                                    </Grid>                                    
                                </Grid>

                                <ul className={`${styles.points}`}>
                                    {
                                        project.projectDescription.map((desc, idx) => {
                                            return(
                                                <li key={idx}>
                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{desc}</Typography>
                                                </li>                                                
                                            )
                                        })
                                    }                                    
                                </ul>

                                <Box sx={{marginTop: '0.5rem'}}>
                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" sx={{fontStyle: 'italic'}}>Technologies: {project.projectTechnologies.join(', ')}</Typography>
                                </Box>

                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
        <Box className={`${styles.section}`}>
            <Box>
                <Box className={`${styles.sectionIcon}`}>
                    <FontAwesomeIcon icon={faAward}/>
                </Box>
                <Typography className={`${resumeStyles.resumeHeading}`}>awards & certifications</Typography>
                <Divider sx={{margin: '0.75rem 0'}} />

                {
                    props.awardsAndCertifications && props.awardsAndCertifications.length > 0 ?
                    props.awardsAndCertifications.map((item, index) => {
                        return(                                
                            <Box className={`${styles.subSection}`} key={index}>
                                <Grid className={`${styles.subSectionHeader}`} container>
                                    <Grid size='grow'>
                                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>{item.title}</Typography>
                                        <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{marginTop:'0.5rem'}}>{item.issuer}</Typography>
                                    </Grid>
                                    <Grid sx={{textAlign:'right'}}>
                                        <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{item.issueDate} {item.expirationDate ? `- ${item.expirationDate}` : ''}</Typography>                                        
                                    </Grid>                                    
                                </Grid>                                
                            </Box>
                        )
                    }) :
                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">No awards or certifications added</Typography>
                }
            </Box>
        </Box>
    </Grid>
  );
};

export default Timeline;