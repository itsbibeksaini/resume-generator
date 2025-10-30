import { Box, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState, type FC, type RefObject } from "react";
import styles from './Template3.module.scss'
import resumeStyles from '../shared/ResumeTemplate.module.scss'
import { useLocation, useOutletContext } from "react-router";
import type { TemplateData } from "../../core/template-data/TemplateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faEnvelopeOpen, faGlobe, faHSquare, faLaptopCode, faLocationPin, faMobileAlt, faScrewdriverWrench, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type OutletContextType = {
    setTemplateRef?: (ref: RefObject<null>) => void;
};

const Template3: FC = () => {

    const location = useLocation();

    const [resumeData] = useState<TemplateData>(location.state);

    const contentRef = useRef(null);

    const { setTemplateRef } = useOutletContext<OutletContextType>();

    useEffect(() => {
            if(setTemplateRef) {
                setTemplateRef(contentRef);
            }
        }, [setTemplateRef]);

    return(
        <Grid ref={contentRef} className={`${styles.template3}`} container gap={1} sx={(theme) => ({
            backgroundColor: theme.palette.background.default
        })}>
            <Grid className={`${styles.templateHeader}`} container size={12}>
                <Grid className={`${styles.row}`} container>
                    <Grid>
                        <Typography sx={{fontSize:'4rem', lineHeight:'1.1 !important'}}>{resumeData.fullName}</Typography>
                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{lineHeight:'1.2 !important', marginTop:'0.30rem'}}>{resumeData.jobTitle}</Typography>
                    </Grid>
                    <Grid sx={{justifyContent: "flex-end", alignItems: "center", position:'relative'}} size='grow'>
                        <Box sx={{right:0}} className={`vertical-center`}>
                            <Grid container gap={0.5} >
                                <Grid>
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </Grid>
                                <Grid>
                                    <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.phone}</Typography>
                                </Grid>                                
                            </Grid>
                            <Grid container gap={0.5}>
                                <Grid>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                </Grid>
                                <Grid>
                                    <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.email}</Typography>
                                </Grid>                                
                            </Grid>
                            <Grid container gap={0.5}>
                                <Grid>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </Grid>
                                <Grid>
                                    <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.location}</Typography>
                                </Grid>                                
                            </Grid>
                        </Box>
                    </Grid>
                    <Divider variant="middle" sx={{margin: '0.5rem 0', width:'100%'}}/>
                    <Grid sx={{ justifyContent: "center", alignItems: "center"}} container size={12} gap={1}>
                        <Grid container gap={0.5}>
                            <Grid>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Grid>
                            <Grid>
                                <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.linkedin}</Typography>
                            </Grid>                                
                            <Grid>
                                <Divider orientation="vertical" sx={{marginLeft:'0.5rem'}} />
                            </Grid>
                        </Grid>
                        <Grid container gap={0.5} >
                            <Grid>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Grid>
                            <Grid>
                                <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.github}</Typography>
                            </Grid>
                            <Grid>
                                <Divider orientation="vertical" sx={{marginLeft:'0.5rem'}} />
                            </Grid>                                
                        </Grid>
                        <Grid container gap={0.5} >
                            <Grid>
                                <FontAwesomeIcon icon={faGlobe}/>
                            </Grid>
                            <Grid>
                                <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.website}</Typography>
                            </Grid>                                
                        </Grid>
                    </Grid>
                    <Divider variant="middle" sx={{margin: '0.5rem 0', width:'100%'}}/>
                </Grid>
                <Grid className={`${styles.row}`}>
                    <Grid container gap={1}>
                        <Grid sx={{position:'relative'}}>
                            <FontAwesomeIcon icon={faStar}/>
                        </Grid>
                        <Grid  size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>highlights</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{margin: '0 0.5rem'}} />
                        </Grid>                        
                    </Grid>    
                    <Box className={`${styles.section}`}>
                        <Box className={`${styles.timeline}`}>
                            <ul>
                                {
                                    resumeData.summary.map((data, index) => {
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
                </Grid>
                <Grid className={`${styles.row}`}>
                    <Grid container gap={1}>
                        <Grid sx={{position:'relative'}}>
                            <FontAwesomeIcon icon={faScrewdriverWrench}/>
                        </Grid>
                        <Grid  size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>skills</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{margin: '0 0.5rem'}} />
                        </Grid>
                    </Grid>
                    <Grid className={`${styles.section}`}>                        
                        <Grid container gap={0.5} className={`${styles.skills}`}>
                            {
                                resumeData.skills.map((skill, index) => (
                                    <Grid container key={index}>
                                        <Grid sx={{ padding: '0.25rem' }}>
                                            <Typography className={resumeStyles.resumeBody}>{skill}</Typography>
                                        </Grid>
                                        {index !== (resumeData.skills.length - 1) && 
                                            <Grid>
                                                <Divider orientation="vertical" sx={{ marginLeft: '0.5rem' }} />
                                            </Grid>
                                        }
                                    </Grid>
                                ))
                            }                        
                        </Grid>                        
                    </Grid>
                </Grid>
                <Grid className={`${styles.row}`}>
                    <Grid container gap={1}>
                        <Grid sx={{position:'relative'}}>
                            <FontAwesomeIcon icon={faBriefcase}/>
                        </Grid>
                        <Grid  size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>Professional experience</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{margin: '0 0.5rem'}} />
                        </Grid>
                    </Grid>
                    <Box className={`${styles.section}`}>
                        <Box className={`${styles.timeline}`}>
                            {
                                resumeData.professionalExperience.map((exp, index) => {
                                    return(
                                        <Box className={`${styles.subSection}`} key={index}>
                                            <Grid className={`${styles.subSectionHeader}`} container>
                                                <Grid size='grow'>
                                                    <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>{exp.jobPosition}</Typography>
                                                    <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{lineHeight:'1.5 !important'}} >{exp.companyName}</Typography>
                                                </Grid>
                                                <Grid sx={{textAlign:'right'}}>
                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{exp.startDate} - {exp.endDate}</Typography>
                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{exp.city} {exp.state}, {exp.country}</Typography>
                                                </Grid>                                                
                                            </Grid>                                            
                                            <ul>
                                                {
                                                    exp.responsibilities.map((data, index) => {
                                                        return(
                                                            <li key={index}>
                                                                <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{data}</Typography>
                                                            </li>
                                                        )
                                                    })
                                                }                            
                                            </ul>
                                            <Box className={`${styles.achievements}`}>
                                                <Box className={`${styles.achievementsIcon}`}>
                                                    <FontAwesomeIcon icon={faAward} />
                                                </Box>
                                                <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none', marginBottom:'0.5rem'}}>Achievements</Typography>
                                                <ul>
                                                    {
                                                        exp.achievements.map((ach, index) => {
                                                            return(
                                                                <li key={index}>
                                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{ach}</Typography>
                                                                </li>
                                                            )
                                                        })
                                                    }                                                    
                                                </ul>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }                            
                        </Box>
                    </Box>
                </Grid>
                <Grid className={`${styles.row}`}>
                    <Grid container gap={1}>
                        <Grid sx={{position:'relative'}}>
                            <FontAwesomeIcon icon={faLaptopCode}/>
                        </Grid>
                        <Grid  size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>Projects</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{margin: '0 0.5rem'}} />
                        </Grid>
                    </Grid>
                    <Box className={`${styles.section}`}>
                        <Box className={`${styles.timeline}`}>
                            {
                                resumeData.projects.map((project, index) => {
                                    return(
                                        <Box className={`${styles.subSection}`} key={index}>
                                            <Grid className={`${styles.subSectionHeader}`} container>
                                                <Grid size='grow'>
                                                    <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>{project.projectName}</Typography>
                                                    <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{lineHeight:'1.5 !important'}}>{project.subtitle}</Typography>
                                                </Grid>
                                                <Grid sx={{textAlign:'right'}}>
                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{project.startDate} - {project.endDate}</Typography>
                                                    {/* <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{exp.city} {exp.state}, {exp.country}</Typography> */}
                                                </Grid>
                                            </Grid>
                                            <ul>
                                                {
                                                    project.projectDescription.map((desc, index) => {
                                                        return(
                                                            <li key={index}>
                                                                <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{desc}</Typography>
                                                            </li>                                                
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Box sx={{marginTop: '0.5rem'}}>
                                                <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" sx={{fontStyle: 'italic'}}><strong>Technologies:</strong> {project.projectTechnologies.join(', ')}</Typography>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid className={`${styles.row}`}>
                    <Grid container gap={1}>
                        <Grid sx={{position:'relative'}}>
                            <FontAwesomeIcon icon={faAward}/>
                        </Grid>
                        <Grid  size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>awards & certifications</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{margin: '0 0.5rem'}} />
                        </Grid>
                    </Grid>
                    <Box className={`${styles.section}`}>
                        <Box className={`${styles.timeline}`}>
                            {
                                resumeData.awardsAndCertifications?.map((award, index) => {
                                    return(
                                        <Box className={`${styles.subSection}`} key={index}>
                                            <Grid className={`${styles.subSectionHeader}`} container>
                                                <Grid size='grow'>
                                                    <Typography className={`${resumeStyles.resumeHeading}`} sx={{textTransform: 'none'}}>{award.title}</Typography>
                                                    <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{lineHeight:'1.5 !important'}}>{award.issuer}</Typography>
                                                </Grid>
                                                <Grid sx={{textAlign:'right'}}>
                                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{award.issueDate} {award.expirationDate ? `- ${award.expirationDate}` : ''}</Typography>                                        
                                                </Grid>                                    
                                            </Grid>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Template3